import React, { MutableRefObject, forwardRef, useEffect } from 'react';

import NativeCropper from 'cropperjs';

export interface Props extends NativeCropper.Options {
  image: string;
  onCropping?(cropper: unknown): void;
}

export const Cropper = (props: Props, ref: MutableRefObject<HTMLImageElement>) => {
  const { image, onCropping, ...cropperOptions } = props;
  useEffect(() => {
    (ref as any).current.cropper = new NativeCropper(ref.current, {
      viewMode: 1,
      aspectRatio: 1,
      dragMode: 'move',
      background: false,
      ...cropperOptions
    })
  })
  return <img ref={ref} src={image} alt="Cropping Image" />;
};

export default forwardRef(Cropper);
