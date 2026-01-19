const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.MONGODB_DOMEN}/jiradb`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log("Established connection to the database"))
    .catch(err => console.log("Something went wrong ", err));

