/**
 * @module server/app.js
 * @description Server Declaration
 */

import path from 'path';

// Import Express Module
import express, { Request, Response } from 'express';

// Invoke Express Server
const app = express();

// Respond to GET Requests to root '/' by serving React Bundle
app.use(express.static(path.resolve(__dirname, '../../build')));

// App favicon redirect
app.use('/favicon.ico', express.static(path.resolve(__dirname, '../../public/favicon.ico')));

// Respond to all other requests with 404 status and 'route not found' message
app.use('*',
  (_: Request, res: Response): Response => res.status(404).send('Route Not Found!'));

export default app;
