const v1 = 10;

const fn1 = () => {
    const v1 = 100;
    const fn2 = () => {
        const v1 = 1000;
        console.log(v1);
        const v2 = 10000;
        console.log(v2);
    };
    fn2();
};

fn1();