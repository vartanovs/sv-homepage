/**
 * @module server/app.js
 * @description Server Declaration
 */

import path from 'path';

// Import Express Module
import express, { Request, Response } from 'express';

const HTTP_NOT_FOUND = 404;

// Invoke Express Server
const app = express();

// Respond to GET Requests to root '/' by serving React Bundle
app.use(express.static(path.resolve(__dirname, '../../build')));

// Respond to all other requests with 404 status and 'route not found' message
app.use('*',
  (_: Request, res: Response): Response => res.status(HTTP_NOT_FOUND).send('Route Not Found!'));

export default app;
