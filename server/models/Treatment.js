const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const treatmentSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  drug: String,
  administration: String,
  additionalInfo: String,  
  ambulance: Boolean,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Treatment = mongoose.model('Treatment', treatmentSchema);
module.exports = Treatment;