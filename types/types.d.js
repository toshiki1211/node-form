"use strict";
const express = require('express');
const app = express();
const router = express.Router();
app.set("view engine", "ejs");
router.get("/", (req, res) => {
    res.render("../view/index.ejs");
});
app.listen(3000);
//# sourceMappingURL=types.d.js.map