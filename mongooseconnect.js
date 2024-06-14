const mongoose = require('mongoose');
mongoose.set("strictQuery",true);
async function connecttomongo(url){
    return mongoose.connect(url);
}
module.exports = {
    connecttomongo
}