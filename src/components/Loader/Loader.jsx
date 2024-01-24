import React from 'react';
import 'react-loader-spinner';
import { Rings } from 'react-loader-spinner';
import { LoaderRing } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderRing>
      <Rings
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
      />
    </LoaderRing>
  );
};
