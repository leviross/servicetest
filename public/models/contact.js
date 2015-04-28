var mongoose = require('mongoose');
var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;
var ContactModel = new mongoose.Schema({
	ID: Number,
	Address: String,
	Address2: String,
	City: String,
	State: String,
	Zip: String,
	NameFirst: String,
	NameLast: String,
	Company: String,
	Email: String,
	Phone1: String,
	Phone1Type: String,
	Phone2: String,
	Phone2Type: String,
	Type: Number,
	TypeDisplay: String,
	DateCreated: String,
    DateModified: String
}, { collection: 'contact' });

module.exports = mongoose.model('Contact', ContactModel);