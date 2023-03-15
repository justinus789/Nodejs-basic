const http = require('http')

const host = 'localhost'
const port = 5000

const requestListener = (request, response) => {
    const { url, method } = request

    response.setHeader('Content-Type', 'application/json')
    response.setHeader('X-Powered-By', 'NodeJS')
    response.statusCode = 200

    if(url === '/'){
        if(method === 'GET') {
            response.statusCode = 200
            response.end(JSON.stringify({
                message: 'INI HOMEPAGE'
            }))
        }else {
            response.statusCode = 400
            response.end(JSON.stringify({
                message: `INI ANY REQUEST ${method}`
            }))

        }

    } else if(url === '/about'){
        if(method === 'GET') {
            response.statusCode = 200
            response.end(JSON.stringify({
                message: "Halo! Ini adalah halaman about"
            }))
            
        } else if(method == "POST"){
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`
                }));
                
            });
        } else {
            response.statusCode = 400
            response.end(JSON.stringify({
                message: `INI ANY REQUEST ${method}` 
            }))
        }

        
    }else{
        response.statusCode = 400
        response.end(JSON.stringify({
            message: `INI ANY REQUEST ${method}` 
        }))  
    }


    // if(method === 'POST') {
    //     var body = []

    //     request.on('data', (chunk) => {
    //         body.push(chunk)
    //     });

    //     request.on('end', () => {
    //         body = Buffer.concat(body).toString()

    //         const { name } = JSON.parse(body)
    //         response.end(JSON.stringify({
    //     message: 
    // })`Hai, ${name}`)
    //     })
    // }

    // if(method === 'PUT') {
    //     response.end(JSON.stringify({
    //     message: 
    // })'INI PUT')
    // }

    // if(method === 'DELETE') {
    //     response.end(JSON.stringify({
    //     message: 
    // })'INI DELETE')
    // }
};
 
const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server ini berjalan pada http://${host}:${port}`)
} )