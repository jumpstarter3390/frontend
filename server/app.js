const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
const profileRoutes = require('./routes/profile');



app.use(cors());
app.use(express.json());



require("dotenv").config({ path: "./config.env"});
const port = process.env.PORT || 5001;
app.use('/', profileRoutes)

mongoose
	.connect(process.env.DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Database Connected"));

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});