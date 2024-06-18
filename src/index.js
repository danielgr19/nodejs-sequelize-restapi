import app from './app.js';
import { sequelize } from './database/database.js';

//import './models/Project.js';
//import './models/Task.js';

async function main(){
    try{
        await sequelize.sync({force: false})
        app.listen(4000);
        console.log("Server up!", 4000)
    } catch (error) {
        console.error("Unable to connect to database: ", error)
    }
}

main();