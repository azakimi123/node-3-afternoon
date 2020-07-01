require('dotenv').config();

const express = require('express'),
      massive = require('massive'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      app = express();



app.use(express.json());


//massive invoked
massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
}).catch(err => console.log(err));




app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`));
// console.log(SERVER_PORT)