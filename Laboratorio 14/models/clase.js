const clases = [{nombre: "Saber", imagen: "https://www.wallpapertip.com/wmimgs/31-314750_saber-fate-stay-night.jpg"}, {nombre: "Archer", imagen: "https://images.alphacoders.com/945/945556.png"}, {nombre: "Lancer", imagen: "https://theafictionado.files.wordpress.com/2015/01/utw_fate_zero_-_04_h264-720p3a05b4e1-mkv_snapshot_12-18_2014-11-30_15-30-33.jpg"}];

module.exports = class Clase {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, imagen) {
        this.nombre = nombre;
        this.imagen = imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        clases.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return clases;
    }
}