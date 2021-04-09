const timeUnits = new Map();
timeUnits.set("seconds", 1);
timeUnits.set("minute", 60);
timeUnits.set("hour", 3600);
console.log(timeUnits.forEach((value, key) => {
    console.log(key, value);
}));
console.log(timeUnits.has("hour"));
console.log(timeUnits.has("day"));
console.log(timeUnits.get("day"));
console.log(timeUnits.get("hour"));