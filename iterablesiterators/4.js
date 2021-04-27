function createIterator(...array) {
    let index = 0;

    return {
        next() {
            if (index < array.length) {
                return {
                    value: array[index++],
                    done: false
                };
            } else {
                return {
                    value: undefined,
                    done: true
                };
            }
        }
    };
}

const iterator = createIterator("Fortran", "Lisp", "COBOL");
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function createIterable(...array) {
    return {
        [Symbol.iterator]() {
            let index = 0;
            return {
                next() {
                    if (index < array.length) {
                        return {
                            value: array[index++],
                            done: false
                        };
                    } else {
                        return {
                            value: undefined,
                            done: true
                        };
                    }
                }
            };
        }
    };
}

const iterable = createIterable("Fortran", "Lisp", "COBOL");
for (let language of iterable) {
    console.log(language)
}