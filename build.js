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

console.log('Copying files for Vercel deployment...');

// Create build directory
const buildDir = path.join(__dirname, 'build');
if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
}

// Copy index.html
copySync(path.join(__dirname, 'index.html'), path.join(buildDir, 'index.html'));

// Copy public directory
copySync(path.join(__dirname, 'public'), path.join(buildDir, 'public'));

// Copy src directory
copySync(path.join(__dirname, 'src'), path.join(buildDir, 'src'));

// Note: dist/output.css is already generated inside build/dist/output.css by the Tailwind CLI

console.log('Build preparation completed successfully!');
