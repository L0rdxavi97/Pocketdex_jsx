import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Soporte para ESM (porque usas `"type": "module"`)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htaccessContent = `
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
`.trim();

const outputPath = path.join(__dirname, "..", "dist", ".htaccess");

fs.writeFileSync(outputPath, htaccessContent);

console.log("✅ .htaccess generado en dist/");
