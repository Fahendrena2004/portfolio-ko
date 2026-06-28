const fs = require('fs');
const path = require('path');

function copySync(src, dest) {
    if (!fs.existsSync(src)) return;
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        const files = fs.readdirSync(src);
        for (const file of files) {
            copySync(path.join(src, file), path.join(dest, file));
        }
    } else {
        const destDir = path.dirname(dest);
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }
        fs.copyFileSync(src, dest);
    }
}

console.log('Preparing Vercel output directory (public)...');
const outDir = path.join(__dirname, 'public');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}

copySync(path.join(__dirname, 'index.html'), path.join(outDir, 'index.html'));
copySync(path.join(__dirname, 'static'), path.join(outDir, 'static'));
copySync(path.join(__dirname, 'src'), path.join(outDir, 'src'));

console.log('Copy complete! Vercel will serve the public/ directory.');
