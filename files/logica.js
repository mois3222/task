/* Separator... :*/

const spt = (n) => {
console.warn(
  `//--------------------------/(${})/-----------------------------//`
);
}  

spt(1);

/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/
const characteresCount = (element) => {
  //fillter Objects
  Object.entries(element).map((key) => {
    const [Key_, value] = [...key];

    Number(Key_) !== parseInt(Key_)
      ? console.log(
          `your text chain has: "${Key_.length + value.length}" characters`
        )
      : console.log(`the sentence has: "${element.length}" characters`);
  });
};

characteresCount({ make: "Ford", model: "Mustang", year: "1969" });

spt(2);
//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const join = (value = "", number = undefined) => {
  const arr = value.split("", number).reduce((acc, value) => {
    return acc + value;
  });

  console.log(arr);
};

join(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  5
);

spt(3);
//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

//acordate que debes de crear una branch para solucionar este codigo o mas bien mejorarlo..

const LoremString = "Lorem ipsum dolor sit amet consectetur";

const glassString = LoremString.split(" ", 4);

console.log(glassString);

spt(4);
//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repeat = (justWords, amount) => {
  let array = [];

  array.push(Array(amount).fill(justWords));

  console.log(array);
};

repeat("Hola mundo", 3);

spt(5);
/**5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

const toUntidy = (untidyWord = "") => {
  untidyWord !== ""
    ? console.log(untidyWord.split("").reduce((acc, value) => value + acc))
    : console.warn(`please insert a sentence`);
};

toUntidy(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
);

spt(6);
/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const wordRepeats = (value = "", repeat = undefined) => {
  let exp = new RegExp(repeat, "g");
  const res = value,
    _array = [...res.matchAll(exp)];

  value !== "" && _array.length >= 2
    ? console.log(
        `You inserted a repeat word "${repeat}", and this is in the sentence ${_array.length} times`
      )
    : console.warn(`Please insert a word`);

  repeat === undefined && _array.length > 1
    ? console.warn(
        `Please insert the word that you would like khow if is repeat`
      )
    : null;
};

wordRepeats(
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  "dolore"
);

spt(7);
/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

const palindromeWord = (word = "") => {
  word = word.toLocaleLowerCase();

  const backwardsWord = word.split("").reverse().join(""),
    exp = new RegExp(backwardsWord);

  exp.test(word) && word !== ""
    ? console.log(`your palidrome is "${backwardsWord}"`)
    : console.warn(`the word "${word} its'nt a palidrome"`);

  word === ""
    ? console.warn(`you not insert any please add a palidrome word`)
    : null;
};

palindromeWord("amor a roma");

spt(8);
/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

const fillter = (chain, b) => {
  const exp = new RegExp(b, "g"),
    res = chain.replace(exp, "");

  console.log(res);
};

fillter("Moises1, Moises2, Moises3, Moises4, Moises5, ", "Moises");

/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

spt(9);
/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const random = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};

console.log(random(600, 501));

spt(10);
/*10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

const Igualar = (n = "") => {
  n = `${n}`;
  let origin = n;
  n = n.split("").reverse().join("");

  origin === n
    ? console.log(`The number that you added it's Capicúa "${n}":`, origin == n)
    : console.log(
        `The number that you added its'nt some that is to say, ${origin} !== ${n}:`,
        origin == n
      );
};

Igualar(2001);

spt(11);
/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const calNFactorial = (n = "") => {
  let count = 0,
    array = [];

  n = parseInt(n);

  if (n !== "") {
    while (count <= n) {
      count++;

      count > n ? null : array.push(count);
    }

    try {
      let res = array.reduce((acc, value) => {
        return acc * value;
      });

      console.log(`Your Factorial Number is: "${res}"`);
    } catch (error) {
      console.warn(`Please add some value number = undefined`);

      console.log(error);
    }
  }
};

calNFactorial("7");
