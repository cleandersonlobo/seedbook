import React from 'react';
import AlunoMock from 'data/aluno.json';
import Animated from 'react-native-reanimated';

export const AlunoContext = React.createContext(AlunoMock);

export const ThemeModeContext = React.createContext<{
  handleOnTheme?: () => void;
  isDark: boolean;
}>({ isDark: false });

export const CanvasContenxt = React.createContext<{
  canvasRef?: any;
  colorSelected?: string;
  strokeWidth?: number;
  handleSetState: (object: T<any>) => void;
  closePalette?: (visivle: boolean) => void | undefined;
  translateX?: Animated.Value<number> | undefined;
  visible: boolean | null;
}>({
  strokeWidth: 5,
  colorSelected: '#A55FEE',
  handleSetState: () => null,
  translateX: new Animated.Value(0),
  visible: false,
});

export const LoadingOverlayContext = React.createContext<{
  visible: boolean;
  onToggle: () => void;
}>({
  visible: false,
  onToggle: () => null,
});
