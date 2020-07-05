import React from 'react';
import AlunoMock from 'data/aluno.json';

export const AlunoContext = React.createContext(AlunoMock);

export const LoadingOverlayContext = React.createContext<{
  visible: boolean;
  onToggle: () => void;
}>({
  visible: false,
  onToggle: () => null,
});
