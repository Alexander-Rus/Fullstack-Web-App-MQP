const express = require('express');
const path = require('path');

const app = express();

app.use(require('./routes/mongotest'))
app.use(require('./routes/mongo_Item'))
app.use(require('./routes/Twitter_Info'))
app.use(require('./routes/Matrix_Info'))
app.use(require('./routes/GAU_Info'))
app.use(require('./routes/Get_Titles'))
app.use(require('./routes/Recent_Activity'))

if(process.env.NODE_ENV ==='production') {
    // Set a static folder
    app.use(express.static('client/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html' ))
    });
}

const port = process.env.PORT || 5001;

app.listen(port, () => `Server running on port ${port}`);