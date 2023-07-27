import express from "express";
import { connectDatabase } from "../database/config.js";

class Server {
    constructor(){
        this.port = process.env.PORT;
        this.app = express();
        this.middlewares();
        this.connectDatabase();
    }

    middlewares(){
        this.app.use(express.json());
    }

    async connectDatabase(){
        await connectDatabase();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

    routes(roles){
        this.app.use(...roles);
    }
}

export default Server;