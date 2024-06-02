import  Database from "bun:sqlite";

export default abstract class AbstractDAO {
    dbFileName = "mydb.sqllite";
    constructor() {
    }

    public getDBConnection() : Database{
        return new Database(this.dbFileName);
    }

}