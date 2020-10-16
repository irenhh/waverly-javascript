import React from 'react';
import { LoaderContainer } from './style';

const LoaderTemplate = () => (
  <LoaderContainer>
    <div />
    <div />
  </LoaderContainer>
);

export const Loader = React.memo(LoaderTemplate);
