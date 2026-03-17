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

  // Mock data for new sections
  const features = product.features && product.features.length > 0 ? product.features : [
    "符合最新建築法規標準",
    "優異的衝擊音阻隔能力",
    "高密度橡膠聚合而成",
    "施工簡便，節省工時",
    "環保材質，無毒無害",
    "長效耐用，不易老化"
  ];

  // Use related projects for application images if available, otherwise fallback to mock data
  const applications = product.applicationDetails || (relatedProjects.length > 0 
    ? relatedProjects.slice(0, 4).map(project => ({
        title: project.title,
        img: project.images[0]
      }))
    : [
        { title: "集合住宅", img: "https://picsum.photos/400/400?random=101" },
        { title: "商業辦公室", img: "https://picsum.photos/400/400?random=102" },
        { title: "飯店旅館", img: "https://picsum.photos/400/400?random=103" },
        { title: "公共設施", img: "https://picsum.photos/400/400?random=104" }
      ]);

  const documents = product.documents || [
    { name: "產品型錄 (PDF)", size: "2.4 MB" },
    { name: "SGS 測試報告", size: "1.1 MB" },
    { name: "施工規範說明書", size: "3.5 MB" }
  ];

  return (
    <div className="w-full">
      {/* 2. 主視覺區 (Hero Banner) */}
      <section 
        className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center bg-cover bg-center mt-[90px]"
        style={{ backgroundImage: `url(${product.images[0]})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Breadcrumbs */}
        <div className="absolute top-8 left-8 md:left-16 z-10">
          <nav className="text-sm text-white/80 flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">首頁</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-white transition-colors">產品介紹</Link>
            <span>/</span>
            <span className="text-white font-bold">{product.name}</span>
          </nav>
        </div>

        {/* H1 Title */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider mb-4">{product.name}</h1>
          <p className="text-xl text-white/90 font-light">{product.tagline}</p>
        </div>
      </section>

      {/* 3. 產品簡介區 (Product Introduction Section) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">產品簡介</h2>
            <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>
          
          {/* Right: Carousel */}
          <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden group shadow-lg">
            <img 
              src={product.images[currentImage]} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-500" 
            />
            
            {/* Navigation Arrows */}
            {product.images.length > 1 && (
              <>
                <button 
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white text-black flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button 
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white text-black flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
                
                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-3 h-3 rounded-full transition-colors ${currentImage === idx ? 'bg-brand-yellow' : 'bg-white/50 hover:bg-white/80'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 4. 產品特性區 (Features Section) */}
      {features.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">產品特性</h2>
              <div className="w-24 h-1 bg-brand-yellow"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-brand-green shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. 產品優勢區 (Advantages Section) */}
      {product.advantages && (
        <section className="py-24 bg-brand-dark text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold">產品優勢</h2>
            </div>
            <div className="md:w-2/3">
              <blockquote className="border-l-4 border-brand-yellow pl-6 py-2">
                <p className="text-xl md:text-2xl font-light leading-relaxed">
                  「{product.advantages}」
                </p>
              </blockquote>
            </div>
          </div>
        </section>
      )}

      {/* 6. 產品應用區 (Applications Section) */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">應用領域</h2>
          {product.applicationsText && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {product.applicationsText}
            </p>
          )}
          {product.applicationsList && product.applicationsList.length > 0 && (
            <ul className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-left list-disc pl-6 space-y-2">
              {product.applicationsList.map((app, idx) => (
                <li key={idx}>{app}</li>
              ))}
            </ul>
          )}
          {!product.applicationsText && (!product.applicationsList || product.applicationsList.length === 0) && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              廣泛應用於各類建築與工程項目，提供最可靠的解決方案。
            </p>
          )}
        </div>
        
        {applications.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {applications.map((app, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-transparent group-hover:border-brand-yellow transition-colors duration-300">
                  <img src={app.img} alt={app.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{app.title}</h3>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center">
          <Button variant="outline-dark" to="/projects" className="inline-flex items-center gap-2">
            查看相關實績
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Button>
        </div>
      </section>

      {/* 7. 相關影片區 (Related Videos Section) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">相關影片</h2>
            <div className="w-full h-px bg-gray-300 mb-6"></div>
            <span className="inline-block px-4 py-1.5 bg-brand-green text-white text-sm font-bold rounded-full">
              施工教學
            </span>
          </div>
          
          <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-xl relative flex items-center justify-center group cursor-pointer">
            <img src={product.images[0]} alt="Video Thumbnail" className="w-full h-full object-cover opacity-60" />
            <div className="absolute w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white ml-1">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 規格表區 (Specifications Table Section) */}
      <section className="py-24 max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">產品規格</h2>
          <div className="w-full h-px bg-gray-300"></div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-4 px-6 text-center font-bold text-gray-800 border-b-2 border-gray-300 w-1/4">項目</th>
                <th className="py-4 px-6 text-center font-bold text-gray-800 border-b-2 border-gray-300 w-1/4">規格</th>
                <th className="py-4 px-6 text-center font-bold text-gray-800 border-b-2 border-gray-300 w-1/4">測試方法</th>
                <th className="py-4 px-6 text-center font-bold text-gray-800 border-b-2 border-gray-300 w-1/4">備註</th>
              </tr>
            </thead>
            <tbody>
              {product.specs.map((spec, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 text-center text-gray-700 font-medium">{spec.label}</td>
                  <td className="py-4 px-6 text-center text-gray-600">{spec.value}</td>
                  <td className="py-4 px-6 text-center text-gray-500 text-sm">ASTM / CNS</td>
                  <td className="py-4 px-6 text-center text-gray-500 text-sm">-</td>
                </tr>
              ))}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-center text-gray-700 font-medium">主要材質</td>
                <td className="py-4 px-6 text-center text-gray-600">{product.material}</td>
                <td className="py-4 px-6 text-center text-gray-500 text-sm">-</td>
                <td className="py-4 px-6 text-center text-gray-500 text-sm">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. 證書及相關文件區 (Documents Download Section) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">證書及相關文件</h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
          
          <div className="flex flex-col gap-4">
            {documents.map((doc, idx) => (
              <a href="#" key={idx} className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded hover:border-brand-yellow hover:shadow-md transition-all group">
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-yellow">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg group-hover:text-brand-yellow transition-colors">{doc.name}</h4>
                    <span className="text-sm text-gray-500">{doc.size}</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 10. 相關工程實績區域 (Related Projects) */}
      <section className="py-24 bg-white">
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