const fs = require("fs/promises");
const getFile = require("./getfile.js");
const { v4: uuidv4 } = require("uuid");


const ARCHIVO = "tareas.txt";

//* Pensaba hacer un try catch para cada instancia que se llame al "fs", pero creo que ya seria
//* exagerado, dado que con lo que hay es suficiente para ubicar el error
const functionCreate = async ({ titulo, contenido }) => {
	const id = uuidv4().slice(0, 8);
	const nuevaTarea = { id: id, titulo: titulo, contenido: contenido };
	const arrayTareas = await getFile();
	try {
		arrayTareas.push(nuevaTarea);
		await fs.writeFile(ARCHIVO, JSON.stringify(arrayTareas, null, 2));
		console.log("Nueva tarea agregada");
		console.log(`- Titulo: ${titulo}`);
		console.log(`- Contenido: ${contenido}`);
		console.log(`- id: ${id}`);
		console.log("");
	} catch (err) {
		console.log("Error en functionCreate()");
		console.error(err);
	}
};
module.exports = functionCreate;