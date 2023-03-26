const Sequelize  = require('sequelize');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize('pokeapi', 'root', 'tiger', {
  host: 'localhost',
  dialect: 'mysql'
});

// Definición del modelo de datos
const Datos = sequelize.define('datos', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  pokeid:{
    type: Sequelize.STRING
  },
  nombre: {
    type: Sequelize.STRING
  },
  peso: {
    type: Sequelize.STRING
  },
  imagen: {
    type: Sequelize.STRING
  },
  tipo: {
    type: Sequelize.STRING
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
});

// Función para guardar los datos en la tabla "datos"
function guardarDatos(id, nombre, peso, imagen, tipo) {
  // Sincronizar el modelo de datos con la base de datos
  sequelize.sync()
    .then(() => {
      // Crear un nuevo registro en la tabla "datos"
      Datos.create({
        nombre: nombre,
        peso: peso,
        imagen: imagen,
        tipo: tipo,
        pokeid: id
      })
        .then((nuevoDato) => {
          console.log('Se ha creado un nuevo registro:');
          console.log(nuevoDato.toJSON());
        })
        .catch((error) => {
          console.error('Error al crear un nuevo registro:', error);
        });
    })
    .catch((error) => {
      console.error('Error al sincronizar el modelo de datos:', error);
    });
}

// module.exports = { guardarDatos };


// Exportar la función para que pueda ser utilizada en otros archivos
module.exports = {
    guardarDatos: guardarDatos
  };