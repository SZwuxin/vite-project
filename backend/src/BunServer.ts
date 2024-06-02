import type { Server } from "bun";
import handleStoryRequest from "./api/StoryApi"; 

export default class BunServer {
    port: number;
    server: Server | null = null;
    constructor(port: number){
        this.port = port;
    }

    public start() {
        console.log("Starting server");
        this.server = Bun.serve({
            fetch: (req, server) => {
                return this.handleRequest(req);
            },
            port: this.port
        });
    }

    private async handleRequest(req : Request): Promise<Response> {
        const url = new URL(req.url);
        const jsonData = await req.json();
        switch(url.pathname.split("/")[1]){
            case "story":
                return handleStoryRequest(req, url.pathname, jsonData);
            default:
                return new Response("Backend Test");
        }
    }
}