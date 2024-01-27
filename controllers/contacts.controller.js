// const { getMongoDBConn } = require('../utils/connections.utils');
const Contacts = require('../models/contacts.model');

/* function is used to fetch all the contacts */
exports.fetchContacts = async (req, res) => {
	const data = await Contacts.find({});
	return res.json({
		sucess: true,
		message: 'ok',
		data: data
	});
};
