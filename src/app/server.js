import { nanoid } from "@reduxjs/toolkit";
import { createServer, Model } from "miragejs";

createServer({
    models: {
        user: Model
    },
    routes() {
        this.namespace = 'api'
        this.timing = 2000

        this.get("/users", (schema, request) => {
            return schema.users.all()
        })
    },
    seeds(server) {
        server.create("user", {id: '1', name: "Gasasira"}),
        server.create("user", {id: '2', name: "Gashema"}),
        server.create("user", {id: '3', name: "Shema"}),
        server.create("user", {id: '4', name: "Rugamba"})
    }
})