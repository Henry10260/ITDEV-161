import express from 'express';

//Initialize express application
const app = express();

//API endpoint 
app.get('/', (req, res) =>
res.send('http get request sent to root api endpoint')
);

//Connection Listener
app.listen(3000, () => console.log(`Express server running on port 3000`));