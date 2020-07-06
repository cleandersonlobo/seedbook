import React from 'react';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';
import { View } from 'react-native';
import { ViewLoading } from './styles';

export const PHBook: React.FC<any> = props => {
  return (
    <View style={{ width: 140, height: 220 }}>
      <Placeholder Animation={Fade}>
        <PlaceholderLine height={115} style={{ borderRadius: 5 }} />
      </Placeholder>
    </View>
  );
};

const PHBooksPanel: React.FC<any> = props => {
  return (
    <ViewLoading {...props}>
      <Placeholder Animation={Fade} style={{ width: 98, height: 98 }}>
        <PlaceholderLine height={20} />
        <PlaceholderLine height={225} style={{ borderRadius: 0 }} />
      </Placeholder>
    </ViewLoading>
  );
};

export default PHBooksPanel;
