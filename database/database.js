import * as SQLite from "expo-sqlite";
import sqlstring from "sqlstring";

//********** HANDLE REGISTRATION **********
/**
 * Redirects to HomeScreen. 
 * 
 * @param navigation - A navigation object for navigating between screens. 
 * @param fname - The user's first name. 
 */
const handleRegisterSuccess = (navigation, name) => {
    navigation.navigate("HomeScreen", {name});
}

/**
 * Checks if error message indicates violation of 
 * UNIQUE constraint.
 * 
 * @param error - An error message from a failed transaction.
 * @param setWarning - Callback function to set warning message on SignUpScreen.
 */
const handleRegisterError = (error, setWarning) => {
    if (error.message === "Error code 19: UNIQUE constraint failed: users.email") {
        setWarning("This email has already been registered");
    }
}

//********** HANDLE LOGIN **********
/**
 * Checks if provided password matches actual password in users table. 
 * Navigates to HomeScreen if passwords match. 
 * 
 * @param result - Contains user's actual hashed password.
 * @param fname - A Promise that resolves to the user's first name. 
 * @param pass - A Promise that resolves to the hashed password input. 
 * @param setWarning - Callback function to set warning message on LoginScreen.
 * @param navigation - Navigation object for navigating betweeen screens.
 */
const handleGetPassSuccess = (result, fname, pass, setWarning, navigation) => {
    let actual;
    if (result.rows._array.length > 0) {
        actual = result.rows._array[0].pass;
    }
    Promise.all([pass, fname]).then(([resPass, resFname]) => {
        const name = resFname;
        if (actual === resPass) {
            navigation.navigate("HomeScreen", {name}); 
        }
        else {
            setWarning("Incorrect password");
        }
    }).catch(() => {
        setWarning("That email is not registered");
    });
}

class Database {
    constructor() {
        this.db = SQLite.openDatabase("./database.db");
        this.db.transaction(
            (tx) => {
                tx.executeSql(
                    "CREATE TABLE IF NOT EXISTS users (email TEXT UNIQUE, fname TEXT, lname TEXT, pass TEXT)"
                );
            }
        );
    }

    /**
     * Inserts a user into the users table. 
     * 
     * @param fname - The first name of the user. 
     * @param lname - The last name of the user. 
     * @param email - The email of the user. 
     * @param pass - A Promise that resolves to the user's hashed password.
     * @param setWarning - Callback function that sets the warning message in SignUpScreen.
     */
    async insertUser(fname, lname, email, pass, setWarning, navigation) {
        const query = "INSERT INTO users (email, fname, lname, pass) values (?, ?, ?, ?)";
        pass.then((res) => {
            this.db.transaction(
                (tx) => {
                    tx.executeSql(
                        query,
                        [email, fname, lname, res]
                    );
                },
                (error) => handleRegisterError(error, setWarning),
                () => handleRegisterSuccess(navigation, fname)
            )}
        );
    }

    /**
     * Gets a user's first name based on their email.
     * 
     * @param email - The user's email. 
     * @returns A Promise that resolves to the user's first name. 
     */
    async getName(email) {
        const query = "SELECT fname FROM users WHERE email = ?";
        return new Promise((resolve, reject) =>
            this.db.transaction(
                (tx) => {
                    tx.executeSql(
                        query,
                        [email],
                        (_, result) => {
                            if (result.rows._array.length > 0) {
                                resolve(result.rows._array[0].fname)
                            }
                            else {
                                reject(new Error("Email not found"))
                            }
                        },
                        (_, error) => reject(error)
                    );
                }
            )
        );
    }

    /**
     * Handles login of a user. 
     * 
     * @param email - The user's email. 
     * @param pass - A Promise that resolves to the user's hashed password.
     * @param setWarning - Sets warning message.
     * @param navigation - Navigation object for navigating between screens.
     */
    async loginUser(email, pass, setWarning, navigation) {
        const query = "SELECT pass FROM users WHERE email = ?";
        const fname = this.getName(email);
        this.db.transaction(
            (tx) => {
                tx.executeSql(
                    query,
                    [email],
                    (_, result) => handleGetPassSuccess(result, fname, pass, setWarning, navigation),
                    (_, error) => console.log(error)
                )
            },
        );
    }
}

const database = new Database(); 
export { database };