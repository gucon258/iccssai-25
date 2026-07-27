const fs = require('fs');
const file = 'components/Navbar.js';
let content = fs.readFileSync(file, 'utf8');

// Wrap return in fragment
content = content.replace('  return (\n    <nav', '  return (\n    <>\n    <nav');

// Extract mobile menu block
const startMarker = '        {/* Mobile and Tablet Menu */}';
const endMarker = '        {/* Desktop Navigation */}';
const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error('Markers not found');
    process.exit(1);
}

const mobileMenuBlock = content.substring(startIndex, endIndex);

// Remove mobile menu block from original position
content = content.slice(0, startIndex) + content.slice(endIndex);

// Insert mobile menu block after </nav>
const navCloseIndex = content.lastIndexOf('    </nav>');
if (navCloseIndex === -1) {
    console.error('nav closing not found');
    process.exit(1);
}

content = content.slice(0, navCloseIndex + 10) + '\n' + mobileMenuBlock + '    </>\n' + content.slice(navCloseIndex + 10);

fs.writeFileSync(file, content);
console.log('Navbar updated');
