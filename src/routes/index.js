const { Router} = require ('express');
const router= Router();
//routes
router.get('/test',(req, res)=>{
    const data ={
        "Name": "creg",
        "website": "creg.com"
    }
    res.json(data)
});

module.exports =router;