console.log('Js is running');

const http = require('http');
const { text } = require('stream/consumers');
const url = require('url')

const server =  http.createServer((req,res) =>{

    console.log(req.url, 'req===>');
    // res.writeHead(200, {'Content-Type':'text/html'})
// res.end('<h1>Hello Bhai</h1>')

    res.writeHead(200,{'content-type':'text/html'})
    const headerTxt = '<h1 >Server start hai bhai wo bhi nodemon wala.</h1>'
    res.end(  headerTxt + '<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgYy4tINJ3g6FZhcBvnwqcI1Aa0BliSJPWA&s> ')

    // res.end('Server has started')
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('Server is now live');
    
})