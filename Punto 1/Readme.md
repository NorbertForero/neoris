#Prueba técnica NOERIS, Punto 1

Para la programación de las pruebas E2E de este proyecto se utilizo el patron de diseño page object model.

Antes de iniciar con las pruebas por favor ejecutar los siguientes comandos en la terminal.
```sh 
npm install -D cypress
```
```sh 
npm i --save-dev cypress-mochawesome-reporter 
```

Para iniciar con la ejecucion de las pruebas ejecutar el siguiente comando (ejecuta las pruebas y crea un reporte con el resultado).
```sh 
npm run cypress-report
```

Para visualizar el reporte generado, abrir el archivo generado en la ruta "cypress/reports/html/idex.html" en el navegador de preferencia, adicional el video con las pruebas ejecutadas se encuentra en la ruta "cypress/videos/Tests.spec.js.mp4".