import React from 'react';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';
import { ViewLoading } from './styles';

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
