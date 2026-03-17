import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { SectionTitle } from '../components/UI';
import { PageHeader } from '../components/Layout';

const AboutLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const links = [
    { to: '/about', label: '關於煒鑫' },
    { to: '/about/chairman', label: '董事長的話' },
    { to: '/about/team', label: '團隊介紹' },
    { to: '/about/business', label: '營業項目' },
    { to: '/about/history', label: '公司沿革' },
    { to: '/about/experience', label: '工程經驗' },
    { to: '/about/affiliates', label: '關係企業' },
  ];

  return (
    <>
      <PageHeader title="關於我們" breadcrumb="ABOUT US" />
      <div className="max-w-[1320px] mx-auto px-10 py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
        <aside className="lg:col-span-1">
          <nav className="sticky top-32 flex flex-col space-y-1">
             {links.map(link => {
               const isActive = location.pathname === link.to;
               return (
                 <Link 
                   key={link.to} 
                   to={link.to}
                   className={`px-4 py-3 text-[22px] font-bold border-l-4 transition-all ${
                     isActive 
                       ? 'border-brand-yellow bg-gray-50 text-black' 
                       : 'border-transparent text-gray-500 hover:text-black hover:border-gray-200'
                   }`}
                 >
                   {link.label}
                 </Link>
               );
             })}
          </nav>
        </aside>
        <main className="lg:col-span-3 min-h-[500px]">
          {children}
        </main>
      </div>
    </>
  );
};

// Sub-page components placeholder
const Overview = () => (
  <div>
    <SectionTitle title="專業、誠信、永續經營" />
    <p className="mb-6 text-brand-textSec leading-loose">
      煒鑫實業自成立以來，始終專注於建築結構的高效防水與樓板隔音工程。我們深知建築物的耐久性與居住舒適度息息相關，因此堅持引進符合國際標準的高性能材料，並結合在地化的專業施工團隊，為每一棟建築提供最完善的保護。
    </p>
    <img src="https://picsum.photos/1000/500?random=about" alt="Office" className="w-full mb-8" />
    <p className="text-brand-textSec leading-loose">
      我們不只販售材料，更提供從設計規劃、工法建議到現場施作的一條龍服務。無論是公共工程的嚴苛要求，或是私人宅邸的細膩質感，煒鑫實業都能精準達成客戶期待。
    </p>
  </div>
);

const Chairman = () => (
  <div>
    <SectionTitle title="董事長的話" />
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <img src="https://picsum.photos/400/500?random=chairman" className="w-full md:w-1/3 object-cover" alt="Chairman" />
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-4">堅持品質，守護建築價值</h3>
        <p className="text-brand-textSec leading-loose mb-4">
          「水，是生命之源，但也可能是建築之癌。」這是我從業三十年來的深刻體悟。
        </p>
        <p className="text-brand-textSec leading-loose">
          創立煒鑫實業的初衷，就是希望透過引進更先進、更環保的材料工法，解決台灣氣候潮濕多雨所帶來的建築漏水痛點。近年來，隨著生活品質提升，我們更跨足樓板隔音領域，期許能為人們創造一個既乾燥又寧靜的安居空間。
        </p>
        <div className="mt-8">
           <p className="font-bold text-lg">陳煒鑫</p>
           <p className="text-sm text-gray-500">董事長</p>
        </div>
      </div>
    </div>
  </div>
);

const Business = () => (
  <div>
    <SectionTitle title="營業項目" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        '南亞塑膠防水材料系列產品專業經銷與施工。',
        '華夏塑膠系列產品經銷與施工。',
        '預舖式防水膜、自黏性防水膜、防火填縫材經銷與施工。',
        'HDPE高密度聚乙烯管經銷與施工。',
        '樓板隔音墊工程承攬施工。',
        'PU防水材、環氧樹脂、填縫材經銷。',
        'PVC防水膜、EVA防水膜、HDPE不透水布、自粘式橡化瀝青防水膜、PU防水材、PVC防蝕裡襯等防水工程承攬及銷售。',
        'PVC止水帶、PVC管、水膨脹止水帶、橡膠支承墊、橡膠止水帶、不織布、填縫膠、環氧樹脂等銷售。',
        '隧道、地鐵、衛生下水道、橋面－防水膜工程承攬施工。'
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 p-6 border-l-4 border-brand-green hover:bg-white hover:shadow-sharp transition-all">
          <h4 className="font-bold text-lg">{item}</h4>
        </div>
      ))}
    </div>
  </div>
);

const HISTORY_DATA = [
  { year: '1983.07', text: '創立「煒鑫實業有限公司」專門從事防水工程承攬、防水材料、止水帶、環氧樹脂、填縫膠等產品銷售。' },
  { year: '1985.04', text: '與南亞簽訂經銷商合約。' },
  { year: '1986.01', text: '開始承攬防水膜工程及銷售業務。' },
  { year: '1987.03', text: '參加南亞塑膠公司防水膜施工技術研討與訓練。' },
  { year: '1988.06', text: '代理PU、EPOXY、填縫膠材料銷售。' },
  { year: '1990.03', text: '開始承攬隧道防水膜施工工程。' },
  { year: '1991.02', text: '開始承攬台北地下鐵、捷運工程防水膜施工工程。' },
  { year: '1993.06', text: '承攬衛生下水道地下幹管PVC防蝕襯裡施作工程下水道。' },
  { year: '1995.04', text: '承攬台北捷運CC276、278車站防水膜工程，數量36,600m²。' },
  { year: '1997.02', text: '與新加坡朝陽公司合作開發新加坡、馬來西亞市場。' },
  { year: '1997.08', text: '承攬東西向快速公路漢寶~草屯線漢寶隧道防水層工程數量共252,010m²' },
  { year: '1998.04', text: 'PVC防水膜、PVC防蝕裡襯、PVC止水帶供應香港地鐵 工程，並且做施工技術指導。' },
  { year: '1998.06', text: '承攬鐵路東部改善工程局花蓮新觀音隧道防水層工程數量共225,000m²' },
  { year: '1999.09', text: 'PVC防蝕裡襯、PVC防水膜供應至中國大陸。' },
  { year: '2000.01', text: '承攬台北捷運CD551標海山站、土城站防水膜工程數量共50,412m²。' },
  { year: '2000.05', text: '與南亞公司合作開發單層雙色PVC防水膜，品質優良。' },
  { year: '2000.07', text: '代理銷售自粘式橡化瀝青防水膜。' },
  { year: '2001.01', text: '承攬北宜高速公路第四標主坑東行線防水層舖設工程數量共333,100m²。' },
  { year: '2001.04', text: '承攬台灣高鐵C210標迴龍隧道防水層工程數量60,000m²。' },
  { year: '2001.05', text: '代表南亞PVC防水膜參予中國深圳地鐵招標並得標。數量145,000m²' },
  { year: '2001.06', text: '舉辦深圳地鐵公司隧道PVC防水膜施工及技術研討會。' },
  { year: '2002.03', text: '與南亞公司合作開發PVC膨脹複合式止水帶。' },
  { year: '2002.07', text: '代理經銷高密度聚乙烯 (HDPE)管。' },
  { year: '2002.10', text: '代表南亞PVC防水膜參予廣州地鐵三號線防水膜材料招標，並得標供貨數量共計380,000m²。' },
  { year: '2002.10', text: '承攬基隆河員山子分洪工程隧道防水層工程數量共109,000m²。' },
  { year: '2002.12', text: '舉辦廣州地鐵公司隧道PVC防水膜施工及技術研討會。' },
  { year: '2003.07', text: '承攬高雄捷運CO3區段標O9、O10車站防水工程數量共56,000m²。' },
  { year: '2003.10', text: '引進預舖式防水膜及防火填塞材供台北捷運車站站体工程使用。' },
  { year: '2003.12', text: '參予南亞公司台北捷運環片用膨脹型止水材研發。' },
  { year: '2004.06', text: '參予北京地鐵、五號線工程、PVC防水板投標。' },
  { year: '2004.08', text: '參予天津地鐵PVC防水板投標。' },
  { year: '2004.10', text: '深圳地鐵一期工程PVC防水板，供應全部結束。本公司供應之防水板品質優良，獲深圳地鐵公司嘉許。' },
  { year: '2005.04', text: '廣州地鐵三號線PVC防水板，全部依合約準付交貨完畢。供貨時程及材料品質獲廣州地鐵公司嘉許。' },
  { year: '2005.08', text: '亞洲最長的公路隧道北宜高速公路雪山隧道高東行線本公司承攬之PVC防水層，順利如期完工。' },
  { year: '2005.10', text: '得標國道六號霧峰埔里段新建工程，Ｃ602標、C603標、C608標隧道防水膜共計225,307 m²。' },
  { year: '2005.11', text: '台北捷運C420標潛遁環片膨脹止水材配合甲方如期施工完成。' },
  { year: '2005.11', text: '參予廈門路標總公司翔安海底隧道530,000 m²，PVC、ECB防水板投標。' },
  { year: '2006.02', text: '承攬東西向八里~新店線C802Z標觀音山隧道防水膜工程，數量121,267 m²。' },
  { year: '2007.03', text: '加入廣東省水泥製品協會，並參予防蝕片按裝設計及技術研討' },
  { year: '2007.04', text: '加入大陸中鐵隧道協會，提供隧道防水膜施工技術及漏水處研討。' }
];

const History = () => (
  <div>
    <SectionTitle title="公司沿革" />
    <div className="max-w-4xl mx-auto relative py-10">
      {/* Central Divider Line */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-200 z-0"></div>
      
      {/* Timeline Items */}
      <div className="flex flex-col gap-8 md:gap-12">
        {HISTORY_DATA.map((item, index) => {
          const isEven = index % 2 === 1; // 0-indexed, so index 1 is the 2nd item (even row)
          
          return (
            <div key={index} className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center relative z-10 group">
              {/* Left Column */}
              <div className={`flex flex-col ${isEven ? 'items-end text-right' : 'items-end text-right'}`}>
                {!isEven && (
                  <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col w-full max-w-md transition-shadow">
                    <h3 className="text-xl font-bold text-brand-text mb-3">{item.year}</h3>
                    <p className="text-brand-textSec leading-relaxed text-sm md:text-base text-left">{item.text}</p>
                  </div>
                )}
              </div>

              {/* Center Node */}
              <div className="w-6 h-6 rounded-full bg-brand-yellow border-4 border-white shadow-sm flex items-center justify-center shrink-0 z-10 group-hover:scale-125 transition-transform"></div>

              {/* Right Column */}
              <div className={`flex flex-col ${isEven ? 'items-start text-left' : 'items-start text-left'}`}>
                {isEven && (
                  <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col w-full max-w-md transition-shadow">
                    <h3 className="text-xl font-bold text-brand-text mb-3">{item.year}</h3>
                    <p className="text-brand-textSec leading-relaxed text-sm md:text-base text-left">{item.text}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const TEAM_MEMBERS = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  position: i === 0 ? '總裁' : '團隊成員',
  name: i === 0 ? '林清波' : `成員 ${i + 1}`,
  image: 'https://docs.google.com/drawings/d/e/2PACX-1vRu80ODmytX3522-RjvAM7j8I45WWYAntHK1PaIU_3rsXSlnmn2TsPqc6i9SqKXsb83czxtwXuXQnmG/pub?w=960&h=720'
}));

const Team = () => (
  <section className="w-full py-10">
    <div className="max-w-full mx-auto">
      {/* Header Area */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
          MANAGEMENT
        </span>
        <div className="w-12 h-1 bg-brand-yellow mb-4"></div>
        <h2 className="text-3xl font-bold text-brand-text">
          經營團隊
        </h2>
      </div>

      {/* Team Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.id} className="bg-gray-50 rounded-lg p-3 flex flex-col items-center transition-shadow hover:shadow-md border border-gray-100">
            {/* Image Container */}
            <div className="w-full aspect-[3/4] mb-4 overflow-hidden flex items-center justify-center bg-white rounded">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-contain"
              />
            </div>
            {/* Info Container */}
            <div className="text-center flex flex-col gap-1">
              <span className="text-xs text-brand-textSec font-medium">{member.position}</span>
              <span className="text-sm font-bold text-brand-text">{member.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Fallback for other sections
const Placeholder = ({ title }: { title: string }) => (
  <div>
    <SectionTitle title={title} />
    <div className="bg-gray-100 p-12 text-center text-gray-500">
      <p>內容建置中...</p>
    </div>
  </div>
);

export const About: React.FC = () => {
  return (
    <AboutLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/chairman" element={<Chairman />} />
        <Route path="/team" element={<Team />} />
        <Route path="/business" element={<Business />} />
        <Route path="/history" element={<History />} />
        <Route path="/experience" element={<Placeholder title="工程經驗" />} />
        <Route path="/affiliates" element={<Placeholder title="關係企業" />} />
      </Routes>
    </AboutLayout>
  );
};