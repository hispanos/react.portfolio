# Configurando un proyecto de react desde cero CV - GEEK

> Gist: https://gist.github.com/JohnFlorez25/9d9ca894e261cb4ce12fcb903597ea7b

# React #

***¿Qué es?***
Se dice que React es una biblioteca escrita en JavaScript se genera cierta incertidumbre si es en esencia una biblioteca ya se evidencia IoC (Inversión del control) aspecto fundamental al definir un marco de trabajo ya que en muchos aspectos al usar React sabemos que sucede pero no cuando.

React es desarrollada en Facebook para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario. Se utiliza en Facebook para la producción de componentes, e Instagram está escrito enteramente en React. Uno de sus puntos más destacados, es que no sólo se utiliza en el lado del cliente, sino que también se puede representar en el servidor, y trabajar juntos.

React.js está construido en torno a hacer funciones, que toman las actualizaciones de estado de la página y que se traduzcan en una representación virtual de la página resultante. Siempre que React es informado de un cambio de estado, vuelve a ejecutar esas funciones para determinar una nueva representación virtual de la página, a continuación, se traduce automáticamente ese resultado en los cambios del DOM necesarios para reflejar la nueva presentación de la página.

React utiliza el llamado HTML virtual DOM, el cual se renderiza mucho más rapido que el HTML tradiccional ya que no se calculan sus estilos CSS. Cuando el virtual DOM cambia se genera uno nuevo y se calcula las diferencias con el anterior virtual DOM. Por último React genera los cambios pertinentes en el HTML.

***Conceptos***

**DOM**
>El DOM es un API de programación para documentos. Guarda una gran similitud con la estructura del documento al que modeliza. Por ejemplo, considérese esta tabla, tomada de un documento HTML:

```html
      <TABLE>
      <TBODY> 
      <TR> 
      <TD>Shady Grove</TD>
      <TD>Aeolian</TD> 
      </TR> 
      <TR>
      <TD>Over the River, Charlie</TD>        
      <TD>Dorian</TD> 
      </TR> 
      </TBODY>
      </TABLE>
    
```
![alt-text](https://www.w3.org/2002/07/table.png)

**Componentes**
>Un componente en react es un pedazo de nuestra vista por ejemplo la navbar esta se encapsula en un componente y esto te da la capacidad de poder reutilizarlo las veces que sea necesraio sin necesidad de volver a escribir código.

## **Mi primer react-app**
>Importante: Recuerda que debes tener instalado NodeJs para que puedas crear tu primera app react, para hacer uso del comando npm, React también se puede instalar haciendo uso de `npx`o `yarm`
>
Para crear nuestra primera aplicación en react debemos hacer uso de `create-react-app` lo primero que debemos hacer es instalar create-react-app de manera global:

`npm install -g create-react-app``

Una vez instalado podemos hacer uso de create-react-app para crear el directorio/carpeta donde va existir nuestra app react:

`npm create-react-app mi-app-react`

Nos ubicamos en la carpeta creada:

`cd mi-app-react`

y copiamos la siguiente línea de código para correr nuestra primera app en react!!

`npm start`

## Profundizando sobre nuestros componentes

Todos los elementos de nuestro proyecto son componentes; átomos que en conjunto se pueden convertir en bloques o moléculas y así sucesivamente hasta construir el total de nuestra aplicación. Gracias a esto conseguimos una aplicación donde los cambios y las nuevas características son fáciles y rápidos de implementar.

## Usando Estilos en nuestro proyecto

React nos permite estilizar nuestros componentes con estilos en línea, sin embargo, este método tiene algunas limitaciones: debemos usar camelCase en vez de la sintaxis normal con guiones (por ejemplo, font-size lo declaramos como fontSize), no podemos usar la propiedad :hover o ningún otro pseudo-selector, no podemos estilizar clases ni usar la herencia de componentes, no podemos definir animaciones, entre otras limitaciones.

Afortunadamente, herramientas como styled-components nos ayudan a crear nuestros estilos en componentes de React con JavaScript sin perder las características de CSS, de hecho, conseguimos algunos beneficios extra al juntar ambos lenguajes: CSS y JavaScript.

Instalación de styled-components: `npm install styled-components --save`

Más información sobre styled-components en: https://www.styled-components.com

## Trabajando con Styled-components

Una de las características de styled-components es que podemos definir los estilos de nuestros elementos sin preocuparnos por los nombres de las clases, styled-components lo hace por nosotros, además, se encarga de que nunca se repitan clases entre componentes diferentes, así nos aseguramos de que nuestros estilos se aplican sólo a los elementos que nosotros necesitamos y no tenemos errores de estilos en nuestra aplicación.

Puedes buscar tus fuentes favoritas en: https://fonts.google.com
