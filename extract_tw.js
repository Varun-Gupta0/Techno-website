const fs = require('fs');
let index = fs.readFileSync('index.html', 'utf8');
let match = index.match(/tailwind\.config = (\{[\s\S]+?\})\s*<\/script>/);
if (match) {
    let configStr = match[1];
    let fileContent = `/** @type {import('tailwindcss').Config} */\nmodule.exports = ${configStr};\nmodule.exports.plugins = [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')];\nmodule.exports.content = ["./*.html"];`;
    fs.writeFileSync('tailwind.config.js', fileContent);
    console.log('tailwind.config.js created.');
}
