const { loadFeature, defineFeature } = require('jest-cucumber');
const { procesar } = require('../../../src/Modules/Deducible/Controller');
const feature = loadFeature('../Deducible.feature', { loadRelativePath: true, errors: true });

defineFeature(feature, test => {
    test('Póliza con deducible texto plano', ({
      given,
      when,
      then
    }) => {
        let event;
        let response;
        given(/^la póliza tiene un deducible en forma del (.*)$/, (textoPlano) => {
            const inputMock = require(`../input/${textoPlano}.js`);
            event = { body: inputMock };
        });
        when('ejecutamos el conversor de deducible', async () => {
            response = await procesar(event);
        });
    
        then(/^obtenemos la parametrización del deducible en (.*)$/, (respuesta) => {
            const respuestaMock = require(`../output/${respuesta}.js`);
            expect(response).toEqual(respuestaMock);
        });
    });
    test('Póliza con deducible texto plano con errores', ({
        given,
        when,
        then
      }) => {
        let event;
        let response;
        given(/^la póliza tiene un deducible en forma del (.*)$/, (textoPlanoError) => {
            const inputMock = require(`../input/${textoPlanoError}.js`);
            event = { body: inputMock };
        });
    
        when('ejecutamos el conversor de deducible', async () => {
            response = await procesar(event);
        });
    
        then(/^obtenemos un error por la parametrización del deducible en (.*)$/, (respuestaError) => {
            const respuestaMockError = require(`../output/${respuestaError}.js`);
            expect(response).toEqual(respuestaMockError);
        });
      });
  });
