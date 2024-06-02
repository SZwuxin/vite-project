import  Database from "bun:sqlite";
import AbstractDAO from "../src/database/dao/AbstractDAO";

class InitDAO extends AbstractDAO {
    
    constructor(){
        super();
    };

    public getDBConnection(): Database {
        return  new Database(this.dbFileName, {create: true});
    }

    initalizeDB() : void{
        using db = this.getDBConnection();
        using query = db.query(`
            CREATE TABLE IF NOT EXISTS story (
                id INTEGER PRIMARY KEY,
                title TEXT NOT NULL,
                body TEXT NOT NULL
            )
        `);

        query.run();
    }
}

const dao = new InitDAO();
dao.initalizeDB();