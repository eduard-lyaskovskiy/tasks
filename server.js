const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const workDir = `${path.join(__dirname)}/task_14/calc/`;

app.use(express.static(workDir));
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json({
    type: ['application/json', 'text/plain']
  }))

app.get('/', function(req, res) {
    res.sendFile(`${workDir}index.html`)
})

app.post('/', (req, res) => {
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Server work at port: ${port}`)
})