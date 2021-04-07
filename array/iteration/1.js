/*
forEach: executa a funçao passada por parametro para cada elemento

filter: retorna um novo array contendo somente os elementos que 
        retornaram true na funçao passada por parametro

find: retorna o primeiro elemento que retornou true na funçao
      passada por parametro

some: retorna true se um ou mais elementos retornaram true na função
      passada por parametro

every: retorna true se todos os elementos retornaram true na função
        passada por parametro

map: retorna um novo array com base no retorno da função passada 
     por parametro

reduce: retorna um valor com base no retorno da função 
        passada por parametro
*/

const frameworks = ["Angular.js", "Ember.js", "Vue.js"]
frameworks.forEach((framework) => console.log(framework));
