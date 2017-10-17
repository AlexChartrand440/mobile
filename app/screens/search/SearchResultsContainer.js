// @flow

import { createPaginationContainer, graphql } from 'react-relay';

import SearchResults from './SearchResults';

export default createPaginationContainer(
  SearchResults,
  {
    flights: graphql`
      fragment SearchResultsContainer_flights on RootQuery {
        allFlights(search: $search, first: $count, after: $after)
          @connection(key: "SearchResultsContainer_allFlights") {
          edges {
            cursor
            node {
              ...SearchResultRow_node
            }
          }
        }
      }
    `,
  },
  {
    query: graphql`
      query SearchResultsContainerQuery(
        $search: FlightsSearchInput!
        $count: Int!
        $after: String
      ) {
        ...SearchResultsContainer_flights
      }
    `,
    getVariables: (props, { count, cursor }, fragmentVariables) => ({
      ...fragmentVariables,
      count,
      after: cursor,
    }),
  },
);
