const jsonServer = require('json-server');
const server= jsonServer.create();
const router=jsonServer.router('db.json');
const middleWares=jsonServer.defaults();
const  PORT= process.env.PORT||3000;
server.use(middleWares);
server.use(jsonServer.bodyParser); // Add this line to enable body parsing
server.use(router);
server.listen(PORT,()=>{
    console.log(`Server is Running For FlavorFind App... ${PORT}`);
})