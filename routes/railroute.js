const express = require('express');
const RC = require('../controller/RailInfoController'); 

const router = express.Router();

router.get('/', (req, res) => {
     res.send('<h3>Rail Info routing ...!</h3>');
});

router.get('/showall', RC.fetchAll);

router.post('/searchbystations', RC.searchByStations);

router.post('/addtrain', RC.insertTrain);

router.put('/updatetrain/:train_no', RC.updateTrain);

router.delete('/deltrain/:id', RC.deleteTrain);

module.exports = router;
