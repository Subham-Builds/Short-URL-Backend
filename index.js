const express = require('express');
const {connecttomongo} = require('./mongooseconnect')
const app = express();
const PORT = 3000;
connecttomongo('mongodb://127.0.0.1:27017/short-url').then(() =>{
    console.log("Connected to Database")
});
const db = require('./database/db')
const urlroute = require('./routes/url')
app.use(express.json());
app.use('/url',urlroute)
app.get('/:short_id', async(req,res) => {
    const short_id = req.params.short_id;
    const entry = await db.findOneAndUpdate({
        short_id
    },{$push:{
        visits: {
            timestamps: Date.now(),
        }
    }})
    res.redirect(entry.ogURL);
});
app.listen(PORT, () => console.log("Server Running....."))