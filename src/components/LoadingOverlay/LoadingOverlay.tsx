import React, { useContext } from 'react';
import { View, Text } from 'react-native';
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
      <View
        style={[styles.viewProgress, { backgroundColor: colors.purple.main }]}
      >
        <BallIndicator size={40} color={colors.white} />
        <Text style={{ textAlign: 'center', color: colors.white }}>
          Aguarde
        </Text>
      </View>
    </View>
  );
};

export default LoadingOverlay;
