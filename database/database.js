import { openDatabase } from "react-native-sqlite-storage";

const errorcb = () => {
    console.log("error");
}

const successcb = () => {
    console.log("success");
}

class Database {
    constructor() {
        this.db = openDatabase({name: "database.db", location: "default"});
    }

    /**
     * Inserts a user into the users table. 
     * Handles if user's email is already registered. 
     * 
     * @param fname - First name of the user. 
     * @param lname - Last name of the user. 
     * @param pass - User's password. 
     * 
     * @return 
     */
    async insertUser(fname, lname, email, pass) {

    }
}

export const database = new Database(); 
