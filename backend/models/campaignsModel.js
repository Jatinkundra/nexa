const mongoose = require('mongoose');

// Assuming you need a sub-schema. If not, you can directly define these in the Campaign schema.
const campaignDetailSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  started_by: String,
  started_for: String,
  institute: String,
  description: String,
  type: String
});

const campaignsSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    started_by: String,
    started_for: String,
    institute: String,
    description: String,
    type: String
});

const Campaigns = mongoose.model('Campaign', campaignsSchema);

module.exports = Campaigns;
