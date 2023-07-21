import dotenv from "dotenv"

dotenv.config()

import Server from "./server/Server.js"

const server = new Server()

server.listener()

