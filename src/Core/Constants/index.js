module.exports = {
    OK_STATUS: { titulo: 'Operación Exitosa', codigo: 10100, descripcion: 'Operación Exitosa' },
    SERVER_ERROR: { titulo: 'Lo sentimos, ocurrió un error', codigo: 10101, descripcion: 'No pudimos extraer el deducible. Inténtalo nuevamente.' },
    NOT_FOUND: { titulo: 'No obtuvimos resultados.', codigo: 40001, descripcion: 'Recurso no encontrado.' },
    TEXT_TALLER_REGEX: /taller[\w\s%.,á-ú]+(US\$|S\/.)\s*\d+(.\d+)?|(marca[\w\s.,:á-ú]+)*\d+(.\d+)?%[\w\s.,á-ú]+(US\$|S\/.)\s*\d+[\w\s.,á-ú(]+taller[\w \t.,á-ú)]+(\n|$)/gi,
    TIPO_DEFECTO: 'NO TIPO',
    TALLER_DEFECTO: 'NO TALLER',
    MARCA_DEFECTO: 'NO MARCA',
    MONEDA_DOLARES: 'USD',
    MONEDA_SOLES: 'PEN',
};
