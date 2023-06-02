const http = require("http");
const PORT = 3001;
const data = require("./utils/data")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")) {
        // console.log(req.url.split("/").pop());
        const id = req.url.split("/").pop()
        console.log(id);
        // const id = req.url.split("/").at(-1)
        // const id = req.url.split("/")[3]
        const character = data.find((character) => {
            return character.id === +id
        })

        return res.writeHead(200, {"Content-type": "application(json"})
        .end(JSON.stringify(character))

    }
}).listen(PORT, "Localhost");