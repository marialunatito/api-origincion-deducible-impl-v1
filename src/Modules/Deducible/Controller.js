const Service = require('./Service');
const Message = require('../../Core/Util/Message');
const Constant = require('../../Core/Constants');
const Response = require('../../Core/Util/Response');
const ResponseError = require('../../Core/Util/ResponseError');

class Dedudible {
    static async procesar(event) {
        let { payload } = event.body;
        let result;
        try {
            result = await Service.procesarDeducible(payload);
        } catch (error) {
            let mensaje = new Message({
                titulo: Constant.SERVER_ERROR.titulo,
                codigo: Constant.SERVER_ERROR.codigo,
                descripcion: Constant.SERVER_ERROR.descripcion,
                detalleTecnico: error.message
            });
            result = new ResponseError({mensaje});
        }
        return Response.obtenerFormatoRespuesta(result);
    }
}

module.exports = Dedudible;
