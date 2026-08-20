const fs = require('fs');
const files = ['index.html', 'about.html', 'events.html', 'team.html', 'contact.html', 'home.html', 'loader.html'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    const regex = /https:\/\/lh3\.googleusercontent\.com\/[^"]+/g;
    content = content.replace(regex, 'https://placehold.co/800x600/1c1b1b/fcf8f8?text=Image+Not+Found');
    fs.writeFileSync(file, content);
});
console.log('Images updated successfully!');
fs.writeFileSync('favicon.ico', '');
console.log('Favicon created.');
