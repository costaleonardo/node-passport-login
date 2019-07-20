/**
 * Index File
 */

 // Import dependencies
 const express = require('express');
 const expressLayouts = require('express-ejs-layouts');
 const mongoose = require('mongoose');
 const passport = require('passport');
 const flash = require('connect-flash');
 const session = require('express-session');

 const app = express();

 require('./config/passport');

 const db = require('./config/keys').mongoURI;

 mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected.'))
  .catch(err => console.log(err));
 