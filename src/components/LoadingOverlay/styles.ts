import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 9999,
  },
  viewProgress: {
    width: 150,
    height: 150,
    backgroundColor: 'purple',
    padding: 20,
    borderRadius: 20,
  },
});

export default styles;
