const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const contactSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  contactphone: String,
  contactname: String,
  relationshipcontact: String},
  {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;