function sum(a, b) {
    return new Promise((resolve, reject) => {
        if (!a || !b) return reject("Invalid input!")
        setTimeout(() => {
            resolve(a + b);
        }, Math.random() * 1000);
    })
}

Promise.race([
    sum(2, 2),
    sum(4, 4)
]).then(value => {
  return sum(value, value).then(result => console.log(result));
}).catch(e => console.log(e));