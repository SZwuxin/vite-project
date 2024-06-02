import { Database } from "bun:sqlite";
import type { Story } from "../types/Story";
import AbstractDAO from "./AbstractDAO";

export default class StoryDAO extends AbstractDAO{
    constructor(){
        super();
    }

    public getAllStories() : Story[] {
        using db = this.getDBConnection();
        using query = db.query<Story, any>("select * from story;");
        const results = query.all();
        return results;
    }

    public getStory(id : number) : Story | null{
        using db = this.getDBConnection();
        using query = db.query<Story, number>("select * from story where id=:id;");
        const result = query.get(id);
        
        return result;
    }

    public saveStory(newStory : Story) : void {
        using db = this.getDBConnection();
        using query = db.query<Story, Story>("insert into story (title, body) values (:title, :body)");
        query.run(newStory);
    }
}