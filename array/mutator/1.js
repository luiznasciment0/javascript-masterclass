// push adiciona elemento no final
// pop remove elemento no final
// unshift adiciona um elemento no inicio
// splice remove, substitui ou adiciona um ou mais elementos em uma determinada posição
// shift remove um elemento no inicio
// sort ordena os elementos de acordo com a funçao de ordenaçao
// reverse inverte a ordem dos elementos 
// fill preenche os elementos de acordo com a posiçao de inicio e fim 

const languages = ["Python", "C", "Java"];
console.log(languages);
console.log(languages.push("Ruby"));
console.log(languages.push("Go"));
console.log(languages);
console.log(languages.pop());
console.log(languages.pop());
console.log(languages);

console.log(languages.unshift("Ruby"));
console.log(languages.unshift("Go"));
console.log(languages);
console.log(languages.shift());
console.log(languages.shift());
console.log(languages);

console.log(languages.splice(1, 1));
console.log(languages.splice(1, 0, "C++", "C#"));
console.log(languages.splice(1, 2, "C"));
console.log(languages);
