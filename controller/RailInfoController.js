const rail = require('../models/railmodel');

class RailInfoController {
    static fetchAll = async (req, res) => {
        try {
            const data = await rail.find({});
            res.status(200).json({ results: data });
        } catch (err) {
            console.log(err);
        }
    }

    static searchByStations = async (req, res) => {
        try {
            let { src_station, dest_station } = req.body;
            const data = await rail.find({ src_station, dest_station });
    
            res.status(200).json({ result: data });
    
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static insertTrain = async (req, res) => {
        try {
            const { train_no, train_name, src_station, dest_station, platform_no, dep_time, arr_time } = req.body;
            let trainData = new rail({
                train_no, train_name, src_station, dest_station, platform_no, dep_time, arr_time
            });
            let result = await trainData.save();
            res.status(200).json({ msg: 'Train Insertion done successfully!', result });
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static updateTrain = async (req, res) => {
        try {
            let trainNo = req.params.train_no;
            const { train_name, src_station, dest_station, platform_no, dep_time, arr_time } = req.body;

            let trainData = await rail.findOne({ train_no: trainNo });
            
            if (trainData) {
                trainData.train_name = train_name || trainData.train_name;
                trainData.src_station = src_station || trainData.src_station;
                trainData.dest_station = dest_station || trainData.dest_station;
                trainData.platform_no = platform_no || trainData.platform_no;
                trainData.dep_time = dep_time || trainData.dep_time;
                trainData.arr_time = arr_time || trainData.arr_time;

                let result = await trainData.save();
                res.status(200).json({ msg: 'Train Update done successfully!', result });
            } else {
                res.status(404).json({ msg: 'Train not found' });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static deleteTrain = async (req, res) => {
        try {
            let trainId = req.params.id;
            await rail.findByIdAndDelete(trainId);
            res.status(200).json({ message: 'Train data deleted.' });
        } catch (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = RailInfoController;
