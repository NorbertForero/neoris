#Prueba técnica NOERIS, Punto 2

Pruebas de api automatizadas con el programa Postman. La colección verifica cada uno de los status code y el body de los endpoints. 
Además de que genera un reporte html con la libreria de reportes de newman.

Para visualizar la colección, importarla en Postman.

Para ejecutar newman y generar el reporte por favor correr. 

- sudo npm install -g newman 
- sudo npm install -g newman-reporter-html   
- newman run "Prueba Tecnica punto apis.postman_collection.json" -r html