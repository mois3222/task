# task

Aquí, documentare todos los ejercicios de pensamiento lógico en JavaScript.

Explicaciones.

(1). Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

El problema consiste en que debo construir una función que cuente el número de caracteres de una cadena de texto, sin embargo hay la posibilidad que también se necesite contar el número de caracteres de un objeto por ello, cree la siguiente función que tolera tango cadenas de textos (String) como con objetos.

o characteresCount: Nombre de la función.
o element: El elemento es un parámetro que recibe tanto objetos como string.
o Es un arrow function.
o Object.entries(element): entries en especifico porque Object es un constructor, es un método como en su documentación lo dice, retorna un array con la Key o llave y el value o el valor de las propiedades innumerables de un objeto.

Con lo anterior tenemos todo para hacer el filtro y la validación como así que el filtro, hay un problema con las cadenas de texto, estas también tienen una key y un valor sin embargo ambas son números, es decir: 1: 1, aquí viene la parte final de la función: como ambos key y valor son números según lo anterior uso el objeto Number() que es un intérprete que verifica si un string es compuesto por uno más números ejemplo Number(“3”) = 3 “true”, si está compuesto por letras no me va a realizar ninguna acción o tira un undefine y uso parseInt() que como el objeto anterior verifica si un string está compuesto por números y los trasfoma en números reales por lo contrario arrojara un Nan . Las cadenas de string los compone un “objeto” (“1”:1) son números iguales entonces si hago la validación (Number(“1”) === parseInt(1)) Me va a dar “true” sin embargo para los objetos comunes va a dar “false” por lo explicado anterior mente entonces realizo la validación contraria (¡==) haciendo esto me va a dar “true” por ello puedo por una parte lograr contar el número de caracteres de un objecto esto se hace con: Key\_.length + value.length y por otro lado contare el número de caracteres de una oración o un string común con: element.length

const characteresCount = (element) => {
//fillter Objects
Object.entries(element).map((key) => {
const [Key_, value] = [...key];
Number(Key*) !== parseInt(Key*)
? console.log(`your text chain has ${Key_.length + value.length}`)
: console.log(element.length);
});

characteresCount(
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit incidunt consectetur fugit tenetur aliquam odio odit consequatur, corporis deleniti nisi quo ullam. Cum, in dicta molestiae nemo illo porro aliquid optio laudantium incidunt provident error quos, dolores a quibusdam sed eaque explicabo blanditiis laboriosam, sint hic id ipsa possimus ipsam."
);

//the sentence has: "353" characters

characteresCount({ make: "Ford", model: "Mustang", year: "1969" });

/_your text chain has: "8" characters
your text chain has: "12" characters
your text chain has: "8" characters_/

uno por cada propiedad y valor: \*your text chain has: "8" characters

RECUERDA SUBIR EL SCROLL DE LA CONSOLA HASTA ARRIBA PARA VER ESTE RESULTADO.
