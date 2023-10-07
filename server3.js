var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var {buildSchema} = require('graphql');

// GraphQL Schema
//the return type of message is  a string
const schema = buildSchema(`
type Page {
  pageIndex: Int
  content: String
  tokens: [Token]
}

type Token {
  position: [Int]
  value: String
}

type Book {
  title: String
  author: String
  pages: [Page]
}

type Query {
  getBook: Book
  getBook2:Book
}
`);

// Implement a resolver which we can attch a function which is called every time the schema needs to be executed to access a query
const root = {
  getBook: () => {
    return {
      title: 'A Color of His Own',
      author: 'Leo Lionni',
      pages: [
        {
          pageIndex: 0,
          content: 'Parrots are green',
          tokens: [
            {
              position: [0, 7],
              value: 'parrots',
            },
            {
              position: [8, 11],
              value: 'are',
            },
            {
              position: [12, 17],
              value: 'green',
            },
          ],
        },
        // Add more pages if available
      ],
    };
  },

  getBook2 :  ()=>{
    return{
      "title": "Fishing in the Air",
      "author": "Sharon Creech",
      "pages": [
        {
          "pageIndex": 0,
          "content": "",
          "tokens": []
        },
        {
          "pageIndex": 1,
          "content": "One Saturday, when I was young, my father and I left the house early in the morning, when it was still blue-black outside. The grass left wet marks on our shoes. In the backyard, under stones, we dug up crawly worms and laid them in a can with lumps of damp dirt.",
          "tokens": [
            {
              "value": "one",
              "position": [
                0,
                3
              ]
            },
            {
              "value": "saturday",
              "position": [
                4,
                12
              ]
            },
            {
              "value": "when",
              "position": [
                14,
                18
              ]
            },
            {
              "value": "i",
              "position": [
                19,
                20
              ]
            },
            {
              "value": "was",
              "position": [
                21,
                24
              ]
            },
            {
              "value": "young",
              "position": [
                25,
                30
              ]
            },
            {
              "value": "my",
              "position": [
                32,
                34
              ]
            },
            {
              "value": "father",
              "position": [
                35,
                41
              ]
            },
            {
              "value": "and",
              "position": [
                42,
                45
              ]
            },
            {
              "value": "i",
              "position": [
                46,
                47
              ]
            },
            {
              "value": "left",
              "position": [
                48,
                52
              ]
            },
            {
              "value": "the",
              "position": [
                53,
                56
              ]
            },
            {
              "value": "house",
              "position": [
                57,
                62
              ]
            },
            {
              "value": "early",
              "position": [
                63,
                68
              ]
            },
            {
              "value": "in",
              "position": [
                69,
                71
              ]
            },
            {
              "value": "the",
              "position": [
                72,
                75
              ]
            },
            {
              "value": "morning",
              "position": [
                76,
                83
              ]
            },
            {
              "value": "when",
              "position": [
                85,
                89
              ]
            },
            {
              "value": "it",
              "position": [
                90,
                92
              ]
            },
            {
              "value": "was",
              "position": [
                93,
                96
              ]
            },
            {
              "value": "still",
              "position": [
                97,
                102
              ]
            },
            {
              "value": "blue",
              "position": [
                103,
                107
              ]
            },
            {
              "value": "black",
              "position": [
                108,
                113
              ]
            },
            {
              "value": "outside",
              "position": [
                114,
                121
              ]
            },
            {
              "value": "the",
              "position": [
                123,
                126
              ]
            },
            {
              "value": "grass",
              "position": [
                127,
                132
              ]
            },
            {
              "value": "left",
              "position": [
                133,
                137
              ]
            },
            {
              "value": "wet",
              "position": [
                138,
                141
              ]
            },
            {
              "value": "marks",
              "position": [
                142,
                147
              ]
            },
            {
              "value": "on",
              "position": [
                148,
                150
              ]
            },
            {
              "value": "our",
              "position": [
                151,
                154
              ]
            },
            {
              "value": "shoes",
              "position": [
                155,
                160
              ]
            },
            {
              "value": "in",
              "position": [
                162,
                164
              ]
            },
            {
              "value": "the",
              "position": [
                165,
                168
              ]
            },
            {
              "value": "backyard",
              "position": [
                169,
                177
              ]
            },
            {
              "value": "under",
              "position": [
                179,
                184
              ]
            },
            {
              "value": "stones",
              "position": [
                185,
                191
              ]
            },
            {
              "value": "we",
              "position": [
                193,
                195
              ]
            },
            {
              "value": "dug",
              "position": [
                196,
                199
              ]
            },
            {
              "value": "up",
              "position": [
                200,
                202
              ]
            },
            {
              "value": "crawly",
              "position": [
                203,
                209
              ]
            },
            {
              "value": "worms",
              "position": [
                210,
                215
              ]
            },
            {
              "value": "and",
              "position": [
                216,
                219
              ]
            },
            {
              "value": "laid",
              "position": [
                220,
                224
              ]
            },
            {
              "value": "them",
              "position": [
                225,
                229
              ]
            },
            {
              "value": "in",
              "position": [
                230,
                232
              ]
            },
            {
              "value": "a",
              "position": [
                233,
                234
              ]
            },
            {
              "value": "can",
              "position": [
                235,
                238
              ]
            },
            {
              "value": "with",
              "position": [
                239,
                243
              ]
            },
            {
              "value": "lumps",
              "position": [
                244,
                249
              ]
            },
            {
              "value": "of",
              "position": [
                250,
                252
              ]
            },
            {
              "value": "damp",
              "position": [
                253,
                257
              ]
            },
            {
              "value": "dirt",
              "position": [
                258,
                262
              ]
            }
          ]
        }
      ]
      }

  }


  };

// Setting up the express server and attach a GraphQL endpoint to the server
var app = express();
app.use('/graphql', graphqlHTTP({
    schema : schema, 
    rootValue : root,
    graphiql : true   //tool running in the browser which gives a UI, such that when you access the endpoint an dbe able to directly type the graphql query
}));

// start up server
app.listen(4004, () => console.log('Express GraphQL Server Now Running On localhost:4004/graphql'));