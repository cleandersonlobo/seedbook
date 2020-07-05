import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import IconPaint from 'assets/svg/paint.svg';
import { gloablStyles } from 'styles';
import { Icon } from './styles';

const Canvas: React.FC = () => {
  return (
    <>
      <View
        style={[
          gloablStyles.alignCenter,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            paddingVertical: 10,
          },
        ]}
      >
        <TouchableOpacity>
          <Icon name="microphone" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="camera" size={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="pencil" size={40} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1.1,
          borderColor: 'black',
          borderWidth: 2,
          backgroundColor: 'white',
        }}
      >
        <TouchableOpacity
          style={{ position: 'absolute', right: 10, zIndex: 2, opacity: 0.9 }}
        >
          <IconPaint />
        </TouchableOpacity>
        <SketchCanvas style={{ flex: 1 }} strokeColor="red" strokeWidth={7} />
      </View>
    </>
  );
};

export default Canvas;
