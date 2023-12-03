/**
  no angular, as variaveis de ambiente são uma maneira de armazenar informações confidenciais
  como senhas e chaves de api, sem expo-las no codigo fonte, elas são usadas para melhorar a s
  segurança e a manutenção das aplicações
  
  as variaveis de ambiente são definidas em um arquivo chamado environment.ts, o arquivo envi-
  ronment.ts é dividido em duas partes

  - environment.prod.ts: este arquivo contém as variaveis de ambiente para o ambiente de produção
  - environment.dev.ts: este arquivo contém as variaveis de ambiente para o ambiente de desenvolv-
  imento

  vantagens das variaveis de ambiente

  - melhoram a segurança das aplicações, pois as informações confidenciais não são expostas no codigo
  fonte

  - facilitam a manutenção das aplicações, pois as variaveis de ambiente podem ser alteradas sem modificar
  o codigo fonte 

  desvantagens das variaveis de embiente

  - podem ser esquecidas ou perdidas, o que pode levar a problemas de segurança ou de manutenção

  Quando usar variaveis de ambiente
  
  As vaiaveis de ambiente devem ser usadas para armazenar informações confidencias, como senhas e chaves 
  api, elas também podem ser usadas para armazenar informações que podem variar de acordo com o ambiente, 
  como url do servidor de backend

  aqui estão alguns exmplos de quando você pode usar variaveis de ambiente

  - para armazenar a senha da base de dados
  - para armazenar a chave da api de um serviço de terceiro
  - para armazenar o rul do servidor de backend
  - para armazenar a regiao do gcp

 */

export const environment = {
  env: "prod"
};
