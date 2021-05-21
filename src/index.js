const { GraphQLServerLambda, PubSub } = require('graphql-yoga')
const db  = require('./db')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')
const User = require('./resolvers/User')
const Post = require('./resolvers/Post')

const ITunesSearchAPI = require('./datasource')

const pubsub = new PubSub()

const dataSources = {
  iTunesSearchAPI: new ITunesSearchAPI()
}

const lambda = new GraphQLServerLambda({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Post
  },
  context: {
    db,
    pubsub,
    dataSources
  }
})

exports.server = lambda.graphqlHandler
exports.playground = lambda.playgroundHandler