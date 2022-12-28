const express = require('express');
const cors = require('cors');
const { userRouter } = require('./routes');
const morganLogger = require('morgan');
const {morganSetup} = require('./middlewares');

const app = express();

app.use(cors());
app.use(morganLogger(morganSetup));
app.use(express.json());
app.use("/users", userRouter);

module.exports = app;