// const express = require('express');

// const app = express();

// app.get("/", (req, res) => {
//   res.send("connected");
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log("Server listening the port http://localhost/" + port);
// });

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const ProjectsRoutes = require('./routes/projects-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

// app.use(express.urlencoded({extended: true}));
app.use('/api/projects', ProjectsRoutes);
// app.use('/api/users', usersRoutes);
// app.use('/api/admins', adminsRoutes);
// app.use('/api/categories', categoriesRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route. ['+req.body.url+']', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, err => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

// mongoDB connection URI
// const uriDB = 'mongodb+srv://eziokittu:southpoint19@cluster0.nmjiwwv.mongodb.net/kalasangam'; // ATLAS
const uriDB = 'mongodb://localhost:27017/my-portfolio'; // community server
mongoose
  .connect(uriDB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() =>{
    app.listen(5000);
    console.log("LOG - Server running on port 5000");
  })
  .catch(err => {
    console.log(err);
    console.log("LOG - Server failed to connect");
  });