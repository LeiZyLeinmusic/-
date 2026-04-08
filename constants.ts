import { Product, Project, NewsItem, InsightItem } from './types';

// Products Data
export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    slug: 'floor-soundproof-mat',
    name: '靜音樓板隔音墊',
    tagline: '高密度橡膠隔音，打造寧靜居住空間',
    categoryTag: '樓板隔音',
    description: '樓板隔音墊為一種具高彈性、耐壓縮性與聲學吸收性能之建築聲學材料，主要應用於樓地板構造中，藉由阻隔衝擊聲波與降低結構聲傳遞，有效改善樓層間噪音干擾，提升居住環境的靜謐性與私密性。',
    images: ['https://docs.google.com/drawings/d/e/2PACX-1vRjaVHmTV2qOWKhWOamkSyOByvyzwLnxzPkS8AKT3IxV1mgoUYtI1-TjlNjDRqrKAjFyA1kPpE7FJck/pub?w=960&h=720', 'https://picsum.photos/800/600?random=11'],
    specs: [
      { label: '型號 MUTE01 認證/標準', value: '隔音性能: 降噪ΔLw 21dB' },
      { label: '型號 MUTE01 包裝/規格', value: '厚度: 6mm±1mm' },
      { label: '型號 MUTE02 認證/標準', value: '隔音性能: 降噪ΔLw 25dB' },
      { label: '型號 MUTE02 包裝/規格', value: '厚度: 6mm±1mm' }
    ],
    material: '橡膠',
    applicationsText: '廣泛應用於住宅樓地板、飯店房間、房間教室、醫療院所與商辦大樓，降低樓層間衝擊性噪音及提升隔音品質。',
    features: [
      '符合建築技術法規46-6規定',
      '高效能隔音吸震',
      '使用醫療級橡膠原料，安全無毒',
      '極低吸水率、絕佳耐水性',
      '領有高性能綠建材證書',
      '符合耐燃一級標準',
      '不含甲醛、苯及重金屬等有害物質',
      '施用雙黏工法，杜絕地磚空殼問題',
      '施工便利快速'
    ],
    advantages: '靜音樓板隔音墊不僅提供卓越的防護效果，更在施工便利性與長期耐用度上達到完美平衡，是現代建築工程不可或缺的關鍵材料。'
  },
  {
    id: 'p2',
    slug: 'pvc-pipe-fitting',
    name: 'PVC 塑膠管',
    tagline: '耐腐蝕、高強度工業級管材',
    categoryTag: '工業管材',
    description: 'PVC塑膠管（聚氯乙烯管）為目前最廣泛使用的非金屬管材之一，具備優異的化學耐腐蝕性、絕緣性與施工便利性。因其質輕、強度高、壽命長且價格經濟，廣泛應用於建築給排水、電線管路保護、農業灌溉及工業設備管線等多元場域。',
    images: ['https://docs.google.com/drawings/d/e/2PACX-1vSSZ0HPd9JZ46xerlt4vYHTHliLsWoKSgAsXgrG5TN0ttF8EJR7XkGaA7CjDbHqmzqebPu40wjl7MGb/pub?w=960&h=720', 'https://picsum.photos/800/600?random=12'],
    specs: [
      { label: '認證/標準', value: '符合CNS 1298、CNS 12811、CNS12812、CNS 12911規範' }
    ],
    material: '聚氯乙烯 (PVC)',
    applicationsList: [
      '給水用PVC管（PVC-U）：耐壓、防漏、無毒，適合冷水管路系統。',
      '電線導管（PVC Conduit）：具良好絕緣與耐燃性，用於電氣配線保護。',
      '排水用PVC管：大口徑、重力流設計，用於廢水與雨水排放。'
    ],
    features: [
      '耐腐蝕：對酸鹼與多數化學物質具高抗性，適用於工業排水。',
      '絕緣性佳：適用於電線管路，提升施工安全性。',
      '質輕易施工：比金屬管輕，可迅速切割、接合，節省施工時間。',
      '抗壓強度高：特定規格可承受高壓，應用於加壓管路系統。',
      '使用壽命長：材質穩定，可長期使用達30年以上。',
      '不生鏽、不結垢：管內光滑，不會因水質影響流速與品質。'
    ],
    advantages: 'PVC塑膠管不僅提供卓越的防護效果，更在施工便利性與長期耐用度上達到完美平衡，是現代建築工程不可或缺的關鍵材料。'
  },
  {
    id: 'p3',
    slug: 'pvc-waterproof-membrane',
    name: 'PVC 防水膜',
    tagline: '隧道與地下結構專用防水系統',
    categoryTag: '結構防水',
    description: 'PVC防水膜為一種熱塑性聚合物基材所製成之高性能防水材料，具有優異的柔韌性、耐候性與長期抗滲性能，可廣泛應用於建築、地下結構、水池、隧道、交通設施等多種防水工程。\nPVC防水膜通常為單層構造，表面可搭配纖維強化層（如無紡布）或背貼層，亦可依施工需求製作為預鋪式防水系統、機械固定系統或滿黏工法。',
    images: ['https://docs.google.com/drawings/d/e/2PACX-1vSVlRckWauD427N5EOb2vg60ka_LWfhLFITAhR73drlC5Scm_nJrpxD8w9m2HlO0RME59kTid9fLOgT/pub?w=960&h=720', 'https://picsum.photos/800/600?random=13'],
    specs: [],
    material: '聚氯乙烯(PVC)',
    applicationsList: [
      '地下室、基礎防水系統',
      '地上或地下停車場屋頂',
      '公共建築、機場、體育館屋頂防水',
      '水池、人工湖、水景牆',
      '地鐵、隧道、橋梁結構防水',
      '預鋪式隧道/地下結構外防水系統'
    ],
    features: [
      '優異的防水抗滲能力：材質緊密，耐水壓不滲透，適用於長期接觸水體區域。',
      '高耐候與抗紫外線性：適用於暴露型屋頂或戶外使用，壽命長達20年以上。',
      '柔韌耐拉伸，不易撕裂：可承受建築物微小變形與熱脹冷縮。',
      '耐化學腐蝕與根穿刺：可用於地下或綠化層施工，耐酸鹼腐蝕與植物根系侵蝕。',
      '熱風焊接施工快速可靠：無須黏膠，焊縫牢固、水密性佳，提升施作效率與安全性。',
      '環保可回收：材料無毒、可回收利用，符合現代永續建材趨勢。'
    ],
    advantages: 'PVC防水膜不僅提供卓越的防護效果，更在施工便利性與長期耐用度上達到完美平衡，是現代建築工程不可或缺的關鍵材料。'
  },
  {
    id: 'p6',
    slug: 'pvc-waterstop',
    name: 'PVC 止水帶',
    tagline: '伸縮縫與施工縫的標準解決方案',
    categoryTag: '止水材料',
    description: 'PVC止水帶是一種以聚氯乙烯（Polyvinyl Chloride）為基材所製成的嵌入型止水材料，具備優異的彈性、防滲與抗化學性能，廣泛應用於混凝土結構縫隙的防水處理，如施工縫、伸縮縫、沉降縫等。\n其主要作用是在混凝土澆置過程中預先埋設，能承受混凝土收剪斷應力。當結構因地震、沉降、溫差變化而產生微小變形時，止水帶可有效防止地下水或其他液體滲入結構體內部。',
    images: ['https://docs.google.com/drawings/d/e/2PACX-1vTeco-QFw1QyUI8rF6e98IFXP-fs3Tw7WSirYmjLdbcRtR-mlNMgTdKViQFPW_uv-Dmb7z-hLeUzlma/pub?w=927&h=523', 'https://picsum.photos/800/600?random=16'],
    specs: [
      { label: '認證/標準', value: '符合DIN16726標準' }
    ],
    material: '聚氯乙烯(PVC)',
    applicationsList: [
      '地下室結構：施工縫、沉降縫、外牆止水',
      '水池、水塔：結構體中縫處的防水補強',
      '隧道工程：模板縫與連接縫內部止水',
      '污水處理廠：耐腐蝕型止水帶使用於酸鹼區',
      '大壩、橋墩：高水壓結構中伸縮縫止水'
    ],
    features: [
      '高彈性與柔韌性：可適應混凝土結構的微動與變形，避免裂縫滲水。',
      '良好止水效果：中間波紋與肋狀設計增加與混凝土的鑲嵌力，提升防水性能。',
      '耐酸鹼與耐腐蝕：適用於化學池、水處理廠等腐蝕性環境。',
      '多樣尺寸與型式：各種中置式、外貼式、背貼式、鋸齒型等可選，符合工程需求。',
      '使用壽命長：材質穩定，埋設後可長期有效發揮止水功能。',
      '施工容易：用美工刀裁切，以焊槍及同材質焊條焊接，施工迅速效果優良。'
    ],
    advantages: 'PVC止水帶不僅提供卓越的防護效果，更在施工便利性與長期耐用度上達到完美平衡，是現代建築工程不可或缺的關鍵材料。'
  },
  {
    id: 'p4',
    slug: 'hydrophilic-waterstop',
    name: '水膨脹止水材',
    tagline: '遇水膨脹填補縫隙，雙重防護',
    categoryTag: '止水材料',
    description: '水膨脹橡膠止水材是一種以天然橡膠或合成橡膠為基材，混合特殊吸水膨脹材料（如膨潤土、吸水樹脂）製成的彈性防水材料。\n其特色在於：接觸水分後會吸水膨脹，體積增加達2~4倍，填滿混凝土縫隙，有效封堵水路，達到持久防水的目的。\n該材料多應用於混凝土接縫處（如施工縫、冷縫、管道穿牆處），做為一道主動型止水機制，即便在有微小裂縫或施工不確實時，也能因吸水膨脹主動補償防水缺口。',
    images: ['https://docs.google.com/drawings/d/e/2PACX-1vTwFJfnP5L0Isr3qskbv4NMJMQTB4QHB8Glb7mizxT1UAk0Jcii1FBJdm8yFS2zOQ1LGAmfQdweImi6/pub?w=960&h=720', 'https://picsum.photos/800/600?random=14'],
    specs: [],
    material: '橡膠及高吸水性樹脂',
    applicationsList: [
      '地下室、地下道：施工縫、冷縫、剪力縫等接縫處',
      '水池、水塔、泳池：底板與牆體結合處、防水層接縫',
      '隧道、箱涵工程：管線穿牆處、預鑄構件接合部',
      '污水處理設施：酸鹼或鹽水環境中之耐蝕性接縫',
      '基礎工程：地梁、擋土牆、沉箱接縫防水'
    ],
    features: [
      '遇水膨脹、主動止水：膨脹後可填補縫隙與毛細孔，阻絕水路。',
      '可反覆吸脹：經乾濕循環仍可維持止水功能。',
      '柔韌性佳：可適應基面不平整與結構微動，避免硬性斷裂。',
      '施工簡便：可用專用膠、釘子或鋼筋綁扎固定，與混凝土同步澆置。',
      '黏結性強：與混凝土結合緊密，不易脫落或移位。',
      '規格多樣：常見斷面有矩形、D型、Ω型、T型等，可依需求選擇。'
    ],
    advantages: '水膨脹止水材不僅提供卓越的防護效果，更在施工便利性與長期耐用度上達到完美平衡，是現代建築工程不可或缺的關鍵材料。'
  },
  {
    id: 'p5',
    slug: 'anti-corrosion-lining',
    name: '防蝕襯裡',
    tagline: '極端環境下的表面防護專家',
    categoryTag: '防蝕工程',
    description: '防蝕襯裡是一種應用於混凝土、水泥構造物或金屬基材表面的保護層系統，用以抵禦酸、鹼、鹽、水氣、油類、污水、化學液體等對基體的腐蝕破壞。\n防蝕襯裡可採熱熔、焊接、黏貼、噴塗、澆塗、預鑄覆膜等方式與基材結合，並與建築主體同步施工或後貼施作，達成持久且一體成形之抗腐蝕防護層。',
    images: ['https://docs.google.com/drawings/d/e/2PACX-1vTY4AG6t_-tSuovYRO0SsL11SkQxhg7O64Q1b0OJNBhmnp0PcSjRyQaxNzb2pfKX-RW3BjpB-7ly_E-/pub?w=960&h=720', 'https://picsum.photos/800/600?random=15'],
    specs: [],
    material: '聚氯乙烯',
    applicationsList: [
      '污水處理廠：曝氣槽、生物池、汙泥槽、放流槽內部牆面與底板',
      '化學品儲槽區：二次圍堤（堰堤）內部防滲防蝕處理',
      '電鍍與酸洗廠：槽體、排水溝、沉澱池內部防蝕',
      '地下結構：水池、水箱、地下儲槽、集水井',
      '食品與製藥工廠：需潔淨、無污染、高耐蝕性的地面與牆體',
      '港口與海事結構：淡海水交界區之防腐保護層'
    ],
    features: [
      '高耐化學腐蝕性：可長期抵抗強酸、強鹼、鹽類、污水、油類等腐蝕介質。',
      '密閉性與抗滲性優良：襯裡層可提供完整不透水、不透氣的防護結構。',
      '延長結構壽命：避免混凝土或鋼筋腐蝕剝離，維持原構造耐久性。',
      '抗磨損、抗裂性高：表面硬度高，能抵抗流體沖刷與顆粒磨耗，並具一定柔韌性。',
      '適用新建與翻修工程：可於舊構造物上加覆，亦可於預鑄件或新澆混凝土施工時一體成形。'
    ],
    advantages: '防蝕襯裡不僅提供卓越的防護效果，更在施工便利性與長期耐用度上達到完美平衡，是現代建築工程不可或缺的關鍵材料。'
  },
  {
    id: 'p7',
    slug: 'sealant',
    name: '單液型填縫膠',
    tagline: '高耐候性建築填縫密封',
    categoryTag: '密封材料',
    description: '單液型填縫膠是一種施工簡便的彈性密封材料，開封即可使用，無需事先混合。膠體會與空氣中的濕氣反應固化，形成具有彈性、耐候、黏著性良好的密封層。適用於各類建築接縫、填補、密封與防水工程，提供可靠的長期密封保護。',
    images: ['https://docs.google.com/drawings/d/e/2PACX-1vQka9OnJUZCtfpQd-9L1zWVhHUW7leL9X3hyWNjQpnAfA9cI4dUooZ2fJ-2lIcieaiPe8h8KGzhPVCa/pub?w=960&h=720', 'https://picsum.photos/800/600?random=17'],
    specs: [
      { label: '認證/標準', value: '符合CNS6985、ASTM C920' },
      { label: '包裝/規格', value: '600ml/支, 20支/箱' },
      { label: '顏色', value: '白色/ 灰色/ 黑色' },
      { label: '產品保存', value: '儲存溫度 5OC至40OC，避免日曬，有效期限18個月。' }
    ],
    material: '聚氨脂(PU)單液型',
    applicationsList: [],
    features: [],
    advantages: '單液型填縫膠不僅提供卓越的防護效果，更在施工便利性與長期耐用度上達到完美平衡，是現代建築工程不可或缺的關鍵材料。'
  }
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    id: 'prj1',
    title: '雪山隧道',
    category: 'tunnel',
    client: '交通部國道新建工程局',
    contractor: '榮民工程股份有限公司',
    scope: '隧道防水工程',
    location: '新北市/宜蘭縣',
    year: '1991',
    images: ['https://docs.google.com/drawings/d/e/2PACX-1vSyHEnfPXULCUleYGDUXuf2iE126BmhKF-LndgoyE0PGf31hUuSIKU_SXo2tjatzphoa-6rCeOr_ltQ/pub?w=960&h=720', 'https://picsum.photos/800/600?random=22'],
    description: '本工程採用全包覆式PVC防水膜系統，針對高地下水位區段進行強化防護，確保捷運營運安全。',
    materials: ['PVC 防水膜', '不織布緩衝層'],
    relatedProductSlugs: ['pvc-waterproof-membrane']
  },
  {
    id: 'prj2',
    title: '遠東園區',
    category: 'commercial',
    client: '遠東集團',
    contractor: '遠揚營造',
    scope: '地下室防漏與防蝕工程',
    location: '新北市板橋區',
    year: '2010',
    images: ['https://docs.google.com/drawings/d/e/2PACX-1vQVXT-oVGSc9Otl2DsU09RzyVpkPzBExyrBTbNGHFBpDD021TM2J3d-QWBr0H7b39pyz-89LRxIRLd5/pub?w=960&h=720', 'https://picsum.photos/800/600?random=24'],
    description: '針對高腐蝕性酸鹼廢水池，施作5mm厚PE防蝕襯裡，並針對管口進行特殊收邊處理。',
    materials: ['PE 防蝕襯裡', '化學錨栓'],
    relatedProductSlugs: ['anti-corrosion-lining', 'pvc-pipe-fitting']
  },
  {
    id: 'prj3',
    title: '林口國宅暨2017世界大學運動會選手村',
    category: 'residential',
    client: '內政部營建署',
    contractor: '瑞助營造',
    scope: '樓板隔音工程',
    location: '新北市林口區',
    year: '2014',
    images: ['https://docs.google.com/drawings/d/e/2PACX-1vSvOA7cUavWuNujLnGCzyM76Gqp_yAMxBVvnfn9O2o5EU4UbMhJ1xK_i14tbaKwvkYNxSxlDxFk2tnj/pub?w=960&h=720', 'https://picsum.photos/800/600?random=26'],
    description: '全棟採用8mm高密度橡膠隔音墊，實測降低衝擊音達22dB，大幅提升居住品質。',
    materials: ['樓板隔音墊', '制震膠'],
    relatedProductSlugs: ['floor-soundproof-mat']
  },
  {
    id: 'prj4',
    title: '淡江大橋',
    category: 'road-bridge',
    client: '交通部公路總局',
    contractor: '工信工程',
    scope: '橋樑伸縮縫及防水工程',
    location: '新北市淡水區/八里區',
    year: '2014',
    images: ['https://docs.google.com/drawings/d/e/2PACX-1vQlEZvSDMiSFuDPdTFWSDQ7i4jBQK61BzxM8gUGykmQf_2qAAxcngj5eEhWLslbpe1EA4h3jlAXi_Q7/pub?w=960&h=720', 'https://picsum.photos/800/600?random=28'],
    description: '跨海大橋伸縮縫採用高彈性止水帶與耐候填縫膠，抵抗強風與位移。',
    materials: ['PVC 止水帶', '填縫膠'],
    relatedProductSlugs: ['pvc-waterstop', 'sealant']
  },
  {
    id: 'prj5',
    title: '高雄港聯外',
    category: 'public',
    client: '交通部鐵道局',
    contractor: '泛亞工程',
    scope: '連續壁接縫防水工程',
    location: '高雄市',
    year: '2011',
    images: ['https://docs.google.com/drawings/d/e/2PACX-1vSx-zXl4h5K4D8WBYXrzR6Lu4wUqW90q09b_XabRFkS06cA9QNoAnqmQV4vZ0QlJhnB6la6tboLhAsJ/pub?w=960&h=720', 'https://picsum.photos/800/600?random=30'],
    description: '巨型地下開挖工程，使用遇水膨脹止水條處理連續壁接縫。',
    materials: ['水膨脹止水材', '止水帶'],
    relatedProductSlugs: ['hydrophilic-waterstop']
  },
  {
    id: 'prj6',
    title: '桃園機捷',
    category: 'rail',
    client: '交通部高鐵局',
    contractor: '丸紅株式會社',
    scope: '軌道減震工程',
    location: '台北市/新北市/桃園市',
    year: '2006',
    images: ['https://docs.google.com/drawings/d/e/2PACX-1vT-aXo1oQbPQgu2I7fSo9rDVzgb8uxMgxQFkU3EtQA3uWgKFnC4zByP38uzEodMTP2o1ORJu4wBRd1H/pub?w=960&h=720', 'https://picsum.photos/800/600?random=32'],
    description: '軌道版下方鋪設減震墊，減少列車運行對周邊建築的震動影響。',
    materials: ['橡膠減震墊'],
    relatedProductSlugs: ['floor-soundproof-mat']
  },
  {
    id: 'prj7',
    title: '離岸風電陸上變電站',
    category: 'other',
    client: '沃旭能源',
    contractor: '星能股份有限公司',
    scope: '電纜溝槽防蝕防水',
    location: '彰化縣',
    year: '2024',
    images: ['https://picsum.photos/800/600?random=33', 'https://picsum.photos/800/600?random=34'],
    description: '沿海高鹽害環境，電纜溝槽採用特殊防蝕塗裝與止水處理。',
    materials: ['填縫膠', '防蝕塗料'],
    relatedProductSlugs: ['sealant']
  },
  // Add more to reach 12...
  {
    id: 'prj8',
    title: '信義區商辦大樓地下室',
    category: 'commercial',
    client: '富邦人壽',
    contractor: '建國工程',
    scope: '地下室外牆防水',
    location: '台北市',
    year: '2022',
    images: ['https://picsum.photos/800/600?random=35', 'https://picsum.photos/800/600?random=36'],
    description: '深開挖地下室外牆防水工程。',
    materials: ['PVC 防水膜'],
    relatedProductSlugs: ['pvc-waterproof-membrane']
  },
  {
    id: 'prj9',
    title: '台南科學園區蓄水池',
    category: 'public',
    client: '南部科學園區管理局',
    contractor: '大陸工程',
    scope: '蓄水池內襯防漏',
    location: '台南市',
    year: '2023',
    images: ['https://picsum.photos/800/600?random=37', 'https://picsum.photos/800/600?random=38'],
    description: '大型民生用水蓄水池內襯。',
    materials: ['PE 防蝕襯裡'],
    relatedProductSlugs: ['anti-corrosion-lining']
  },
  {
    id: 'prj10',
    title: '花東鐵路雙軌化隧道',
    category: 'tunnel',
    client: '交通部鐵道局',
    contractor: '中華工程',
    scope: '隧道防水膜鋪設',
    location: '花蓮縣',
    year: '2024',
    images: ['https://picsum.photos/800/600?random=39', 'https://picsum.photos/800/600?random=40'],
    description: '新奧工法隧道防水層施作。',
    materials: ['PVC 防水膜', '不織布'],
    relatedProductSlugs: ['pvc-waterproof-membrane']
  },
  {
    id: 'prj11',
    title: '新北市集合住宅防水',
    category: 'residential',
    client: '遠雄建設',
    contractor: '遠雄營造',
    scope: '屋頂露台防水工程',
    location: '新北市',
    year: '2023',
    images: ['https://picsum.photos/800/600?random=41', 'https://picsum.photos/800/600?random=42'],
    description: '屋頂與露台防水工程。',
    materials: ['填縫膠', 'PU防水'],
    relatedProductSlugs: ['sealant']
  },
  {
    id: 'prj12',
    title: '高鐵高架橋伸縮縫更換',
    category: 'rail',
    client: '台灣高鐵',
    contractor: '達欣工程',
    scope: '橋樑伸縮縫止水',
    location: '苗栗縣',
    year: '2022',
    images: ['https://picsum.photos/800/600?random=43', 'https://picsum.photos/800/600?random=44'],
    description: '既有橋樑維修工程。',
    materials: ['PVC 止水帶'],
    relatedProductSlugs: ['pvc-waterstop']
  }
];

// News Data
export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    slug: '2024-annual-meeting',
    date: '2024.01.15',
    title: '2024 煒鑫實業年度大會圓滿落幕',
    summary: '展望新的一年，我們將持續投入研發更環保的防水材料。',
    content: '內文詳情...',
    image: 'https://picsum.photos/800/600?random=50'
  },
  {
    id: 'n2',
    slug: 'new-product-launch',
    date: '2023.11.20',
    title: '全新一代高密度隔音墊正式上市',
    summary: '通過國家級實驗室認證，隔音效果再升級。',
    content: '內文詳情...',
    image: 'https://picsum.photos/800/600?random=51'
  },
  {
    id: 'n3',
    slug: 'exhibition-taipei',
    date: '2023.09.10',
    title: '參展 2023 台北國際建材展',
    summary: '歡迎蒞臨南港展覽館 1館 4樓 M區攤位參觀指教。',
    content: '內文詳情...',
    image: 'https://picsum.photos/800/600?random=52'
  },
  {
    id: 'n4',
    slug: 'iso-certification',
    date: '2023.06.05',
    title: '榮獲 ISO 9001 品質管理認證',
    summary: '品質是我們的承諾，透過國際認證展現專業。',
    content: '內文詳情...',
    image: 'https://picsum.photos/800/600?random=53'
  },
  {
    id: 'n5',
    slug: 'employee-training',
    date: '2023.04.12',
    title: '春季工務部教育訓練',
    summary: '加強施工安全意識與新工法教學。',
    content: '內文詳情...',
    image: 'https://picsum.photos/800/600?random=54'
  },
  {
    id: 'n6',
    slug: 'charity-event',
    date: '2023.01.30',
    title: '參與偏鄉修繕公益計畫',
    summary: '善盡企業社會責任，協助偏鄉學校修補漏水教室。',
    content: '內文詳情...',
    image: 'https://picsum.photos/800/600?random=55'
  }
];

// Insights Data
export const INSIGHTS: InsightItem[] = [
  {
    id: 'i1',
    slug: 'global-soundproof-regulations',
    category: '法規新知',
    title: '全球樓板隔音法規比較與趨勢分析',
    summary: '從台灣現況看住宅聲學的發展方向，比較日本、德國等國的樓板隔音制度差異。',
    content: `全球樓板隔音法規比較與趨勢分析

——從台灣現況看住宅聲學的發展方向

隨著集合住宅比例逐年提高，「樓板衝擊音」已成為都市居住品質的核心議題。  
相較於過去僅關注結構安全與防水性能，現代建築已逐步將聲學舒適度納入基本住宅品質標準。

本文將從法規面、技術面與市場趨勢面，分析台灣與日本、德國等主要國家的樓板隔音制度差異。

一、台灣樓板隔音規範現況

主管機關為 內政部營建署 ，依據《建築技術規則 建築設計施工編》規定：

■ 樓板衝擊音標準（集合住宅）

*   L’n,w ≤ 58 dB

■ 檢測方式

*   採現場實測（依 CNS 測試方法）
*   完工後由合格單位進行量測

■ 技術特性分析

1.  屬於最低門檻管理型標準
2.  未設立分級制度（無舒適等級區分）
3.  未全面納入設備與管道噪音
4.  對設計階段並無聲學顧問強制要求

實務上若僅依 RC 結構樓板厚度，往往難以穩定達標，因此多需搭配浮動樓板或隔音墊系統。

二、日本：成熟的分級制度與市場機制

日本由 国土交通省 管理，除《建築基準法》外，另有「住宅性能表示制度」。

■ 衝擊音分類

*   輕量衝擊音（LL）
*   重量衝擊音（LH）

■ 常見高品質標準

*   LL-45～50
*   LH-50以下

■ 制度優勢

1.  明確分級，消費者可辨識品質
2.  預售屋需揭露性能等級
3.  設計階段即整合結構、隔音材料與施工工法
4.  聲學顧問制度成熟

日本的成功關鍵在於：  
將聲學性能市場化，而非僅法規最低化。

三、德國：整體建築聲學工程思維

德國依 DIN 4109 標準進行管理。

■ 樓板衝擊音要求

*   法定最低：約 L’n,w ≤ 53 dB
*   高舒適標準：≤ 46 dB

■ 管理範圍涵蓋

*   牆體空氣音（Rw）
*   排水立管噪音
*   設備機房噪音
*   外部交通噪音

德國的核心理念是：

建築聲學為整體工程，而非單一樓板問題。

四、英美制度簡述

🇬🇧 英國

依 Building Regulations Part E：

*   新建住宅：約 ≤ 64 dB
*   改建住宅：約 ≤ 62 dB
*   強制完工後實測

🇺🇸 美國

依 IBC 與 ASTM：

*   IIC ≥ 50
*   STC ≥ 50
*   州與城市層級執行

美國市場中，高端公寓常自行提高至 IIC 55 以上。

五、各國制度差異核心比較

<table class="c11"><tbody><tr class="c8"><td class="c6" colspan="1" rowspan="1"><p class="c4"><span class="c2">面向</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c4"><span class="c2">台灣</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c4"><span class="c2">日本</span></p></td><td class="c7" colspan="1" rowspan="1"><p class="c4"><span class="c2">德國</span></p></td></tr><tr class="c5"><td class="c6" colspan="1" rowspan="1"><p class="c4"><span class="c0">法規型態</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c4"><span class="c0">最低門檻</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c4"><span class="c0">分級制度</span></p></td><td class="c7" colspan="1" rowspan="1"><p class="c4"><span class="c0">分級＋舒適標準</span></p></td></tr><tr class="c5"><td class="c6" colspan="1" rowspan="1"><p class="c4"><span class="c0">設計階段聲學整合</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c4"><span class="c0">少</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c4"><span class="c0">普遍</span></p></td><td class="c7" colspan="1" rowspan="1"><p class="c4"><span class="c0">必須</span></p></td></tr><tr class="c8"><td class="c6" colspan="1" rowspan="1"><p class="c4"><span class="c0">設備噪音規範</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c4"><span class="c0">少</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c4"><span class="c0">有</span></p></td><td class="c7" colspan="1" rowspan="1"><p class="c4"><span class="c0">完整</span></p></td></tr><tr class="c8"><td class="c6" colspan="1" rowspan="1"><p class="c4"><span class="c0">市場透明度</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c4"><span class="c0">低</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c4"><span class="c0">高</span></p></td><td class="c7" colspan="1" rowspan="1"><p class="c4"><span class="c0">高</span></p></td></tr><tr class="c8"><td class="c6" colspan="1" rowspan="1"><p class="c4"><span class="c0">舒適度導向</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c4"><span class="c0">弱</span></p></td><td class="c3" colspan="1" rowspan="1"><p class="c4"><span class="c0">強</span></p></td><td class="c7" colspan="1" rowspan="1"><p class="c4"><span class="c0">非常強</span></p></td></tr></tbody></table>

六、技術層面分析：為何單純加厚樓板不夠？

樓板衝擊音屬於結構傳遞聲（Structure-borne sound），其傳播路徑包含：

1.  結構樓板傳導
2.  梁柱連結
3.  管道與牆體共振

僅增加 RC 厚度會：

*   提升結構成本
*   增加荷載
*   但對低頻重衝擊音改善有限

因此現代做法多採：

*   浮動樓板系統
*   彈性隔音墊
*   邊界彈性隔離設計

其原理為：

透過彈性層形成質量–彈簧系統（Mass-Spring System），降低振動傳遞。

七、國際趨勢：從「合格」走向「舒適」

全球趨勢明顯朝向：

1.  性能分級制度
2.  強制實測報告揭露
3.  設計階段聲學模擬
4.  設備與管道噪音納管
5.  ESG 與居住健康標準整合

特別在歐洲，聲學已被視為「健康住宅」的一環。

八、對台灣建築產業的意義

未來台灣可能發展方向：

*   建立樓板隔音分級制度
*   建案銷售揭露聲學性能
*   設備噪音納入管理
*   推動聲學顧問制度

對建設公司而言：

樓板隔音已不只是法規問題，而是品牌競爭力問題。

九、樓板隔音系統的專業解決方案

在現行 L’n,w ≤ 58 dB 標準下，穩定達標的技術策略包括：

*   底層彈性黏著層
*   高性能樓板隔音墊
*   面層保護層
*   足夠厚度之水泥砂漿
*   邊界隔離設計

關鍵不僅是材料本身，而是：

*   系統整合設計
*   施工細節控制
*   現場實測驗證

十、結論

台灣樓板隔音制度已建立基礎門檻，  
但與日本、德國相比仍屬初階階段。

未來發展將朝向：

*   分級透明化
*   整體住宅聲學管理
*   舒適度導向市場競爭

對建築與建材產業而言，  
提早布局完整樓板隔音系統與聲學整合能力，將成為中長期競爭關鍵。`, 
    image: 'https://docs.google.com/drawings/d/e/2PACX-1vTLWUBie9KyUFjDzG2i78XVP1cWGjB7dAM9BX0u5tQ7s5pK-6kbG8YAnHG8HpbJBDfisGdH402NNpxa/pub?w=960&h=720'
  },
  {
    id: 'i6',
    slug: 'basement-leakage',
    category: '維修診斷',
    title: '地下室滲水原因診斷與對策',
    summary: '從裂縫型態判斷漏水原因，選擇最適當的修補工法。',
    content: '...',
    image: 'https://docs.google.com/drawings/d/e/2PACX-1vQgPM12K2Onrb5CJhMLhUuH4gsIffKRL7Wsfy13s6UObn7INmBhWGjrH3du8_SPEco4coQnYCpL-lVM/pub?w=960&h=720'
  }
];