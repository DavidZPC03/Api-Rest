const path = require("node:path");
const express = require("express");
const XLSX = require("xlsx");

const router = express.Router();

router.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("formato excel xlsx");
    });

router.post("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const form = req.body;
    const formArray = [form];

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(formArray);

    XLSX.utils.book_append_sheet(workbook,worksheet,"Formulario");
    const filepath = path.join(__dirname,"..","/assets/formularios","PruebaExpo.xlsx");

    XLSX.writeFile(workbook, filepath);

    res.send("Formulario guardado en archivo excel");
});

module.exports = router