const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// middleWare
app.use(express.json());
app.use(cors())




app.get('/', (req, res) => {
    res.send('Server is runnig')
})

app.listen(port, () => {
    console.log('Listening to port', port)
})