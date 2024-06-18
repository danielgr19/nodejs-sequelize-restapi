import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Task } from './Task.js'

export const Project = sequelize.define('project',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type:DataTypes.STRING,
    },
    priority: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: true,
});

//Forma de crear la conexión
Project.hasMany(Task, {
    foreignKey: 'projectId', //Campo que recibe el dato
    sourceKey: 'id', //De donde lo obtiene
});

Task.belongsTo(Project, {
    foreingKey: 'projectId',
    targetId: 'id',
})