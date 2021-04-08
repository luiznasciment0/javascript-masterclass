const timeUnits = new Map();
timeUnits.set("seconds", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);
console.log(timeUnits.forEach((value, key) => {
    console.log(key, value);
}));
