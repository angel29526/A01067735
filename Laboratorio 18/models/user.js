const db = require('../util/database');      
const bcrypt = require('bcryptjs');

module.exports = class User {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, username, password) {
        this.nombre = nombre;
        this.username = username;
        this.password = password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12)
            .then((password_encriptado) => {
                return db.execute(
                    'INSERT INTO usuarios (nombre, username, password) VALUES (?, ?, ?)',
                    [this.nombre, this.username, password_encriptado]
                );
            }).catch(err => console.log(err));
    }

    static fetchOne(username, password) {
        return db.execute('SELECT * FROM usuarios WHERE username=?', [username]);               
    }

}