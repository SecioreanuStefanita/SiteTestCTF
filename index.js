const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.get('/',function(req,res){
    // console.log(document.cookie);
    console.log(req.url);
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.post('/log', function (req, res) {
    console.log(req.body.message);
    res.sendStatus(200);
});

//add the router
app.use('/', router);
app.listen(80, () => {
    console.log('Server is running on port 80');
});
