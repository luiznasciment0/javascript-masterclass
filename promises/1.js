function sum(a, b) {
    return new Promise((resolve, reject) => {
        if (!a || !b) return reject("Invalid input!")
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    })
}

Promise.all([
    sum(2, 2),
    sum(4, 4)
]).then(values => {
  const [a, b] = values;
  return sum(a, b).then(result => console.log(result));
}).catch(e => console.log(e));