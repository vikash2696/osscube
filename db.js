const mongoose = require("mongoose");
const URL = process.env.url;

mongoose.connect(URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
}).then(() => {
    console.log('Database conneted');
})
.catch((err) => {
    console.log(err);
});
