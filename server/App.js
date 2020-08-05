const express       = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema        = require('./schema/schema');
const app           = express();

const mongoose = require('mongoose');

const config = { 
        useNewUrlParser   : true,
        useUnifiedTopology: true
};
mongoose.connect("mongodb+srv://vignesh:test@cluster0.qo6wu.mongodb.net/library?retryWrites=true&w=majority", config);
mongoose.connection.once('open', () => {
        console.log("Connected to MongoDB");
});


app.use("/graphql", graphqlHTTP({
        schema   : schema,
        graphiql : true
}));

app.listen(5000, ()=> console.log("Server running"));

