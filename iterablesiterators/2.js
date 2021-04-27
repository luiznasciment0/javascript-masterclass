const langsMap = new Map([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]]);
console.log(langsMap)

for (let [lang, year] of langsMap) {
    console.log(lang, year)
}
console.log(...langsMap)

const langsSet = new Set([["Fortran", 1957], ["Lisp", 1958], ["COBOL", 1959]]);
for (let lang of langsSet) {
    console.log(lang)
}
console.log(...langsSet)

const language = "COBOL";
console.log([...language]);

for (let char of language) {
    console.log(char)
}