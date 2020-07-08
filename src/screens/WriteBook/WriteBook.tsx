import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaContainer } from 'styles';
import { BottomTabNavigation } from 'components';
import { Placeholder, PlaceholderLine, Fade } from 'rn-placeholder';
import dimensions from 'styles/dimensions';
import BookEditor from './BookEditor';

const Canvas = React.lazy(() => import('./Canvas'));

const CanvasLoading: React.FC = () => {
  return (
    <View
      style={{
        flex: 1.1,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',
      }}
    >
      <Placeholder Animation={Fade} style={{ height: '100%' }}>
        <PlaceholderLine
          height={dimensions.fullHeight / 2}
          style={{ borderRadius: 0 }}
        />
      </Placeholder>
    </View>
  );
};
const WriteBook: React.FC = () => {
  return (
    <>
      <SafeAreaContainer>
        <ScrollView
          style={{ flexGrow: 1 }}
          contentContainerStyle={{ flex: 1 }}
          contentInsetAdjustmentBehavior="never"
        >
          <BookEditor />
        </ScrollView>
        <React.Suspense fallback={<CanvasLoading />}>
          <Canvas />
        </React.Suspense>
      </SafeAreaContainer>
      <BottomTabNavigation />
    </>
  );
};

export default WriteBook;
