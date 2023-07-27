import Server from "./models/Server.js";
import dotenv from "dotenv";
import rolesRouter from "./routes/roles.routes.js";

dotenv.config();
const server = new Server();

server.listen();
server.routes(
    ['/api/roles', rolesRouter]
)
