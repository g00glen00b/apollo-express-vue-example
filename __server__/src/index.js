import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import schema from './schema';
import {graphiqlExpress, graphqlExpress} from 'apollo-server-express';

const app = express();
mongoose.connect('mongodb://localhost:27017/local');
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL:'/graphql'}));
app.listen(3000, () => console.log('Application started on port 3000'));