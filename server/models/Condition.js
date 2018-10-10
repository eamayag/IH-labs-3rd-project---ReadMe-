const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ConditionSchema = new Schema({
  username: {type: Schema.Types.ObjectId, ref: 'User'},
  bloodGroup: {type: String, enum: ['0+', '0-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']},
  allergies: {type: String},
  diagnosis: {type: String},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Condition = mongoose.model('Condition', ConditionSchema);
module.exports = Condition;