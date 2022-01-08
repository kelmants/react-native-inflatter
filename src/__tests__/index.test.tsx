import React from 'react';
import { render } from '@testing-library/react-native';
import RNInflatter from '../';

test('<ProgressiveImage> Component with default values', async () => {
  const { toJSON } = render(<RNInflatter horizontal={20} vertical={20} />);
  expect(toJSON()).toMatchSnapshot();
});
