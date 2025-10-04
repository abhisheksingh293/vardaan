import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the current App.jsx
const appJsxPath = join(__dirname, 'src', 'App.jsx');
const appJsxContent = readFileSync(appJsxPath, 'utf8');

// Find all component files in the studymaterial directory
const studyMaterialPath = join(__dirname, 'src', 'studymaterial');
const componentFiles = readdirSync(studyMaterialPath)
  .filter(file => file.endsWith('.jsx') && !file.endsWith('.test.jsx'))
  .map(file => file.replace('.jsx', ''));

// Find all existing imports in App.jsx
const importRegex = /import\s+.*\s+from\s+['"].*\/([^/]+)\.jsx['"]/g;
const lazyImportRegex = /const\s+([A-Za-z0-9_]+)\s*=\s*React\.lazy\(\s*\(\s*\)\s*=>\s*import\s*\(\s*['"].*\/([^/]+)\.jsx['"]\s*\)\s*\)/g;

const existingImports = new Set();
let match;

// Find regular imports
while ((match = importRegex.exec(appJsxContent)) !== null) {
  existingImports.add(match[1]);
}

// Find React.lazy imports
while ((match = lazyImportRegex.exec(appJsxContent)) !== null) {
  existingImports.add(match[2]);
}

// Find missing imports
const missingImports = componentFiles.filter(file => !existingImports.has(file));

// Generate import statements for missing components
const importStatements = missingImports.map(file => {
  const componentName = file.replace(/\./g, ''); // Remove dots from filename for the variable name
  return `const ${componentName} = React.lazy(() => import('./studymaterial/${file}.jsx'));`;
});

console.log('Missing imports to add to App.jsx:');
console.log(importStatements.join('\n'));

// Write to a file
writeFileSync('missing-imports.txt', importStatements.join('\n'));
console.log('\nMissing imports have been written to missing-imports.txt');
