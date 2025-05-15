const http = require('http');

const server = http.createServer((req, res) => {

    console.log("incoming re");

    if (req.method === "POST") {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            const user = decodeURIComponent(body.split('=')[1]);
            res.setHeader('Content-Type', 'text/html');
            res.end('<p>hurray</p>' + user + '<h1> nice work</h1>');
        });

    } else {
        res.setHeader('Content-Type', 'text/html');
        res.end('<form method="POST"> <input type="text" name="username" /> <button type="submit">creat user</button> </form>');
    }

});

server.listen(5000);
