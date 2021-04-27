const charsets = new Set();
console.log(charsets);
console.log(charsets.add("ASCII"));
console.log(charsets.add("ISO-8859-1"));
console.log(charsets.add("UTF-8"));
console.log(charsets.size);
console.log(charsets.forEach((charset) => {
    console.log(charset);
}));
console.log(Array.from(charsets));