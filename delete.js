var _ = require("lodash");

const fs = require("fs/promises");
const getFile = require("./getfile.js");

const ARCHIVO = "tareas.txt";

//* Usando lodash remove() para eliminar la tarea.
const functionDelete = async ({ id }) => {
	const arrayTareas = await getFile();
	try {
		const tareaEliminada = _.remove(arrayTareas, function (n) {
			return n.id == id;
		});
		if (tareaEliminada.length === 0) {
			console.log(`No se ha encontrado la tarea id: ${id}`);
		} else {
			await fs.writeFile(ARCHIVO, JSON.stringify(arrayTareas, null, 2));
            const [{ titulo, contenido, id }] = tareaEliminada;
			console.log("La tarea ha sido eliminada exitosamente");
			console.log(`- Titulo: ${titulo}`);
			console.log(`- Contenido: ${contenido}`);
			console.log(`- id: ${id}`);
		}
	} catch (err) {
		console.log("Error en functionDelete()");
		console.error(err);
	}
};
module.exports = functionDelete;
