const classicLangs = ["Fortran", "Lisp", "COBOL"];
const modernLangs = ["Python", "Ruby", "JavaScript"];

for (let i = 0; i < classicLangs.length; i++) {
    console.log(classicLangs[i])
}

for (let i in classicLangs) {
    console.log(classicLangs[i])
}

classicLangs.forEach(language => console.log(language))

for (let language of classicLangs) {
    console.log(language);
}

// const languages = classicLangs.concat(modernLangs)
const languages = [...classicLangs, ...modernLangs]
console.log('languages', languages)