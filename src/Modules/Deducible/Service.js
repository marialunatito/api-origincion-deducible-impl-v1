const { TEXT_TALLER_REGEX } = require('../../Core/Constants');
const ServiceDao = require('./Service.dao');

module.exports.procesarDeducible = async (payload) => {
  const { text } = payload;
  const response = [];

  const textosTalleres = text.match(TEXT_TALLER_REGEX);

  for (const texto of textosTalleres) {
    const deducible = ServiceDao.extraerDeducible(texto);
    const copago = ServiceDao.extraerCopago(texto);
    const tipo = ServiceDao.extraerTipoTaller(texto);
    const taller = ServiceDao.extraerTaller(texto);
    const marca = ServiceDao.extraerMarca(texto);
    const moneda = ServiceDao.extraerMoneda(texto);

    const extraer = {
      deducible,
      copago,
      moneda,
      tipo,
      marca,
      taller
    };
    response.push(extraer);
  }
  return response;
};
