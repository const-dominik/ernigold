const express = require('express');
const fs = require("fs");
const router = express.Router();

router.post('/', (req, res) => {
    const file = JSON.parse(fs.readFileSync("public/json/gold.json"));
    const { worldname, gold, token } = req.body;
    if (token !== "nyrasss") {
        const data = {
            ok: 0,
            err: "Zły token"
        };
        res.json(data);
        return;
    }
    if (!worldname || typeof worldname !== "string" || worldname.length < 1) {
        const data = {
            ok: 0,
            err: "Podaj świat"
        };
        res.json(data);
        return;
    }
    if (!gold || typeof gold !== "number" || gold < 0) {
        const data = {
            ok: 0,
            err: "Podaj złoto"
        };
        res.json(data);
        return;
    }
    if (!file[worldname]) {
        file[worldname] = {};
    }
    file[worldname].amountOfGold = gold;
    file[worldname].lastUpdate = (new Date).getTime();
    fs.writeFileSync("public/json/gold.json", JSON.stringify(file));
    res.json({ ok: 1 });
    return;
});

module.exports = router;