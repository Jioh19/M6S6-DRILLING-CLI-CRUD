const fs = require("fs/promises");
const getFile = require("./getfile.js");

const ARCHIVO = "tareas.txt";

//* Se agrego validacion de ID según el índice retornado por la función findIndex()
const functionUpdate = async ({ id, titulo, contenido }) => {
	const arrayTareas = await getFile();
	try {
		const tareaActual = arrayTareas.findIndex((tarea) => tarea.id === id);
		if (tareaActual > 0) {
			const tituloNuevo = titulo ? titulo : arrayTareas[tareaActual].titulo;
			const contenidoNuevo = contenido ? contenido : arrayTareas[tareaActual].contenido;
			arrayTareas[tareaActual].titulo = tituloNuevo;
			arrayTareas[tareaActual].contenido = contenidoNuevo;
			await fs.writeFile(ARCHIVO, JSON.stringify(arrayTareas, null, 2));
			console.log("Tu tarea ha sido actualizada");
            console.log(`- Titulo: ${tituloNuevo}`);
			console.log(`- Contenido: ${contenidoNuevo}`);
			console.log(`- id: ${id}`);
		} else {
			console.log(`No se ha encontrado la tarea id: ${id}`);
		}
	} catch (err) {
		console.log("Error en functionUpdate()");
		console.error(err);
	}
};
module.exports = functionUpdate