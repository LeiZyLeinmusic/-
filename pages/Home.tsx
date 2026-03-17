import React, { useEffect, useState, useRef } from 'react';
import { Button, SectionTitle, Card } from '../components/UI';
import { NEWS, INSIGHTS, PROJECTS, PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';
import { ProjectModal } from './Projects';
import { CATEGORY_MAP } from '../types';

// Helper component for number counting animation
const NumberCounter: React.FC<{ end: number; duration?: number }> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Ease out cubic function for smoother finish
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <>{count}</>;
};

const Home: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  
  // Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  
  // Custom featured products with specific images provided
  const FEATURED_PRODUCTS = [
    {
      ...PRODUCTS.find(p => p.slug === 'floor-soundproof-mat'),
      customImage: 'https://docs.google.com/drawings/d/e/2PACX-1vRjaVHmTV2qOWKhWOamkSyOByvyzwLnxzPkS8AKT3IxV1mgoUYtI1-TjlNjDRqrKAjFyA1kPpE7FJck/pub?w=960&h=720'
    },
    {
      ...PRODUCTS.find(p => p.slug === 'pvc-waterproof-membrane'),
      customImage: 'https://docs.google.com/drawings/d/e/2PACX-1vSVlRckWauD427N5EOb2vg60ka_LWfhLFITAhR73drlC5Scm_nJrpxD8w9m2HlO0RME59kTid9fLOgT/pub?w=960&h=720'
    },
    {
      ...PRODUCTS.find(p => p.slug === 'anti-corrosion-lining'),
      customImage: 'https://docs.google.com/drawings/d/e/2PACX-1vTY4AG6t_-tSuovYRO0SsL11SkQxhg7O64Q1b0OJNBhmnp0PcSjRyQaxNzb2pfKX-RW3BjpB-7ly_E-/pub?w=960&h=720'
    },
    {
      ...PRODUCTS.find(p => p.slug === 'pvc-waterstop'),
      customImage: 'https://docs.google.com/drawings/d/e/2PACX-1vTeco-QFw1QyUI8rF6e98IFXP-fs3Tw7WSirYmjLdbcRtR-mlNMgTdKViQFPW_uv-Dmb7z-hLeUzlma/pub?w=927&h=523'
    }
  ].filter(item => item.id); // Ensure valid products

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };
    
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play Slider
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        const maxIndex = Math.ceil(FEATURED_PRODUCTS.length - itemsPerPage);
        // If at end, loop back to start, else next
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, itemsPerPage, FEATURED_PRODUCTS.length]);

  const nextSlide = () => {
    if (currentSlide < FEATURED_PRODUCTS.length - itemsPerPage) {
      setCurrentSlide(prev => prev + 1);
    } else {
      setCurrentSlide(0); // Loop
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    } else {
      setCurrentSlide(Math.ceil(FEATURED_PRODUCTS.length - itemsPerPage)); // Loop to end
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setOffset({ x, y });
  };

  return (
    <div className="w-full pt-[90px]">
      {/* Hero Section */}
      <section 
        className="relative h-[calc(100vh-90px)] flex items-center justify-center overflow-hidden bg-stone-900"
        onMouseMove={handleMouseMove}
      >
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-60"
          style={{ backgroundImage: 'url(https://docs.google.com/drawings/d/e/2PACX-1vSVueo8KTZDjLNJYxWNUPstg7rnTb-J5HeOntCWErqp0R982uv7cNtMeRdxr2-3iggGaVT5ATDWYr8y/pub?w=929&h=616)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-1"></div>

        {/* Parallax Elements */}
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-brand-yellow/30 z-2"
          style={{ transform: `translate(${-offset.x}px, ${-offset.y}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-green/10 z-2"
          style={{ transform: `translate(${offset.x * 1.5}px, ${offset.y * 1.5}px)` }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-[1320px] px-10 w-full">
          <div className="space-y-6">
             <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight slide-in-left">
               建築結構的<span className="text-brand-green">高效防水</span>
             </h1>
             <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight slide-in-right">
               <span className="text-brand-yellow">樓板隔音</span>的全面規劃
             </h1>
          </div>
          <div className="mt-16 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
            <Button to="/products">探索解決方案</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-10 max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionTitle title="關於煒鑫" subtitle="專業、誠信、永續經營" />
          <p className="text-brand-textSec text-lg mb-10 leading-relaxed">
            煒鑫實業致力於提供最先進的防水與隔音材料解決方案。我們代理國際知名品牌，並擁有豐富的公共工程與私人建案經驗。從材料供應到施工諮詢，我們是您最值得信賴的合作夥伴。
          </p>
          <div className="flex gap-4">
             <Button variant="outline-dark" to="/about">了解更多</Button>
             <Button variant="outline-dark" to="/about/business">營業項目</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Block 1: 1983 - Dark Navy with White Text (High Contrast) */}
          <div className="aspect-square bg-brand-dark text-white p-4 md:p-8 flex flex-col justify-center group hover:bg-black transition-colors duration-500">
             <span className="text-5xl md:text-6xl font-bold text-white mb-2">1983</span>
             <span className="text-base opacity-90">成立年份</span>
             <div className="w-10 h-1 bg-brand-yellow mt-6"></div>
          </div>

          {/* Block 2: 300+ - Brand Blue (Formerly Yellow) with White Text */}
          <div className="aspect-square bg-brand-yellow text-white p-4 md:p-8 flex flex-col justify-center">
             <span className="text-5xl md:text-6xl font-bold mb-2">
                <NumberCounter end={300} />+
             </span>
             <span className="text-base font-bold">防水工程承攬</span>
             <div className="w-10 h-1 bg-white mt-6"></div>
          </div>

          {/* Block 3: 50+ - Grass Green with White Text */}
          <div className="aspect-square bg-brand-green text-white p-4 md:p-8 flex flex-col justify-center">
             <span className="text-5xl md:text-6xl font-bold mb-2">
                <NumberCounter end={50} />+
             </span>
             <span className="text-base font-bold">專業團隊</span>
             <div className="w-10 h-1 bg-white mt-6"></div>
          </div>

          {/* Block 4: Image */}
          <div className="aspect-square bg-gray-100 bg-cover bg-center" style={{backgroundImage: 'url(https://docs.google.com/drawings/d/e/2PACX-1vSxCD2DyQAwV5waB_QcnZyyrFh-qwKEdid3ws2oX2MVYiKR7lIzuZAiJS5hrCGVOnh8OUfTrA4mGyZW/pub?w=960&h=720)'}}></div>
        </div>
      </section>

      {/* Products Preview - Slider */}
      <section 
        className="py-24 bg-gray-50 px-10 relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-[1320px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <SectionTitle title="產品介紹" subtitle="符合國際標準的高性能材料" />
            <div className="flex gap-4">
              <Button variant="outline-dark" to="/products">查看全部產品</Button>
            </div>
          </div>
          
          <div className="relative">
            {/* Slider Track */}
            <div className="overflow-hidden -mx-6">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * (100 / itemsPerPage)}%)` }}
              >
                {FEATURED_PRODUCTS.map((product, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 px-6" 
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    <Link to={`/products/${product?.slug}`} className="block h-full">
                      <Card className="h-full flex flex-col">
                        <div className="h-72 overflow-hidden relative bg-gray-100">
                          <img 
                            src={product?.customImage} 
                            alt={product?.name} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                          />
                        </div>
                        <div className="p-10 flex flex-col flex-grow">
                          <h3 className="text-2xl font-bold mb-3 hover:text-brand-yellow transition-colors">{product?.name}</h3>
                          <p className="text-brand-textSec text-base line-clamp-2 mb-8">{product?.tagline}</p>
                          <div className="mt-auto">
                            <span className="inline-block text-sm font-bold border-b-2 border-black pb-1 hover:text-brand-yellow hover:border-brand-yellow transition-colors">
                              詳細資訊
                            </span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls - Icons */}
            {FEATURED_PRODUCTS.length > itemsPerPage && (
              <>
                <button 
                  onClick={prevSlide}
                  className="absolute -left-12 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 text-gray-400 hover:text-black transition-colors flex items-center justify-center outline-none focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute -right-12 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 text-gray-400 hover:text-black transition-colors flex items-center justify-center outline-none focus:outline-none"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="w-full py-24 flex flex-col items-center bg-white overflow-hidden">
        {/* Header & Text Container */}
        <div className="max-w-[800px] w-full px-10 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-text">我們的客戶</h2>
          <p className="text-brand-textSec text-lg leading-relaxed">
            煒鑫實業多年來與各大知名企業及公共工程單位建立深厚的合作關係。<br className="hidden md:block" />
            我們以專業的技術與卓越的品質，贏得客戶的信賴與肯定。
          </p>
        </div>

        {/* Logo Slider / Marquee Container */}
        <div className="w-full overflow-hidden relative flex">
          {/* Gradient masks for smooth fade effect at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Slider Track (Duplicated for seamless infinite scroll) */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, trackIndex) => (
              <div key={trackIndex} className="flex gap-8 px-4">
                {[
                  { name: '台北捷運', logo: 'https://docs.google.com/drawings/d/e/2PACX-1vS9sI-3hdqE9H-174ZRtFV6T0zjY5Fk2rhTFhy8KCUu6QVvTam_nCWV00IgXHm06WcZF1mM2knRxMW3/pub?w=960&h=720' },
                  { name: '台灣高鐵', logo: 'https://docs.google.com/drawings/d/e/2PACX-1vTd6dLDCpFyT3ECt8ZsG8PKiK-kvdw0aVjZGZ_OsecxP_bN5kBFnXQEyhiOwtfCEJ1PhgVAWSUVSfak/pub?w=960&h=720' },
                  { name: '南亞塑膠', logo: 'https://docs.google.com/drawings/d/e/2PACX-1vS9sI-3hdqE9H-174ZRtFV6T0zjY5Fk2rhTFhy8KCUu6QVvTam_nCWV00IgXHm06WcZF1mM2knRxMW3/pub?w=960&h=720' },
                  { name: '高雄捷運', logo: 'https://docs.google.com/drawings/d/e/2PACX-1vTd6dLDCpFyT3ECt8ZsG8PKiK-kvdw0aVjZGZ_OsecxP_bN5kBFnXQEyhiOwtfCEJ1PhgVAWSUVSfak/pub?w=960&h=720' },
                  { name: '交通部公路總局', logo: 'https://docs.google.com/drawings/d/e/2PACX-1vS9sI-3hdqE9H-174ZRtFV6T0zjY5Fk2rhTFhy8KCUu6QVvTam_nCWV00IgXHm06WcZF1mM2knRxMW3/pub?w=960&h=720' },
                  { name: '廣州地鐵', logo: 'https://docs.google.com/drawings/d/e/2PACX-1vTd6dLDCpFyT3ECt8ZsG8PKiK-kvdw0aVjZGZ_OsecxP_bN5kBFnXQEyhiOwtfCEJ1PhgVAWSUVSfak/pub?w=960&h=720' },
                ].map((client, index) => (
                  <div key={index} className="flex items-center gap-4 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow cursor-default">
                    <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center overflow-hidden shrink-0 p-2">
                      <img src={client.logo} alt={client.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xl font-bold text-brand-text whitespace-nowrap">{client.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-24 px-10 max-w-[1320px] mx-auto">
        <div className="flex justify-between items-end mb-12">
           <SectionTitle title="精選工程實績" subtitle="累積無數工程實績，見證品質" />
           <Button variant="outline-dark" to="/projects">瀏覽更多實績</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.slice(0, 6).map(project => (
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
      </section>

      {/* News & Insights */}
      <section className="py-24 px-10 max-w-[1320px] mx-auto bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* News */}
          <div>
            <div className="flex justify-between items-end mb-8">
              <SectionTitle title="最新消息" />
              <Link to="/news" className="text-base font-bold border-b border-gray-300 pb-1 hover:border-black">MORE</Link>
            </div>
            <div className="space-y-8">
              {NEWS.slice(0, 3).map(news => (
                <Link to={`/news/${news.slug}`} key={news.id} className="block group">
                  <div className="flex gap-6 items-start">
                    <div className="w-28 text-base text-gray-400 font-mono pt-1">{news.date}</div>
                    <div>
                      <h4 className="font-bold text-xl mb-3 group-hover:text-brand-yellow transition-colors">{news.title}</h4>
                      <p className="text-base text-brand-textSec line-clamp-2">{news.summary}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div>
            <div className="flex justify-between items-end mb-8">
              <SectionTitle title="技術觀點" />
              <Link to="/insights" className="text-base font-bold border-b border-gray-300 pb-1 hover:border-black">MORE</Link>
            </div>
            <div className="grid gap-8">
              {INSIGHTS.slice(0, 2).map(insight => (
                <Link to={`/insights/${insight.slug}`} key={insight.id} className="block group">
                  <Card className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-1/3 h-56 md:h-auto">
                      <img src={insight.image} className="w-full h-full object-cover" alt={insight.title} />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <span className="text-sm font-bold text-brand-green uppercase mb-3 block">{insight.category}</span>
                      <h4 className="font-bold text-xl mb-3 group-hover:text-brand-yellow transition-colors">{insight.title}</h4>
                      <p className="text-base text-brand-textSec line-clamp-2">{insight.summary}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-24 bg-brand-yellow/10 border-t border-brand-yellow/20">
         <div className="max-w-[1320px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-4xl font-bold mb-3">需要技術支援？</h2>
              <p className="text-brand-textSec text-xl">獲取最新的產品型錄、測試報告或專業諮詢。</p>
            </div>
            <div className="flex gap-4">
               <Button variant="outline-dark" to="/support/downloads" className="bg-white">型錄下載</Button>
               <Button to="/contact">聯絡我們</Button>
            </div>
         </div>
      </section>

      {/* Project Modal Integration */}
      {selectedProjectId && (
        <ProjectModal 
          projectId={selectedProjectId} 
          onClose={() => setSelectedProjectId(null)} 
        />
      )}
    </div>
  );
};

export default Home;