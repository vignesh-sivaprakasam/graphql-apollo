const graphql = require('graphql');
const Book    = require('./../models/Book');
const Author  = require('./../models/Author');

const { 
        GraphQLObjectType,
        GraphQLNonNull,
        GraphQLList,
        GraphQLInt,
        GraphQLString,
        GraphQLSchema
} = graphql;


const AuthorType = new GraphQLObjectType({
        name : 'Author',
        description : 'Information about Author',
        fields: () => ({
                id   : {type: GraphQLInt},
                name : {type: GraphQLString},
                age : {type: GraphQLInt},
                books: {
                        type : GraphQLList(BookType),
                        resolve:(parent, args)=>{
                                // return books.filter(book => book.authorId === parent.id);
                        }
                }
        })
});

const BookType = new GraphQLObjectType({
        name: 'Book',
        description: 'Info about book',
        fields: () => ({
                id    : {type: GraphQLInt},
                name  : {type: GraphQLString},
                genre : {type: GraphQLString},
                author : {
                        type: AuthorType,
                        resolve:(book, args) =>{
                                // return authors.find(author => author.id === book.authorId)
                        }
                }
        })
});

const RootQuery = new GraphQLObjectType({
        name : 'RootQuery',
        description : ' Entry point for gql query',
        fields  : () => ({
                book : {
                        type : BookType,
                        args : {id : {type: GraphQLInt}},
                        resolve(parent, args) {
                                // code to get data from db
                                // return books.find(book => book.id === args.id);
                        }
                },
                author : {
                        type : AuthorType,
                        args : {id:{type: GraphQLInt}},
                        resolve(parent, args) {
                                // return authors.find(author => author.id === args.id);
                        }
                },
                books : {
                        type : new GraphQLList(BookType),
                        resolve(){
                                // return books;
                        }
                }
        })
});

const Mutation = new GraphQLObjectType({
        name : "Mutation",
        fields: ()=>({
                addAuthor: {
                        type: AuthorType,
                        args: {
                                name : { type:GraphQLNonNull(GraphQLString) },
                                age  : { type:GraphQLInt}
                        },
                        resolve(parent, args){
                                let author = new Author({
                                        name: args.name,
                                        age : args.age
                                });
                                return author.save();
                        }
                }
        })
});

module.exports = new GraphQLSchema({
        query : RootQuery,
        mutation : Mutation
});