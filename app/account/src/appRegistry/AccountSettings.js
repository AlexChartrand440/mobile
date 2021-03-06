// @flow strict

import * as React from 'react';
import { WithNativeNavigation } from '@kiwicom/mobile-shared';
import { Settings as AccountSettingsStack } from '@kiwicom/account-native';

import WithAccountStack from '../WithAccountStack';

type Props = {|
  +onBackClicked: () => void,
  +token: string,
|};

class AccountSettings extends React.Component<Props> {
  render() {
    return (
      <WithAccountStack {...this.props}>
        <AccountSettingsStack />
      </WithAccountStack>
    );
  }
}

export default WithNativeNavigation(AccountSettings, 'AccountSettings');
