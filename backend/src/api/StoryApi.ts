import StoryDAO from "../database/dao/StoryDAO";
import type { Story } from "../database/types/Story";


export default function handleStoryRequest(req: Request, path : string, jsonData : any) : Response {
    switch(path){
        case "/story/all":
            return handleGetAllStories();
        case "/story/save":
            return handleSaveStory(req, jsonData);
        default:
            return new Response("Unrecognized Story Request")
    }

    
}

function handleGetAllStories() : Response {
    const dao = new StoryDAO();
    const allStories = dao.getAllStories();

    return new Response(JSON.stringify(allStories));
}

function handleSaveStory(req : Request, jsonData : Story) : Response {
    if (req.method != "GET"){
        let msg = "Save must be called with POST method";
        return new Response(msg, {
            status: 405,
            statusText: msg
        });
    }

    const dao = new StoryDAO();
    let newStory = dao.saveStory(jsonData);
    return new Response();
}