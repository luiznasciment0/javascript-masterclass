const ob1 = {
    p1: 10,
    getP1: function() {
        const fn1 = () => this.p1
        return fn1();
    }
};
console.log(ob1.getP1());