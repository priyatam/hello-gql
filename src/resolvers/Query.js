const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users
    }

    return db.users.filter(user => {
      return user.name.toLowerCase().includes(args.query.toLowerCase())
    })
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts
    }

    return db.posts.filter(post => {
      const isTitleMatch = post.title
        .toLowerCase()
        .includes(args.query.toLowerCase())
      const isBodyMatch = post.body
        .toLowerCase()
        .includes(args.query.toLowerCase())
      return isTitleMatch || isBodyMatch
    })
  },
  me() {
    return {
      id: '123098',
      name: 'Mike',
      email: 'mike@example.com'
    }
  },
  post() {
    return {
      id: '092',
      title: 'GraphQL 101',
      body: '',
      published: false
    }
  },

  iTunesSearch(_, { term }, { dataSources }) {
    console.log("Data sources " + dataSources.iTunesSearchAPI)
    dataSources.iTunesSearchAPI.getITunesSearchResult({ term })
  }
}

module.exports = Query;