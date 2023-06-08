const fs = require("fs/promises");
const ARCHIVO = "tareas.txt";

//* Función getFile para todas las instancias de fs.readFile junto con try catch... no se
//* esta es la forma correcta de usar try catch, pero hace su pega
const getFile = async () => {
	try {
		const tareas = await fs.readFile(ARCHIVO);
		return (arrayTareas = JSON.parse(tareas));
	} catch (err) {
		console.log(`Error en getFile()`);
		console.error(err);
	}
};
module.exports = getFile;
