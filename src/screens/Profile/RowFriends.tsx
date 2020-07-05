/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';

const SuspenseLoading: React.FC = () => {
  return (
    <Placeholder
      Animation={Fade}
      style={{ width: 58, height: 58, borderRadius: 58 }}
    >
      <PlaceholderLine width={58} height={58} />
    </Placeholder>
  );
};

interface Props {
  colegas: ColegasProps[];
  usuario: string;
  pos: number;
}

const BtnCircleFirend = React.lazy(() => import('./BtnCircleFirend'));

const RowFriends: React.FC<Props> = ({ colegas, usuario, pos }) => {
  return (
    <>
      {colegas.map((item, index) => (
        <React.Suspense
          fallback={<SuspenseLoading />}
          key={`${pos}_${item.profilepicture}_${index * new Date().getTime()}`}
        >
          <BtnCircleFirend colega={item} usuario={usuario} />
        </React.Suspense>
      ))}
    </>
  );
};

export default RowFriends;
