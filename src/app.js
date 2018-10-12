const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = mongoose.connection;
const app = express();

app.set('PORT',process.env.PORT || 3000);
app.set('DB_URL', 'mongodb://localhost/api_practice');

db.on('error', console.error);
db.once('open', ()=> console.log(`[api-practice-log] Connected to mongo server`));
mongoose.connect(app.get('DB_URL'));

app.use(express.json());
app.use(cors());
app.use('/api/v1/users', require('./api/v1/users'));
app.use('*', (req, res) => res.status(404).send({error:'page not found'}));

app.listen(app.get('PORT'), () => console.log(`[api-practice-log] Server listening on port ${app.get('PORT')}`));