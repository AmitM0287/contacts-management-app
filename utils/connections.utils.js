const mongoose = require('mongoose');

/* connect to mongo db */
exports.connectMongoDB = async function () {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI)
			.then(() => console.log('mongo db connected!'))
			.catch((err) => console.log(err));
		return mongoose;
	} catch (err) {
		throw Error(err);
	}
};
