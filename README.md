# Projeto de Teste Cypress - Validação da API ViaCep

## Descrição
Este projeto utiliza o framework de testes Cypress para validar a API do ViaCep. Ele realiza várias validações, incluindo o status da API, a quantidade de campos e a validação de schema.

## Pré-requisitos
Antes de executar os testes, certifique-se de que você tenha o seguinte instalado:

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)

## Configuração
1. Clone este repositório em seu computador:

   ```shell
   git clone https://github.com/TiagoH-Alves/AutomacaoApi-Crypress
   ```

2. Navegue até o diretório do projeto:

   ```shell
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```shell
   npm install
   ```

4. Abra o projeto no Cypress:

   ```shell
   npx cypress open
   ```

## Executando os Testes
1. No Cypress, clique no arquivo de teste que deseja executar, por exemplo, `validacao-api-viacep.spec.js`.

2. Aguarde até que os testes sejam executados e os resultados sejam exibidos no Cypress Runner.

## Testes Realizados
O projeto contém os seguintes testes:

- **Teste de Status da API:** Verifica se a API do ViaCep está respondendo com um status HTTP 200 (OK).

- **Teste de Quantidade de Campos:** Valida se a resposta da API contém os campos esperados, como "cep", "logradouro", "bairro", etc.

- **Teste de Validação de Schema:** Compara a resposta da API com um schema predefinido para garantir que os campos correspondam à estrutura esperada.

## Customização
Você pode personalizar os testes, adicionar novos cenários de teste ou ajustar os cenários existentes de acordo com as necessidades do seu projeto. Os testes são escritos em JavaScript e estão localizados nos arquivos `.spec.js` no diretório `cypress/integration`.

## Contribuição
Sinta-se à vontade para contribuir com melhorias ou correções para este projeto. Basta abrir uma solicitação de pull.

## Licença
Este projeto está licenciado sob a MIT License. Consulte o arquivo LICENSE para obter mais detalhes.

Espero que este README seja útil para o seu projeto de teste Cypress que valida a API do ViaCep. Certifique-se de ajustar as instruções e os detalhes para atender às especificidades do seu projeto e à sua organização.