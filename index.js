const express = require('express');
const dotenv = require('dotenv');

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const {middleware} = require("./middlewares/middleware");

dotenv.config();
const app = express();
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/task', middleware, taskRoutes);


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

module.exports={app};