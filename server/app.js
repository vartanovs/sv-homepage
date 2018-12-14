/**
 * @module server/app.js
 * @description Server Declaration
 */

// Start server by invoking express
const express = require('express');
const path = require('path');
const app = express();

// TODO: REMOVE Test Root Route
app.use(express.static(path.resolve(__dirname, '../build')));

module.exports = app;
