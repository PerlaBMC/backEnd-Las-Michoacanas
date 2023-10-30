require ("dotenv").config();
const express = require("express");
const app = express();
const {dbConnection} = require ("./database/confing")
const cors = require ("cors")

dbConnection ();
app.use (cors());
app.use (express.json());

app.get ("/api", (req, res) => {
    return res.json ({ 
        msg: "welcome to my Api"
    });
});

app.use ("/api/user", require ("./Routers/user.routes"));



app.listen (process.env.PORT, () => {
    console.log (`Servidor vivo en el puerto ${process.env.PORT}`);
});