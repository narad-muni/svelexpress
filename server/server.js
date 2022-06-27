const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
const api = require('./api/api');

app.use(cors());

app.use('/api',api);

app.use(express.static(path.resolve(__dirname,'..','client','public')));

app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname,'..','client','public', 'index.html'));
});

app.get('*',(req,res) => {
   res.redirect('/#/404');
});

app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});
