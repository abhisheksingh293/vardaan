// This file is auto-generated at build time.
// Do not edit manually.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const content = `// This file is auto-generated at build time.\nexport const BUILD_TIMESTAMP = "${new Date().toISOString()}";\n`;

fs.writeFileSync(path.join(__dirname, 'src', 'buildInfo.js'), content);
console.log('Build info generated:', content);
