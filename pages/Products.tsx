import React, { useState } from 'react';
import { Routes, Route, useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { Card, Modal, Button } from '../components/UI';
import { PageHeader } from '../components/Layout';
import { PRODUCTS, PROJECTS } from '../constants';
import { ProjectModal } from './Projects'; 

// Product List Component
const ProductList: React.FC = () => {
  return (
    <>
      <PageHeader title="產品介紹" breadcrumb="PRODUCTS" />
      <section className="py-24 px-10 max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map(product => (
            <Link to={`/products/${product.slug}`} key={product.id} className="group block">
              <Card className="h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 font-bold tracking-wider">
                    {product.categoryTag}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-yellow transition-colors">{product.name}</h3>
                  <p className="text-brand-textSec text-sm mb-6 flex-1">{product.tagline}</p>
                  <div className="flex items-center text-xs font-bold tracking-widest border-t pt-4">
                    了解更多 <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

// Product Detail Component
const ProductDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.slug === slug);
  const [currentImage, setCurrentImage] = React.useState(0);
  const [selectedProject, setSelectedProject] = React.useState<string | null>(null);

  if (!product) return <Navigate to="/products" />;

  const relatedProjects = PROJECTS.filter(p => p.relatedProductSlugs.includes(product.slug));

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev < product.images.length - 1 ? prev + 1 : 0));
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : product.images.length - 1));
  };

  // Define colors based on request
  const colors = {
    bgLight: '#F3F0E9', // Light Gray/Beige for bottom section
    textDark: '#1A1A1A', // Deep Dark Blue/Black for headings
    accentBlue: '#254286', // Deep Blue for bars/accents
  };

  return (
    <div className="pt-[90px] w-full"> {/* Offset fixed header */}
      
      {/* Top Section: White Background */}
      <section className="bg-white pb-20 pt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-500 mb-10 flex items-center gap-2">
            <Link to="/" className="hover:text-[#254286] transition-colors">首頁</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#254286] transition-colors">產品介紹</Link>
            <span>/</span>
            <span className="text-gray-400">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column: Gallery */}
            <div>
              {/* Main Image */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 mb-6 overflow-hidden group">
                <img 
                  src={product.images[currentImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700" 
                />
                
                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button 
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-black flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                    <button 
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-black flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentImage(idx)}
                    className={`relative w-full aspect-square overflow-hidden transition-all duration-300 ${
                      currentImage === idx 
                        ? 'border-2 border-slate-800 opacity-100' 
                        : 'border border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Info */}
            <div className="flex flex-col">
              
              {/* Product Header */}
              <div className="mb-10 border-b border-gray-100 pb-10">
                 <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-1" style={{ backgroundColor: colors.accentBlue }}></span>
                    <span className="font-bold tracking-widest uppercase text-sm" style={{ color: colors.accentBlue }}>
                      {product.categoryTag}
                    </span>
                 </div>
                 <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: colors.textDark }}>
                   {product.name}
                 </h1>
                 <p className="text-xl text-gray-500 font-light">{product.tagline}</p>
              </div>

              {/* Specs */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                   <span className="w-8 h-1" style={{ backgroundColor: colors.accentBlue }}></span>
                   <h3 className="text-lg font-bold" style={{ color: colors.textDark }}>產品規格</h3>
                </div>
                <div className="space-y-0">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-200 text-sm md:text-base">
                      <span className="font-bold text-gray-700">{spec.label}</span>
                      <span className="text-gray-500">{spec.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 text-sm md:text-base">
                      <span className="font-bold text-gray-700">主要材質</span>
                      <span className="text-gray-500">{product.material}</span>
                  </div>
                </div>
              </div>

              {/* Applications */}
              <div className="mb-12">
                 <div className="flex items-center gap-3 mb-6">
                   <span className="w-8 h-1" style={{ backgroundColor: colors.accentBlue }}></span>
                   <h3 className="text-lg font-bold" style={{ color: colors.textDark }}>適用領域</h3>
                </div>
                 <div className="grid grid-cols-2 gap-4">
                   {product.applications.map((app, idx) => (
                     <div key={idx} className="flex items-center gap-3">
                       <span className="w-2 h-2 flex-shrink-0" style={{ backgroundColor: colors.accentBlue }}></span>
                       <span className="text-gray-600">{app}</span>
                     </div>
                   ))}
                 </div>
              </div>

              {/* Downloads */}
              <div className="mt-auto">
                 <button className="w-full md:w-auto px-8 py-4 bg-[#1A1A1A] text-white rounded flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M12 9.75l-3 3m0 0l3 3m-3-3H21" />
                    </svg>
                    <span className="font-bold">下載產品型錄 (PDF)</span>
                 </button>
              </div>

            </div>
          </div>
          
          {/* Description Text (Full Width below grid) */}
          <div className="mt-20 pt-10 border-t border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                 <span className="w-8 h-1" style={{ backgroundColor: colors.accentBlue }}></span>
                 <h3 className="text-lg font-bold" style={{ color: colors.textDark }}>詳細說明</h3>
              </div>
              <p className="text-gray-600 leading-loose max-w-4xl text-lg">
                {product.description}
              </p>
          </div>

        </div>
      </section>

      {/* Bottom Section: Related Projects (Light Gray Background) */}
      <section className="py-20" style={{ backgroundColor: colors.bgLight }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                   <span className="w-8 h-1" style={{ backgroundColor: colors.accentBlue }}></span>
                   <span className="font-bold tracking-widest uppercase text-sm" style={{ color: colors.accentBlue }}>PROJECTS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold" style={{ color: colors.textDark }}>相關工程實績</h2>
              </div>
              
              <Link to="/projects" className="hidden md:flex items-center gap-2 px-6 py-2 border border-gray-400 text-gray-600 hover:border-black hover:text-black transition-all rounded-full bg-transparent">
                <span className="text-sm font-bold">查看全部實績</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
           </div>

           {relatedProjects.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {relatedProjects.map(project => (
                 <div 
                   key={project.id} 
                   className="cursor-pointer group bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                   onClick={() => setSelectedProject(project.id)}
                 >
                   <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.images[0]} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                      />
                   </div>
                   <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{project.location} | {project.year}</p>
                      <h4 className="font-bold text-lg group-hover:text-[#254286] transition-colors line-clamp-1">{project.title}</h4>
                   </div>
                 </div>
               ))}
             </div>
           ) : (
             <p className="text-gray-500">此產品暫無相關公開實績。</p>
           )}

           <div className="mt-12 md:hidden">
              <Link to="/projects" className="flex w-full justify-center items-center gap-2 px-6 py-3 border border-gray-400 text-gray-600 hover:border-black hover:text-black transition-all rounded bg-transparent">
                <span className="text-sm font-bold">查看全部實績</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
           </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          projectId={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export const Products: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/:slug" element={<ProductDetail />} />
    </Routes>
  );
};