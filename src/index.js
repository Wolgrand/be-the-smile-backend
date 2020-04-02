const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors({ exposedHeaders: ['x-total-count'] }));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
