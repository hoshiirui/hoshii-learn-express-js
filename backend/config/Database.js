import { Sequelize } from "sequelize";

const db = new Sequelize('learnexpdb', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql'
})

export default db;