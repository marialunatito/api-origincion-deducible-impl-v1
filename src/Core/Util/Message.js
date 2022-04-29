class Message{
    constructor({
        titulo = '',
        codigo = '',
        descripcion = '',
        detalleTecnico = ''
    }){
        this.titulo = titulo;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.detalleTecnico = detalleTecnico;
    }
}

module.exports = Message;
