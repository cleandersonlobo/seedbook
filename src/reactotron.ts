/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import Reactotron, { openInEditor } from 'reactotron-react-native';

if (__DEV__) {
  Reactotron.configure()
    .useReactNative()
    .use(openInEditor()) // <--- here we go!
    .connect();

  console.tron = Reactotron.log;
}
