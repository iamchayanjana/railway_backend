const mongoose = require('../dbconnect');

const railInfoSchema = mongoose.Schema({
    train_no: { type: String, required: true },
    train_name: { type: String, required: true },
    src_station: { type: String, required: true },
    dest_station: { type: String, required: true },
    platform_no: { type: String, required: true },
    dep_time: { type: String, required: true },
    arr_time: { type: String, required: true }
},
{
    timestamps: true
});

const rail = mongoose.model('railinfo', railInfoSchema);
module.exports = rail;
