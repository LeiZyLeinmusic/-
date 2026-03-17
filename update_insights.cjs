const fs = require('fs');

const doc1 = fs.readFileSync('doc1.txt', 'utf8').replace(/^未命名文件.*\n/g, '').replace(/^5 分ごとに自動更新\n/g, '').trim();
const doc2 = fs.readFileSync('doc2.txt', 'utf8').trim();
const doc3 = fs.readFileSync('doc3.txt', 'utf8').replace(/^未命名文件.*\n/g, '').replace(/^5 分ごとに自動更新\n/g, '').trim();

let constants = fs.readFileSync('constants.ts', 'utf8');

// We need to replace the `content` of the first 3 items in INSIGHTS.
// We can parse it using regex or just string replacement if we are careful.
// Since it's a TS file, we can just replace the `content: '...',` lines.

// Let's replace the whole INSIGHTS array.
// We can extract the INSIGHTS array using regex.
const insightsRegex = /export const INSIGHTS: InsightItem\[\] = \[([\s\S]*?)\];/;
const match = constants.match(insightsRegex);

if (match) {
  let insightsStr = match[1];
  
  // Replace content for i1
  insightsStr = insightsStr.replace(
    /id: 'i1',[\s\S]*?title: '([^']*)',[\s\S]*?summary: '([^']*)',[\s\S]*?content: '.*?',/,
    `id: 'i1',\n    slug: 'global-soundproof-regulations',\n    category: '法規新知',\n    title: '全球樓板隔音法規比較與趨勢分析',\n    summary: '從台灣現況看住宅聲學的發展方向，比較日本、德國等國的樓板隔音制度差異。',\n    content: \`${doc1.replace(/`/g, '\\`')}\`, `
  );

  // Replace content for i2
  insightsStr = insightsStr.replace(
    /id: 'i2',[\s\S]*?title: '([^']*)',[\s\S]*?summary: '([^']*)',[\s\S]*?content: '.*?',/,
    `id: 'i2',\n    slug: 'country-soundproof-comparison',\n    category: '法規新知',\n    title: '各國隔音法規比較',\n    summary: '簡單比較各主要國家的建築法規，如何將居家噪音降低納入規範中。',\n    content: \`${doc2.replace(/`/g, '\\`')}\`, `
  );

  // Replace content for i3
  insightsStr = insightsStr.replace(
    /id: 'i3',[\s\S]*?title: '([^']*)',[\s\S]*?summary: '([^']*)',[\s\S]*?content: '.*?',/,
    `id: 'i3',\n    slug: 'soundproof-materials-guide',\n    category: '材料選擇',\n    title: '隔音材料及其用途指南',\n    summary: '介紹各種隔音材料的運作原理與應用場景，幫助您選擇合適的隔音方案。',\n    content: \`${doc3.replace(/`/g, '\\`')}\`, `
  );

  constants = constants.replace(insightsRegex, `export const INSIGHTS: InsightItem[] = [${insightsStr}];`);
  fs.writeFileSync('constants.ts', constants);
  console.log('Successfully updated constants.ts');
} else {
  console.log('Could not find INSIGHTS array');
}
