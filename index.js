require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use(require('./routes'));

mongoose.connect(process.env.MONGO_SERVER)
    .then(() => console.log("Успешно соединились с сервером MongoDB"))
    .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(process.env.PORT, () => {
    console.log(`Сервер ${process.env.PORT} успешно запущен`);
})    