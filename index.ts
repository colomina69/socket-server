import Server from './clases/server';
import { SERVER_PORT } from './global/enviroment';
import router from './routes/router';
import bodyParser from 'body-parser'
import express from 'express';
import cors from 'cors';



const server=Server.instance;



server.app.use(express.urlencoded({extended:true}));
server.app.use(express.json());

//cors
server.app.use(cors({origin:true,credentials:true}))

server.app.use('/',router)

server.start(()=>{
console.log(`Servidor corriento en puerto ${SERVER_PORT}` );
    
})


