// const mongoose = require('mongoose');
// const Schema   = mongoose.Schema;

// const personalInfoSchema = new Schema({
//   username: {type: Schema.Types.ObjectId, ref: 'User'},
//   profilePic: String,
//   email: String,
//   role: {type:String, enum: ['user', 'caregiver']},
//   dateOfBirth: Date,
//   phone: Number,
//   address: String,
//   city: {type: String, enum: ['A Coruña', 'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Islas Baleares', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'Cuenca', 'Girona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'Jaén', 'La Rioja', 'Las Palmas', 'León', 'Lleida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Pontevedra', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza']},
// }, {
//   timestamps: {
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
//   }
// });

// const PersonalInfo = mongoose.model('PersonalInfo', personalInfoSchema);
// module.exports = PersonalInfo;