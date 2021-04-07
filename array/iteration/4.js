const frameworks = [
    {
        name: "Angular.js",
        contributors: 1548
    },
    {
        name: "Ember.js",
        contributors: 746
    },
    {
        name: "Vue.js",
        contributors: 240
    }
]

const result = frameworks.every((framework) => {
    return framework.name.includes('js');
});

const result2 = frameworks.some((framework) => {
    return framework.name.includes('js');
});

console.log(result);
console.log(result2);