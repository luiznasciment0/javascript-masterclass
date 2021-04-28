function* forever() {
    let value = 1

    while (true) {
        const reset = yield value++;
        if (reset) value = 1;
    }
}

function today() {
    const date = new Date();
    console.log(date);
}

const foreverGenerator = forever();
console.log(foreverGenerator);
console.log(typeof foreverGenerator);
foreverGenerator.next();
foreverGenerator.next();
foreverGenerator.next();
today();
foreverGenerator.next();
foreverGenerator.next(true);
foreverGenerator.next();

