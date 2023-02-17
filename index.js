const info = require("./information.js")
const cowsay = require ("cowsay")
console.log(cowsay.say({
        // or cowsay.think()
    text : `hello! I am  cow ${info.moi.name} in the campus ${info.moi.campus}`,
    e : "oO",
    T : "U"
}));
