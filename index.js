const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = process.env.PORT || 3001;
const blogpostRoutes = require('./routes/blogposts');


app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/blogposts', blogpostRoutes);

app.listen( PORT, () => {
  console.log(`AJAX Blog: Listening on port no. ${PORT}`);
});
