import React from 'react';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';
import { Button } from './styles';

const CardLoading: React.FC = () => {
  return (
    <Button>
      <Placeholder Animation={Fade} style={{ width: 98, height: 98 }}>
        <PlaceholderLine width={98} height={98} />
      </Placeholder>
    </Button>
  );
};

export default CardLoading;
