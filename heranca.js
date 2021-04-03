const functionalLanguage = {
    paradigm: "Functional"
}

const scheme = Object.create(functionalLanguage);

scheme.name = "Scheme";
scheme.year = 1975;

const javascript = {
    name: "JavaScript",
    year: 1995,
    __proto__: functionalLanguage
}

for (let key in scheme) {
    console.log(key, scheme.hasOwnProperty(key))
}

console.log(functionalLanguage)