const { TIPO_DEFECTO, TALLER_DEFECTO, MARCA_DEFECTO, MONEDA_DOLARES, MONEDA_SOLES } = require("../../Core/Constants");

module.exports = {
    extraerDeducible(textoTaller) {
      const textoDeducible = textoTaller.match(/\d+(.\d+)?%/g)[0];
      return textoDeducible ? parseInt(textoDeducible.replace('%', '')) : 0;
    },
    extraerCopago(textoTaller) {
      const textoCopago = textoTaller.match(/(US\$|S\/.)\s*\d+(.\d+)?/gi)[0];
      return textoCopago ? parseInt(textoCopago.replace(/(US\$|S\/.)\s*/gi, '')) : 0;
    },
    extraerTipoTaller(textoTaller) {
      const tipoTaller = textoTaller.match(/\bmultimarca\b/gi);
      let tipo = tipoTaller ? (tipoTaller[0][0].toUpperCase() + tipoTaller[0].slice(1)) : (TIPO_DEFECTO);
      return tipo;
    },
    extraerTaller(textoTaller) {
      const filtroTaller = textoTaller.match(/(otro(s)? )?taller[\wá-ú\t, ]+(\d+(.\d+)?%|\n|$|\)|\.)/gi)[0];
      const palabraFiltroEncontrada = filtroTaller.search(/preferencia|especial|afiliado|otro/gi);
      let taller = filtroTaller.replace(/(\s*taller(es)?\s+|,\s+\d+(.\d+)?%)/gi, '');
      return palabraFiltroEncontrada === -1 ? taller.replace(/(\s*taller(es)?\s+|,\s+\d+(.\d+)?%)/gi, '').trimEnd() : TALLER_DEFECTO;
    },
    extraerMarca(textoTaller) {
      const textoMarca = textoTaller.match(/marca\s+[\wá-ú, ]+:/gi);
      return textoMarca ? textoMarca[0].replace(/(marca\s*|:)/gi, '').toUpperCase() : MARCA_DEFECTO;
    },
    extraerMoneda(textoTaller) {
      const textoMoneda = textoTaller.match(/US\$|S\/./gi);
      return textoMoneda ? textoMoneda[0].replace(/US\$/gi, MONEDA_DOLARES).replace(/S\/./gi, MONEDA_SOLES).toUpperCase() : MONEDA_DOLARES;
    }
  };
