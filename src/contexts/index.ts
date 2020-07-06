import React from 'react';
import AlunoMock from 'data/aluno.json';

export const AlunoContext = React.createContext(AlunoMock);

export const ThemeModeContext = React.createContext<{
  handleOnTheme?: () => void;
  isDark: boolean;
}>({ isDark: false });

export const LoadingOverlayContext = React.createContext<{
  visible: boolean;
  onToggle: () => void;
}>({
  visible: false,
  onToggle: () => null,
});
