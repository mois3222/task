/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

const characteresCount = (element) => {
  //fillter Objects
  Object.entries(element).map((key) => {
    const [Key_, value] = [...key];
    Number(Key_) !== parseInt(Key_)
      ? console.log(`your text chain has ${Key_.length + value.length}`)
      : console.log(element.length);
  });
};

characteresCount(
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit incidunt consectetur fugit tenetur aliquam odio odit consequatur, corporis deleniti nisi quo ullam. Cum, in dicta molestiae nemo illo porro aliquid optio laudantium incidunt provident error quos, dolores a quibusdam sed eaque explicabo blanditiis laboriosam, sint hic id ipsa possimus ipsam."
);

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

//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

//acordate que debes de crear una branch para solucionar este codigo o mas bien mejorarlo..

const LoremString = "Lorem ipsum dolor sit amet consectetur";

const glassString = LoremString.split(" ", 4);

console.log(glassString);

//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repeat = (justWords, amount) => {
  let array = [];

  array.push(Array(amount).fill(justWords));

  console.log(array);
};

repeat("Hola mundo", 3);

/**5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

const toUntidy = (untidyWord = "") => {
  untidyWord !== ""
    ? console.log(untidyWord.split("").reduce((acc, value) => value + acc))
    : console.warn(`please insert a sentence`);
};

toUntidy(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
);

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

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

const palindromeWord = (word = "") => {
  const backwardsWord = word.split("").reduce((acc, value) => value + acc),
    exp = new RegExp(backwardsWord);

  exp.test(word) && word !== ""
    ? console.log(`your palidrome is "${backwardsWord}"`)
    : console.warn(`the word "${word} its'nt a palidrome"`);
};

palindromeWord("amor a roma");

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */
