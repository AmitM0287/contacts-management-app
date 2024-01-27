const express = require('express');
const dotenv = require('dotenv');
const contactsRouter = require('./routes/contacts.route');
const { connectMongoDB } = require('./utils/connections.utils');

dotenv.config();

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});

/* connecting mongo db */
connectMongoDB()
	.then((conn) => conn)
	.catch((err) => console.log('err: ', err));

app.use('/contacts', contactsRouter);
