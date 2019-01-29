/**
 * @module server/index.js
 * @description Server Entry Point
 */

// Import active server and specify PORT
const app = require('./app');
const PORT = 3000;

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
