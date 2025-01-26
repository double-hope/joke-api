const fs = require('fs');
const path = require('path');

function getAllJokes(req, res) {
    try {
        const dataFolder = path.join(__dirname, 'data');
        const files = fs.readdirSync(dataFolder);

        const jokes = [];

        for (const file of files) {
            const filePath = path.join(dataFolder, file);
            const fileContent = fs.readFileSync(filePath);

            const joke = JSON.parse(Buffer.from(fileContent));

            jokes.push(joke);
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(jokes));
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
}

module.exports = { getAllJokes }