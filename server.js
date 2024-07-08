const express = require('express')
const railroute = require('./routes/railroute.js'); 

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3000

app.use('/rail',railroute);

app.get('/', (req, res) => {
  res.send('Welcome to my railway application')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})