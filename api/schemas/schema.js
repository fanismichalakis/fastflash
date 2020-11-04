const graphql = require('graphql');
const Card = require('../models/card');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean,

} = graphql;


const CardType = new GraphQLObjectType({
    name: 'Card',
    fields: ( ) => ({
        id: { type: GraphQLInt },
        library: { type: GraphQLString },
        recto_def: { type: GraphQLString },
        verso_def: { type: GraphQLString },
        recto: { type: GraphQLString },
        verso: { type: GraphQLString },
        position: {type: GraphQLBoolean},

    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        cards: {
            type: new GraphQLList(CardType),
            resolve(parent, args){
                return Card.find({});
            }
        },
        card: {
            type: CardType,
            args: { id: { type: GraphQLInt } },
            resolve(parent, args){
                return Card.findOne({ id: args.id});
            }
        },
}}
);
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCard: {
            type: CardType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt) },
                library: { type: new GraphQLNonNull(GraphQLString) },
                recto_def: { type: new GraphQLNonNull(GraphQLString) },
                verso_def: { type: new GraphQLNonNull(GraphQLString) },
                recto: { type: new GraphQLNonNull(GraphQLString) },
                verso: { type: new GraphQLNonNull(GraphQLString) },
                position: { type: new GraphQLNonNull(GraphQLBoolean) },
            },
            resolve(parent, args){
                let card = new Card({
                    id: args.id,
                    library: args.library,
                    recto_def: args.recto_def,
                    verso_def: args.verso_def,
                    recto: args.recto,
                    verso: args.verso,
                    position: args.position,
                });
                return card.save();
            }
        },
        removeCards: {
            type: CardType,
            args: {},
            resolve(parent, args){
                return Card.remove({});
            }
        },
        flipCard: {
            type: CardType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt) },
                position: { type: new GraphQLNonNull(GraphQLBoolean) }
            },
            resolve(parent, args) {
                return Card.where({ id: args.id }).update({ position: !args.position });
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});