/**
 * @module server/app.js
 * @description Server Declaration
 */

// Start server by invoking express
const express = require('express');
const app = express();

// TODO: REMOVE Test Root Route
app.get('/', (req, res) => res.status(200).send('Hello World!'))

module.exports = app;
