const ITunesQuery = {
    iTunesSearch: (_, { term }, { dataSources }) =>
    dataSources.iTunesSearchAPI.getITunesSearchResult({ term })
  }

export { ITunesQuery as default }