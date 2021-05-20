//to make the GraphQL wrapper of the REST API, we need to work with the RESTDataSource class
import { RESTDataSource } from 'apollo-datasource-rest'

class ITunesSearchAPI extends RESTDataSource {
  constructor() {
    super()
    //this is the base url for our API call, if you had more than one async query 
    //below this base would be the point where the queries diverge
    this.baseURL = 'https://itunes.apple.com/search'
    this.initialize({})
  }
  
  //this is our main fetch call for our iTunes query
  async getITunesSearchResult({ term }) {
    console.log("Getting ITunes Search " + term)
    //use template literals so you can change the search term with each query - 
    //our client side application will provide the search term
    const response = await this.get(`?term=${term}`)
    return this.iTunesSearchResultReducer(JSON.parse(response), term)
  }
  
  // our async call will pass data to this reducer, which will return the data 
  //mapped to our GraphQL schema
  iTunesSearchResultReducer(response, term) {
    var formattedResults = []
    console.log("Result count: " + response.resultCount)
    response.results.forEach(function (res, index) {
      formattedResults.push({
        id: "123",
        kind: res.kind,
        trackId: res.trackId,
        trackName: res.trackName,
        artistId: res.artist,
        artistName: res.artistName
      })
    });
    return formattedResults
  }
}

export { ITunesSearchAPI as default }