import React from 'react';
import { View } from 'react-native';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';

export const FrindListLoading: React.FC = () => {
  return (
    <View style={{ height: 150, width: 200 }}>
      <Placeholder Animation={Fade} style={{ height: 150 }}>
        <PlaceholderLine height={150} width={200} />
      </Placeholder>
    </View>
  );
};
