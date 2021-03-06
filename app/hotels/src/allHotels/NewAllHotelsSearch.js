// @flow strict

import * as React from 'react';
import { graphql } from '@kiwicom/mobile-relay';
import { DateFormatter } from '@kiwicom/mobile-localization';

import { HotelsFilterContext, type HotelsFilterState } from '../HotelsFilterContext';
import { type HotelsContextState, HotelsContext } from '../HotelsContext';
import type { NewAllHotelsSearchQueryResponse } from './__generated__/NewAllHotelsSearchQuery.graphql';
import HotelsPaginationContainer from './HotelsPaginationContainer';
import HotelsSearch from './HotelsSearch';
import useHotelsFilter from './useHotelsFilter';

const query = graphql`
  query NewAllHotelsSearchQuery(
    $search: HotelsSearchInput!
    $filter: HotelsFilterInput!
    $options: AvailableHotelOptionsInput
    $first: Int
    $after: String
  ) {
    ...HotelsPaginationContainer_data
  }
`;

const renderAllHotelsSearchList = (propsFromRenderer: NewAllHotelsSearchQueryResponse) => {
  return <HotelsPaginationContainer data={propsFromRenderer} />;
};

const NewAllHotelsSearch = () => {
  const { orderBy }: HotelsFilterState = React.useContext(HotelsFilterContext);
  const {
    checkin,
    checkout,
    currency,
    roomsConfiguration,
    cityId,
    closeHotels: onClose,
  }: HotelsContextState = React.useContext(HotelsContext);
  const hotelsFilter = useHotelsFilter();

  return (
    <HotelsSearch
      shouldRenderDateError={checkin === null || checkout === null}
      onClose={onClose}
      query={query}
      variables={{
        search: {
          cityId,
          checkin: DateFormatter(checkin ?? new Date()).formatForMachine(),
          checkout: DateFormatter(checkout ?? new Date()).formatForMachine(),
          roomsConfiguration,
        },
        filter: hotelsFilter,
        first: 50,
        options: {
          currency,
          orderBy,
        },
      }}
      render={renderAllHotelsSearchList}
    />
  );
};

export default NewAllHotelsSearch;
