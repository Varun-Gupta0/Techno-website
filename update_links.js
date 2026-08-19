const fs = require('fs');
const files = ['index.html', 'about.html', 'events.html', 'team.html', 'contact.html', 'home.html', 'loader.html'];
const links = {
    'HOME': 'home.html',
    'ABOUT': 'about.html',
    'EVENTS': 'events.html',
    'TEAM': 'team.html',
    'CONTACT': 'contact.html',
    'INITIATIVES': '#'
};

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    for (const [name, url] of Object.entries(links)) {
        const regex = new RegExp(`href="[^"]*"([^>]*>\\s*${name}\\s*<)`, 'g');
        content = content.replace(regex, `href="${url}"$1`);
    }
    fs.writeFileSync(file, content);
});
console.log('Links updated successfully!');
