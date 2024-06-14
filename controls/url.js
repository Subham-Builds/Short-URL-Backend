const URL = require('../database/db')
const shortid = require('shortid')
async function generateshorturl(req, res){
    const body = req.body;
    if(!body.URL){
        return res.status(400).json({
            msg: 'URL is required'
        })
    }
    const short_ids = shortid();
    await URL.create({
        short_id: short_ids,
        ogURL: body.URL,
        visits: [],

    });
    return res.json({id: short_ids})

}
async function count(req,res){
    const short_id = req.params.short_id;
    const result = await URL.findOne({
        short_id
    })
    return res.json({
        total: result.visits.length,
        analytics: result.visits
    })
}
module.exports = {
    generateshorturl,
    count
}