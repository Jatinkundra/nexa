const mongoose = require('mongoose');

const chartSchema = new mongoose.Schema({
    title: String,
    series: [Object]
}); 


const Chart = mongoose.model('Chart', chartSchema);

module.exports = Chart;