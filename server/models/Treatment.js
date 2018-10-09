const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const treatmentSchema = new Schema({
  username: {type: Schema.Types.ObjectId, ref: 'User'},
  needsMedication: Boolean,
  drug: String,
  administration: String,
  needsCallingContact: Boolean,
  contactPerson: String,
  contactPhone: Number,
  needsAnyOther: Boolean,
  additionalInfo: String,  
  needsCallingAnAmbulance: Boolean,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Treatment = mongoose.model('Treatment', treatmentSchema);
module.exports = Treatment;