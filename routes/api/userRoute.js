const router = require("express").Router();

router.get("/api/user", (req, res) => {
    res.send("User route");
});

module.exports = router;
