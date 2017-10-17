// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Text, View, Image } from 'react-native';

import SimpleCard from '../../components/visual/cards/SimpleCard';
import Date from '../../components/visual/datetime/Date';
import RouteStop from './RouteStop';
import Duration from './Duration';

import type { SearchResultRow_node } from './__generated__/SearchResultRow_node.graphql';

const SearchResultRowWithoutData = ({
  node,
}: {
  node: SearchResultRow_node,
}) => {
  const { duration, price, legs } = node;
  if (legs) {
    return (
      <SimpleCard>
        {legs.map(leg => {
          if (leg) {
            const { id, departure, arrival, airline } = leg;
            return (
              <View key={id} style={{ flexDirection: 'row' }}>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={{ uri: airline && airline.logoUrl }}
                />
                <View style={{ flexDirection: 'column' }}>
                  <Text>
                    <RouteStop data={departure} /> &rarr;{' '}
                    <RouteStop data={arrival} />
                  </Text>
                  <Text>
                    <Date dateTime={departure && departure.localTime} /> &rarr;{' '}
                    <Date dateTime={arrival && arrival.localTime} />
                  </Text>
                </View>
              </View>
            );
          } else {
            // TODO: log such an event?
          }
        })}

        <Text>
          {price && price.amount} {price && price.currency}
        </Text>
        <Duration minutes={duration} />
      </SimpleCard>
    );
  } else {
    // TODO: log such an event?
  }
};

export default createFragmentContainer(
  SearchResultRowWithoutData,
  graphql`
    fragment SearchResultRow_node on Flight {
      duration
      price {
        amount
        currency
      }
      legs {
        id
        airline {
          name
          logoUrl
        }
        departure {
          localTime
          ...RouteStop
        }
        arrival {
          localTime
          ...RouteStop
        }
      }
    }
  `,
);
