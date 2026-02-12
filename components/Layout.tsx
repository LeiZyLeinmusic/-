import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './UI';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAboutExpanded(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md h-[90px] transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between h-full">
        {/* Logo - Keep original colors (removed filter) */}
        <Link to="/" className="flex items-center z-50 shrink-0">
          <img 
            src="https://docs.google.com/drawings/d/e/2PACX-1vSFGj9WeS9AcKrM2-wEc6bBG7bBg8r_Of_snyMe_Zgi5Ecs1ZwpanDc9ZVvHySSjqJcD64aK0LvogTj/pub?w=924&h=232" 
            alt="WAI CIN 煒鑫實業" 
            className="h-12 md:h-14 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center h-full ml-auto mr-8">
          <div className="flex h-full items-center">
            {/* Nav Items with Hover Effect */}
            <div className="group relative h-full flex items-center">
              <Link to="/about" className="h-full flex items-center px-6 text-base font-bold text-black hover:bg-brand-yellow hover:text-white transition-colors duration-200">
                關於煒鑫
              </Link>
              <div className="absolute top-full left-0 pt-0 hidden group-hover:block w-full">
                 <div className="bg-white text-brand-text min-w-[240px] shadow-xl border-t-4 border-brand-yellow">
                  <Link to="/about/chairman" className="block px-6 py-4 hover:bg-gray-100 text-sm">董事長的話</Link>
                  <Link to="/about/team" className="block px-6 py-4 hover:bg-gray-100 text-sm">團隊介紹</Link>
                  <Link to="/about/business" className="block px-6 py-4 hover:bg-gray-100 text-sm">營業項目</Link>
                  <Link to="/about/history" className="block px-6 py-4 hover:bg-gray-100 text-sm">公司沿革</Link>
                  <Link to="/about/experience" className="block px-6 py-4 hover:bg-gray-100 text-sm">工程經驗</Link>
                  <Link to="/about/affiliates" className="block px-6 py-4 hover:bg-gray-100 text-sm">關係企業</Link>
                </div>
              </div>
            </div>
            
            <Link to="/products" className="h-full flex items-center px-6 text-base font-bold text-black hover:bg-brand-yellow hover:text-white transition-colors duration-200">
              產品介紹
            </Link>
            <Link to="/projects" className="h-full flex items-center px-6 text-base font-bold text-black hover:bg-brand-yellow hover:text-white transition-colors duration-200">
              工程實績
            </Link>
            <Link to="/news" className="h-full flex items-center px-6 text-base font-bold text-black hover:bg-brand-yellow hover:text-white transition-colors duration-200">
              最新消息
            </Link>
            <Link to="/insights" className="h-full flex items-center px-6 text-base font-bold text-black hover:bg-brand-yellow hover:text-white transition-colors duration-200">
              技術觀點
            </Link>
            <Link to="/support" className="h-full flex items-center px-6 text-base font-bold text-black hover:bg-brand-yellow hover:text-white transition-colors duration-200">
              服務支援
            </Link>
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block shrink-0">
          <Button variant="primary" to="/contact" className="!px-8 !py-3 text-sm">
            立即諮詢
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-black z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Mobile Menu (Off-canvas) */}
        <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
        
        <div className={`fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-50 shadow-2xl transition-transform duration-300 transform flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 border-b border-gray-100 flex justify-end">
             {/* Close button handled by the toggle icon in header, but we add spacing here */}
             <div className="h-10"></div> 
          </div>
          
          <div className="flex-1 overflow-y-auto py-4">
             <div className="flex flex-col">
                {/* Accordion for About */}
                <div className="border-b border-gray-100">
                  <button 
                    onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                    className="w-full flex items-center justify-between px-8 py-5 text-xl font-bold text-black hover:text-brand-yellow transition-colors"
                  >
                    關於煒鑫
                    <span className={`transform transition-transform duration-300 ${isAboutExpanded ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <div className={`bg-gray-50 overflow-hidden transition-all duration-300 ${isAboutExpanded ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col py-2">
                      <Link to="/about/chairman" className="px-12 py-3 text-base text-gray-600 hover:text-brand-yellow border-l-4 border-transparent hover:border-brand-yellow">董事長的話</Link>
                      <Link to="/about/team" className="px-12 py-3 text-base text-gray-600 hover:text-brand-yellow border-l-4 border-transparent hover:border-brand-yellow">團隊介紹</Link>
                      <Link to="/about/business" className="px-12 py-3 text-base text-gray-600 hover:text-brand-yellow border-l-4 border-transparent hover:border-brand-yellow">營業項目</Link>
                      <Link to="/about/history" className="px-12 py-3 text-base text-gray-600 hover:text-brand-yellow border-l-4 border-transparent hover:border-brand-yellow">公司沿革</Link>
                      <Link to="/about/experience" className="px-12 py-3 text-base text-gray-600 hover:text-brand-yellow border-l-4 border-transparent hover:border-brand-yellow">工程經驗</Link>
                      <Link to="/about/affiliates" className="px-12 py-3 text-base text-gray-600 hover:text-brand-yellow border-l-4 border-transparent hover:border-brand-yellow">關係企業</Link>
                    </div>
                  </div>
                </div>

                <Link to="/products" className="px-8 py-5 text-xl font-bold text-black hover:text-brand-yellow border-b border-gray-100 transition-colors">產品介紹</Link>
                <Link to="/projects" className="px-8 py-5 text-xl font-bold text-black hover:text-brand-yellow border-b border-gray-100 transition-colors">工程實績</Link>
                <Link to="/news" className="px-8 py-5 text-xl font-bold text-black hover:text-brand-yellow border-b border-gray-100 transition-colors">最新消息</Link>
                <Link to="/insights" className="px-8 py-5 text-xl font-bold text-black hover:text-brand-yellow border-b border-gray-100 transition-colors">技術觀點</Link>
                <Link to="/support" className="px-8 py-5 text-xl font-bold text-black hover:text-brand-yellow border-b border-gray-100 transition-colors">服務支援</Link>
                <Link to="/contact" className="px-8 py-5 text-xl font-bold text-brand-yellow border-b border-gray-100 transition-colors">聯絡我們</Link>
             </div>
          </div>
          
          <div className="p-8 bg-gray-50 border-t border-gray-100">
             <Button to="/contact" className="w-full text-base">立即諮詢</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-brand-text pt-24 pb-12 border-t border-gray-200">
      <div className="max-w-[1320px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-3xl font-bold mb-6 tracking-tighter text-brand-yellow">煒鑫實業有限公司</h3>
            <p className="text-brand-textSec text-sm leading-relaxed">
              專注於防水與隔音工程的領導品牌。<br/>
              提供全方位的建築結構保護方案。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">SITEMAP</h4>
            <ul className="space-y-4 text-sm text-brand-textSec">
              <li><Link to="/about" className="hover:text-brand-yellow transition-colors">關於煒鑫</Link></li>
              <li><Link to="/products" className="hover:text-brand-yellow transition-colors">產品介紹</Link></li>
              <li><Link to="/projects" className="hover:text-brand-yellow transition-colors">工程實績</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">SUPPORT</h4>
            <ul className="space-y-4 text-sm text-brand-textSec">
              <li><Link to="/support/downloads" className="hover:text-brand-yellow transition-colors">型錄下載</Link></li>
              <li><Link to="/insights" className="hover:text-brand-yellow transition-colors">技術觀點</Link></li>
              <li><Link to="/contact" className="hover:text-brand-yellow transition-colors">聯絡我們</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">OFFICE</h4>
            <ul className="space-y-4 text-sm text-brand-textSec">
              <li className="flex items-start gap-3">
                <span className="text-brand-yellow text-xl">📍</span>
                <span>台北市中山區某某路123號10樓</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow text-xl">📞</span>
                <span>02-2345-6789</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-brand-yellow text-xl">✉️</span>
                <span>service@waicin.com.tw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-textSec">
          <p>© 2026 WAI CIN Industrial Co., Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span>Privacy Policy</span>
             <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const PageHeader: React.FC<{ title: string; breadcrumb: string }> = ({ title, breadcrumb }) => (
  <div className="bg-brand-dark pt-48 pb-24 px-10">
    <div className="max-w-[1320px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <span className="text-brand-yellow text-sm font-bold tracking-widest uppercase mb-3 block">{breadcrumb}</span>
           <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">{title}</h1>
        </div>
        <div className="w-24 h-2 bg-brand-yellow md:mb-2"></div>
      </div>
    </div>
  </div>
);