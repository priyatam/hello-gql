const ITunesQuery = {
    iTunesSearch: (_, { term }, { dataSources }) =>
    dataSources.iTunesSearchAPI.getITunesSearchResult({ term })
  }

module.exports = ITunesQuery