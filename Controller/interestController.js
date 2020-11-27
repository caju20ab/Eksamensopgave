/*const hardInterest = require('../HardInterest');
const Interest = require ('../Classes/Interest');
const service = require ('../service')


function interestController (req, res){
    res.json(hardInterest)
}

function addInterest (req, res){
    const Interest = new Interest (req.body.hobby)
    hardInterest.push (Interest)
    res.sendStatus (200);
}

function deleteInterest (req, res){
    const hobby = req.params.id
    service.removeByAttr (hardInterest, 'hobby', `${hobby}`)
    res.sendStatus(200)
}

module.exports = {
    interestController,
    addInterest,
    deleteInterest
}*/