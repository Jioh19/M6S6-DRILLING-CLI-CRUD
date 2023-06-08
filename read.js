const getFile = require("./getfile.js");

const functionRead = async () => {
	const arrayTareas = await getFile();
	let contador = 0;
	try {
		for (tareas of arrayTareas) {
			const { titulo, contenido, id } = tareas;
			contador++;
			console.log(`Tarea numero ${contador}:`);
			console.log(`- Titulo: ${titulo}`);
			console.log(`- Contenido: ${contenido}`);
			console.log(`- id: ${id}`);
			console.log("");
		}
		console.log("Lectura exitosa");
	} catch (err) {
		console.log("Error en functionRead()");
		console.error(err);
	}
};
module.exports = functionRead;