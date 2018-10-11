const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/api/v1/user', require('./api/v1/user'));
app.use('/', (req, res) => res.json({msg:'hello world'}));


app.listen(port, () => console.log(`server listening on port ${port}`));