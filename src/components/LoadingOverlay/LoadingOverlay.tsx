import React, { useContext } from 'react';
import { View } from 'react-native';
import { BallIndicator } from 'react-native-indicators';
import { ThemeContext } from 'styled-components';
import styles from './styles';

const LoadingOverlay: React.FC<{ visible: boolean }> = ({
  visible = false,
}) => {
  const { colors } = useContext(ThemeContext);
  if (!visible) return null;
  return (
    <View style={[styles.container, styles.overlay]}>
      <View>
        <BallIndicator size={40} color={colors.purple.main} />
      </View>
    </View>
  );
};

export default LoadingOverlay;
