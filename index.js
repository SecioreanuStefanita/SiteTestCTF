const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const list = [];
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.get('/',function(req,res){
    // console.log(document.cookie);
    console.log(req.url);
    list.push(req.url);
    console.log(list)
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/view', function (req, res) {
    console.log(list);
    res.send(list.toString());
});
const port = process.env.PORT || 80;
//add the router
app.use('/', router);
app.listen(port, () => {
    console.log('Server is running on port 80');
});
