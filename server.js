var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var {buildSchema} = require('graphql');

// GraphQL Schema
//the return type of message is  a string
const schema = buildSchema(`
  type Book {
    title: String
    author: String
  }

  type Query {
    getBook: Book
  }
`);

// Implement a resolver which we can attch a function which is called every time the schema needs to be executed to access a query
const root = {
    getBook: () => {
      return { title: 'Sample Book', author: 'John Doe' };
    },
  };

// Setting up the express server and attach a GraphQL endpoint to the server
var app = express();
app.use('/graphql', graphqlHTTP({
    schema : schema, 
    rootValue : root,
    graphiql : true   //tool running in the browser which gives a UI, such that when you access the endpoint an dbe able to directly type the graphql query
}));

// start up server
app.listen(4005, () => console.log('Express GraphQL Server Now Running On localhost:4005/graphql'));