const router = require("express").Router();

router.get("/", (req,res)=>{
    res.send("Thought route")
})

module.exports = router;
