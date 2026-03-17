import React, { useState } from 'react';
import { Routes, Route, useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { Card, Modal, Button } from '../components/UI';
import { PageHeader } from '../components/Layout';
import { PROJECTS, PRODUCTS } from '../constants';
import { Project, ProjectCategory, CATEGORY_MAP } from '../types';

// Modal Content Component
export const ProjectModal: React.FC<{ projectId: string; onClose: () => void }> = ({ projectId, onClose }) => {
  const project = PROJECTS.find(p => p.id === projectId);
  const [currentImg, setCurrentImg] = useState(0);

  if (!project) return null;

  const usedProducts = PRODUCTS.filter(p => project.relatedProductSlugs.includes(p.slug));

  return (
    <Modal isOpen={!!project} onClose={onClose}>
      <div className="flex flex-col">
        {/* Top: Image Carousel */}
        <div className="relative w-full h-[200px] md:h-[350px] bg-black flex items-center justify-center shrink-0">
          <img src={project.images[currentImg]} alt={project.title} className="w-full h-full object-cover" />
          {project.images.length > 1 && (
             <>
               <button onClick={() => setCurrentImg(prev => prev > 0 ? prev - 1 : project.images.length - 1)} className="absolute left-0 top-1/2 -translate-y-1/2 text-white bg-black/50 w-10 h-10 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-colors">←</button>
               <button onClick={() => setCurrentImg(prev => prev < project.images.length - 1 ? prev + 1 : 0)} className="absolute right-0 top-1/2 -translate-y-1/2 text-white bg-black/50 w-10 h-10 flex items-center justify-center hover:bg-brand-yellow hover:text-black transition-colors">→</button>
             </>
          )}
          <div className="absolute bottom-0 right-0 bg-black/60 text-white text-xs px-3 py-1.5">
            照片提供：{project.title}
          </div>
        </div>

        {/* Bottom: Info Panel */}
        <div className="flex flex-col p-4 md:p-6 overflow-y-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-brand-text">{project.title}</h2>
          
          <ul className="flex flex-col gap-3 text-xs md:text-sm leading-relaxed">
            <li className="flex flex-col md:flex-row md:gap-4 border-b border-gray-100 pb-2">
              <span className="font-bold text-gray-500 md:w-28 shrink-0">工程類別：</span>
              <span className="text-brand-text">{CATEGORY_MAP[project.category]}</span>
            </li>
            <li className="flex flex-col md:flex-row md:gap-4 border-b border-gray-100 pb-2">
              <span className="font-bold text-gray-500 md:w-28 shrink-0">地點 Location：</span>
              <span className="text-brand-text">{project.location}</span>
            </li>
            <li className="flex flex-col md:flex-row md:gap-4 border-b border-gray-100 pb-2">
              <span className="font-bold text-gray-500 md:w-28 shrink-0">年份 Year：</span>
              <span className="text-brand-text">{project.year}</span>
            </li>
            <li className="flex flex-col md:flex-row md:gap-4 border-b border-gray-100 pb-2">
              <span className="font-bold text-gray-500 md:w-28 shrink-0">工程簡介：</span>
              <span className="text-brand-textSec">{project.description}</span>
            </li>
            <li className="flex flex-col md:flex-row md:gap-4 pt-1">
              <span className="font-bold text-gray-500 md:w-28 shrink-0">使用材料/工法：</span>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((m, i) => (
                  <span key={i} className="bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">{m}</span>
                ))}
                {usedProducts.map(p => (
                  <Link 
                    key={p.id} 
                    to={`/products/${p.slug}`} 
                    className="bg-brand-yellow/10 text-brand-text border border-brand-yellow/50 px-2 py-1 text-xs font-medium hover:bg-brand-yellow hover:text-black transition-colors flex items-center gap-1"
                    onClick={onClose}
                  >
                    {p.name}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </Link>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

const ProjectsList: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Filter projects
  const filteredProjects = category 
    ? PROJECTS.filter(p => p.category === category)
    : PROJECTS;

  // Categories for filter UI with Icons
  const categories: { label: string; value: string; icon: React.ReactNode }[] = [
    { label: '全部\nALL', value: '', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg> },
    { label: '公共建設', value: 'public', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg> },
    { label: '商場\n辦公', value: 'commercial', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg> },
    { label: '軌道運輸', value: 'rail', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg> },
    { label: '道路橋樑', value: 'road-bridge', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg> }, // Generic diagonal or structure
    { label: '隧道工程', value: 'tunnel', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }, // Tunnel shape approx
    { label: '集合住宅', value: 'residential', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> },
    { label: '其他工程', value: 'other', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg> },
  ];

  const handleFilterClick = (catValue: string) => {
    navigate(catValue ? `/projects/${catValue}` : '/projects');
  };

  return (
    <>
      <PageHeader title="工程實績" breadcrumb="PROJECTS" />
      
      {/* Filter Bar */}
      <section className="w-full bg-white/95 backdrop-blur border-b border-gray-100 py-8 shadow-sm relative z-30">
        <div className="max-w-[1320px] mx-auto px-4 lg:px-10">
          <div className="flex flex-row justify-between md:justify-around items-start flex-wrap md:flex-nowrap gap-y-6 overflow-x-auto hide-scrollbar">
            {categories.map(cat => {
              const isActive = cat.value === (category || '');
              return (
                <button
                  key={cat.value}
                  onClick={() => handleFilterClick(cat.value)}
                  className="flex flex-col items-center w-[calc(100%/4)] md:w-[calc(100%/8)] min-w-[80px] group"
                >
                  {/* Outer Stroke */}
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 p-1.5 transition-colors duration-300 ${
                    isActive ? 'border-brand-yellow' : 'border-gray-200 group-hover:border-brand-yellow/50'
                  }`}>
                    {/* Inner Circle Container */}
                    <div className={`w-full h-full rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isActive ? 'bg-brand-yellow' : 'bg-gray-400 group-hover:bg-brand-yellow/80'
                    }`}>
                      {/* Icon */}
                      <div className="w-[50%] h-[50%] text-white">
                        {cat.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Label Section */}
                  <div className="mt-3 text-center w-full">
                    <span className={`text-sm md:text-base font-bold whitespace-pre-line leading-tight transition-colors duration-300 ${
                      isActive ? 'text-brand-yellow' : 'text-gray-600 group-hover:text-brand-text'
                    }`}>
                      {cat.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-10 max-w-[1320px] mx-auto min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="cursor-pointer group"
              onClick={() => setSelectedProjectId(project.id)}
            >
              {/* Image Container */}
              <div className="overflow-hidden aspect-[4/3] bg-gray-100 relative mb-5">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="w-14 h-14 bg-brand-yellow text-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                     <span className="text-3xl font-light mb-1">+</span>
                   </div>
                </div>
              </div>
              
              {/* Details Always Visible */}
              <div>
                 <span className="text-brand-yellow font-bold text-xs tracking-widest uppercase mb-2 block">
                   {CATEGORY_MAP[project.category]}
                 </span>
                 <h3 className="text-2xl font-bold mb-2 text-black group-hover:text-brand-yellow transition-colors duration-300">
                   {project.title}
                 </h3>
                 <p className="text-base text-gray-500">
                   {project.location} | {project.year}
                 </p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            目前此分類尚無案例。
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedProjectId && (
        <ProjectModal 
          projectId={selectedProjectId} 
          onClose={() => setSelectedProjectId(null)} 
        />
      )}
    </>
  );
};

export const Projects: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectsList />} />
      <Route path="/:category" element={<ProjectsList />} />
    </Routes>
  );
};