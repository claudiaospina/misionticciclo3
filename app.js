const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2/promise');
const port = 3001;
const bluebird = require('bluebird');
let connection; // variable para almacenar la conexión a la DB

// configura el servidor para recibir datos en formato json
app.use(express.json());
app.use(cors({ origin: true }));

//PRODUCTOS
app.get("/get-products", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM productos");
    console.log({ data: rows })
    response.json({ data: rows });
})


app.post("/add-product", async (req, res) => {
    try {
        console.log(req.body)
        const {descripcion, precio, stock, fechaIngreso, mRollos} = req.body;
        await connection.execute(`INSERT INTO productos (Descripcion, Precio, Stock, FechaIngreso, MRollos) VALUES('${descripcion}', ${precio}, ${stock}, '${fechaIngreso}', ${mRollos})`);
        res.json({status:"ok"})
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
    
})

app.put("/update-product", (req, res) => {
    const product = req.body;
    console.log(product.descripcion)
    res.json(product)
})
app.delete("/delete-product", (req, res) => {
    const product = req.body;
    console.log(product.name)
    res.json(product)
})




// VENTAS




app.get("/get-ventas", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM ventas");
    console.log({ data: rows })
    response.json({ data: rows });
})


app.post("/add-venta", async (req, res) => {
    try {
        console.log(req.body)
        const {valorVenta, descripcion, fechaVenta, fechaPago, responsable} = req.body;
        await connection.execute(`INSERT INTO ventas (valorVenta, descripcion, fechaVenta, fechaPago, responsable) VALUES(${valorVenta}, '${descripcion}', '${fechaVenta}', '${fechaPago}', '${responsable}')`);
        res.json({status:"ok"})
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
    
})

app.put("/update-venta", (req, res) => {
    const venta = req.body;
    console.log(venta.descripcion)
    res.json(venta)
})
app.delete("/delete-venta", (req, res) => {
    const venta = req.body;
    console.log(venta.name)
    res.json(venta)
})


app.listen(port, async () => {
    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '12345678',
            database: 'textiles_la_15',
            Promise: bluebird
        });
        console.log("Server running on port: " + port);
    } catch (error) {
        console.log(error);
        res.json(error)
    }
    
    
});