import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Route imports
import todoRoutes from './src/routes/todo.route.js';

// Setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// Constants
const PORT = process.env.PORT || 8000;

// Connect to DB
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'Connection error: '));
database.once('open', () => {
  console.log('Connected to database!');
});

// Middleware
var corsMiddleware = function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

  next();
}

app.use(cors());
app.use(express.json());
app.use(corsMiddleware);

// Routes
app.use('/api/v1/todos', todoRoutes);

// Serve static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Listen
app.listen(PORT, () => {
  console.log(`API / server is listening on port ${PORT}...`);
});

export default app;