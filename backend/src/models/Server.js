import express from "express";
import { connectDatabase } from "../database/config.js";
import allRoutes from "../routes/index.js";
import cors from "cors";
import { createEmpresa, createRoles, createInitialAdmin } from "../libs/initialSetUp.js";

class Server {
    constructor(){
        this.port = process.env.PORT;
        this.app = express();
        this.routesV1 = '/api/v1';
        this.initialSetUp();
        this.middlewares();
        this.connectDatabase();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    async initialSetUp(){
        await Promise.all([
            createEmpresa(),
            createRoles(),
            createInitialAdmin()
        ])
    }

    async connectDatabase(){
        await connectDatabase();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

    routes(){
        this.app.use(this.routesV1, allRoutes);
    }
}

export default Server;