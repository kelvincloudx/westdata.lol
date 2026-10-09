import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

const expectedFiles = [
  'index.html',
  'plans/index.html',
  'start/index.html',
  'clients/index.html',
  'insights/index.html',
  'insights/traffic-planning/index.html',
  'insights/one-time-data/index.html',
  'insights/subscription-protection/index.html',
  'insights/clashparty-rules/index.html',
  'insights/connection-metrics/index.html',
  'insights/device-setup/index.html',
  'insights/user-checklist/index.html',
  'faq/index.html',
  'sitemap.xml',
  'robots.txt'
];

console.log('=== STARTING VERIFICATION ===');

let missingFiles = 0;
expectedFiles.forEach(file => {
  const filePath = path.join(distDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`[PASS] File exists: ${file}`);
  } else {
    console.log(`[FAIL] Missing file: ${file}`);
    missingFiles++;
  }
});

// Check content of index.html
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// Check commercial URL
const expectedUrl = 'https://varnexa.lingdongaff.com/#/?code=HHoxxHGa';
if (indexHtml.includes(expectedUrl)) {
  console.log(`[PASS] Correct Commercial CTA URL found in index.html`);
} else {
  console.log(`[FAIL] Missing Commercial CTA URL in index.html`);
}

// Check canonical domain
if (indexHtml.includes('https://westdata.lol/')) {
  console.log(`[PASS] Canonical points to westdata.lol`);
} else {
  console.log(`[FAIL] Invalid canonical in index.html`);
}

// Check old domain canonicals
if (indexHtml.includes('westdata.cfd/sitemap') || indexHtml.includes('rel="canonical" href="https://westdata.cfd')) {
  console.log(`[FAIL] Found old westdata.cfd in canonical`);
} else {
  console.log(`[PASS] No westdata.cfd found in canonical`);
}

// Check pricing values in data
const plansContent = fs.readFileSync(path.resolve('src/data/plans.ts'), 'utf-8');
if (
  plansContent.includes('¥15.00') &&
  plansContent.includes('¥28.00') &&
  plansContent.includes('¥48.00') &&
  plansContent.includes('¥68.00') &&
  plansContent.includes('150GB') &&
  plansContent.includes('450GB') &&
  plansContent.includes('1000GB') &&
  plansContent.includes('300GB')
) {
  console.log(`[PASS] 4 Plans prices and data limits are exact`);
} else {
  console.log(`[FAIL] Plan pricing check failed`);
}

// Check forbidden backlinks
const forbiddenLinks = ['jichangreview.net', 'jichangguide.net'];
let forbiddenFound = false;
expectedFiles.forEach(file => {
  const filePath = path.join(distDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    forbiddenLinks.forEach(link => {
      if (content.includes(link)) {
        console.log(`[FAIL] Forbidden link ${link} found in ${file}`);
        forbiddenFound = true;
      }
    });
  }
});
if (!forbiddenFound) {
  console.log(`[PASS] Zero forbidden PBN / 3rd party airport links found`);
}

console.log('=== VERIFICATION COMPLETE ===');
