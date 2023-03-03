import React from 'react'
import {TrimmerPlayPause} from '../TrimmerPlayPause'
import {TrimmerWrapper} from '../TrimmerWrapper'
import * as Styled from './styled'

export const TrimmerContainer = () => {
  return (
    <Styled.TrimmerContainer>
      <TrimmerPlayPause/>
      <TrimmerWrapper/>
    </Styled.TrimmerContainer>
  );
};
