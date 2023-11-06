import chai from 'chai';
import chaiJsonSchema from 'chai-json-schema';

const API = Cypress.env('api_viacep')
chai.use(chaiJsonSchema);

describe('Validação de API', () => {
  let schema = {
    required: ['cep', 'logradouro', 'complemento', 'bairro', 'localidade', 'uf', 'ibge', 'gia', 'ddd', 'siafi'],
    properties: {
      cep: {
        type: 'string'
      },
      logradouro: {
        type: 'string'
      },
      complemento: {
        type: 'string'
      },
      bairro: {
        type: 'string'
      },
      localidade: {
        type: 'string'
      },
      uf: {
        type: 'string'
      },
      ibge: {
        type: 'string'
      },
      gia: {
        type: 'string'
      },
      ddd: {
        type: 'string'
      },
      siafi: {
        type: 'string'
      }
    }
  };

  it('Verifica o Status Code da API', () => {
    cy.request({
      method: 'GET',
      url: API,
    }).then((response) => {
      // Verifica o Status Code
      expect(response.status).to.eq(200);
    });
  });

  it('Deve conter os campos obrigatórios', () => {
    cy.request({
      method: 'GET',
      url: 'https://viacep.com.br/ws/08253000/json/',
    }).then((response) => {
      // Verifica se os campos específicos estão presentes
      chai.expect(response.body).to.be.jsonSchema(schema);
      expect(response.body).to.have.property('cep');
      expect(response.body).to.have.property('logradouro');
      expect(response.body).to.have.property('complemento');
      expect(response.body).to.have.property('bairro');
      expect(response.body).to.have.property('localidade');
      expect(response.body).to.have.property('uf');
      expect(response.body).to.have.property('ibge');
      expect(response.body).to.have.property('gia');
      expect(response.body).to.have.property('ddd');
      expect(response.body).to.have.property('siafi');
      
    });
  });

  it('Deve conter a quantidade correta de campos', () => {
    cy.request({
      method: 'GET',
      url: 'https://viacep.com.br/ws/08253000/json/',
    }).then((response) => {
      // Verifica a quantidade de campos
      const numberOfFields = Object.keys(response.body).length;
      expect(numberOfFields).to.equal(10);
    });
  });
});
