# Webapp-Logistica-AngularJS

Esse Webapp foi criado para pode testar as REST APIs criadas para esse teste:

https://github.com/lsneucamp/API-NodeJS-Express

https://github.com/lsneucamp/API-SpringBoot

Esse webapp está bem simplificado, não consegui a tempo agregar mais conteúdo, porem as funções básicas do teste estão presentes e podem ser testadas através desta aplicação. 


***

## Configuração Basicas

Para que este Webapp possa usar a API é necessario configurar o arquivo config.js que fica na pasta especificada abaixo:
 
```
Logistics-Webapp/
  |- karma/
  |- src/
  |  |- app/
  |  |  |- common/
  |  |  |  |- config/
  |  |  |  |  |- config.js
```
```javascript
angular.module("app.common.config",[])
    .constant("errors",{'notFound':404,'forbidden':403,'badRequest':400,'unauthorized':401,'serviceNotAvailable':0})
    .constant("api",
        {
            "url": "http://localhost:3000/api/v1"           
        });
```
Caso seja necessario, você terá que mudar o campo *"url": "http://localhost:3000/api/v1"* para apontar para o endereço do servidor que você subiu antes de executar as instruções abaixo.


## Instruções para executar o projeto

Instale Node.js e ae:

```sh
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt watch
```

Finalmente é so abrir `file:///caminho/para/o/projeto/build/index.html` no seu navegador.



### Organização do Projeto

```
Logistics-Webapp/
  |- karma/
  |- src/
  |  |- app/
  |  |  |- <logica do app>
  |  |- assets/
  |  |  |- <arquivos staticos>
  |  |- less/
  |  |  |- main.less
  |- vendor/
  |- .bowerrc
  |- bower.json
  |- build.config.js
  |- Gruntfile.js
  |- module.prefix
  |- module.suffix
  |- package.json
```
