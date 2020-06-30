const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect DB
mongoose.connect('mongodb://localhost:27017/usp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

// Route files
const users = require('./routes/users.js');
const admin = require('./routes/admin.js');

const app = express();

app.use(express.json());
app.use(cors());

// Mount routers
app.use('/users', users);
app.use('/admin', admin);

const PORT = 5000

const server = app.listen(PORT, console.log(`Server is listening on port: ${PORT}`));