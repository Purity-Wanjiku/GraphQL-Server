var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var {buildSchema} = require('graphql');

// GraphQL Schema
//the return type of message is  a string
var schema = buildSchema(`
type Query{
    message: String     
}
`);

// Implement a resolver which we can attch a function which is called every time the schema needs to be executed to access a query
var root = {
    message: () => 'Hello World!'
};

// Setting up the express server and attach a GraphQL endpoint to the server
var app = express();
app.use('/graphql', graphqlHTTP({
    schema : schema, 
    rootValue : root,
    graphiql : true   //tool running in the browser which gives a UI, such that when you access the endpoint an dbe able to directly type the graphql query
}));

// start up server
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));