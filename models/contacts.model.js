const mongoose = require('mongoose');

/* contacts schema */
const contactsSchema = mongoose.Schema({
	fname: {
		type: String,
		required: true
	},
	lname: {
		type: String,
		required: true
	},
	phno: {
		type: Number,
		required: true
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'user'
	},
	updatedBy: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
		ref: 'user'
	}
}, { timestamps: true }); 

/* contacts model */
const Contacts = mongoose.model('contacts', contactsSchema);

module.exports = Contacts;
