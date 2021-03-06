const express = require( 'express' );
const cors = require( 'cors' );
const mongoose = require( 'mongoose' );

require( 'dotenv' ).config();

const app = express(),
   port = process.env.PORT || 5000;

app.use( cors());
app.use( express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect( uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const { connection } = mongoose;
connection.once( 'open', () => {
   console.log( 'MongoDB database connection established successfully' );
});

const shotsRouter = require( './routes/shots' );
const historyRouter = require( './routes/history' );

app.use( '/shots', shotsRouter );
app.use( '/history', historyRouter );

app.listen( port, () => {
   console.log( `Server is running on port: ${port}` );
});
