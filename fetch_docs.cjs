const fs = require('fs');
const TurndownService = require('turndown');
const { JSDOM } = require('jsdom');

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

// Add table support to turndown
const turndownPluginGfm = require('turndown-plugin-gfm');
turndownService.use(turndownPluginGfm.tables);

async function fetchDoc(url, filename) {
  const res = await fetch(url);
  const html = await res.text();
  
  const dom = new JSDOM(html);
  const document = dom.window.document;
  
  // Google Docs content is usually inside a div with id "contents"
  const contents = document.getElementById('contents') || document.body;
  
  // Remove the Google Docs header
  const header = contents.querySelector('#header');
  if (header) header.remove();
  
  // Remove style and script tags
  const styles = contents.querySelectorAll('style, script');
  styles.forEach(el => el.remove());
  
  const markdown = turndownService.turndown(contents.innerHTML);
  fs.writeFileSync(filename, markdown);
}

fetchDoc('https://docs.google.com/document/d/e/2PACX-1vTVPJGMmttZVCXji7LFUGtQKZq5gZvr55SfOAZjmJObXLU2urnAkM6_jMt6VlUpNE-J5fSs0hr_0cGf/pub', 'doc1.txt');
fetchDoc('https://docs.google.com/document/d/e/2PACX-1vRxnesV1lZ2a1flmBCN6WN5-Rb_0m6v11qC-rZ1R4ms5AFkFSqotBEoSS0eFHTTP5eY-THh7u7jsuZM/pub', 'doc2.txt');
fetchDoc('https://docs.google.com/document/d/e/2PACX-1vQ93rTbKCU2956_1qXOD97iAg-8ec4ynrHC27WxmHiLks8Wx32_j3mAPj2vsGlk32i7yPmvA2WuDC39/pub', 'doc3.txt');
