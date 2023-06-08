const yargs = require("yargs");

var _ = require("lodash");

const fs = require("fs/promises");
const functionDelete = require("./delete.js");
const functionRead = require("./read.js");
const functionUpdate = require("./update.js");
const functionCreate = require("./create.js");

const ARCHIVO = "tareas.txt";

const createConfig = {
	titulo: {
		describe: "El nombre de la tarea a realizar",
		alias: "t",
		demandOption: true,
	},
	contenido: {
		describe: "Descripción de la tarea a realizar",
		alias: "c",
		demandOption: true,
	},
};

const updateConfig = {
	titulo: {
		describe: "Nuevo nombre de la tarea a realizar",
		alias: "t",
	},
	contenido: {
		describe: "Nueva descripción de la tarea a realizar",
		alias: "c",
	},
	id: {
		describe: "El id de la tarea a actualizar o modificar",
		alias: "i",
		demandOption: true,
	},
};

const deleteConfig = {
	id: {
		describe: "El id o identificador de la tarea a eliminar",
		alias: "d",
		demandOption: true,
	},
};



const args = yargs
	.command("create", "Crear una nueva tarea", createConfig, (argv) => functionCreate(argv))
	.command("read", "Mostrar todas las tareas", {}, () => functionRead())
	.command("update", "Actualizar o modificar una tarea", updateConfig, (argv) => functionUpdate(argv))
	.command("delete", "Eliminar una tarea", deleteConfig, (argv) => functionDelete(argv))
	.help().argv;
