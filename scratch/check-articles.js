import { ARTICLES } from '../src/data/articles.ts';

ARTICLES.forEach((art, index) => {
  // strip html tags
  const text = art.content.replace(/<[^>]+>/g, '');
  // count Chinese characters
  const chineseChars = text.match(/[\u4e00-\u9fa5]/g) || [];
  console.log(`Article ${index + 1}: ${art.title}`);
  console.log(`  Slug: ${art.slug}`);
  console.log(`  Chinese Character Count: ${chineseChars.length}`);
});
