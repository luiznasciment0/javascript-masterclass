/* 
indexOf: retorna a posição do primeiro elemento encontrado

lastIndexOf: retorna a posição do último elemento encontrado

includes: retorna true se o elemento existir

concat: retorna um novo array resultante da concatenação de um ou mais arrays

slice: retorna partes de um determinado array de acordo com a posição de início e fim

join: converte o array para uma string, juntando os elementos com base em um separador
*/

const languages = ["Python", "C", "Java"];

console.log(languages.indexOf("Python"));
console.log(languages.lastIndexOf("Python"));
console.log(languages.indexOf("JavaScript"));

console.log(languages.includes("Python"));
console.log(languages.includes("Python"));
console.log(languages.includes("JavaScript"));

const ooLanguages = ["Smalltalk", "C++", "Simula"];
const functionalLanguages = ["Haskell", "Scheme"];

const langs = [].concat(ooLanguages, functionalLanguages);
console.log(langs)