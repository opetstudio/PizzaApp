import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import StyledText from '../StyledText';
import { styles } from './styles';

const propTypes = {
  addedStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  orientation: PropTypes.string,
  text: PropTypes.string,
};

const CopyRight = props => {
  return (
    <View style={[styles.container, props.addedStyle]}>
      <StyledText
        textStyle={
          props.orientation === 'landscape' ? 'h19TnWhiteP' : 'h20TnWhiteP'
        }
        addedStyle={styles.textStyle}
      >
        {props.text}
      </StyledText>
    </View>
  );
};

CopyRight.propTypes = propTypes;

export default CopyRight;
