import React, { memo } from 'react';
import { View } from 'react-native';
export interface InflatterProps {
  horizontal?: number;
  vertical?: number;
}

function RNInflatter({ horizontal = 0, vertical = 0 }: InflatterProps) {
  return (
    <View
      style={{ paddingHorizontal: horizontal, paddingVertical: vertical }}
    />
  );
}

export default memo(RNInflatter);
