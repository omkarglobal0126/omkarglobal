const bcrypt = require("bcryptjs");
async function hash(){
    try {
        console.log(await bcrypt.hash("Omkarglobal@0126", 10));
    } catch (error) {
        console.error(error)
    }
}

console.log(hash())