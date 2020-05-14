import '../node_modules/cropperjs/dist/cropper.css';

import CropperComponent, { Cropper } from './index';
import React, { useCallback, useRef } from "react";

import NativeCropper from "cropperjs";

const buttonStyle = {
  border: '1px solid #ccc',
  padding: '5px 15px',
  fontSize: '16px',
  color: 'black',
  background: 'white',
  marginTop: '20px'
};
export const defaultView = () => {
  const image = useRef<HTMLImageElement>();
  const cropImage = useCallback(() => {
    const dataUrl = ((image.current as any).cropper as NativeCropper).getCroppedCanvas({ width: 624 }).toDataURL('image/jpeg', 0.9);
    console.log(dataUrl);
  }, [image]);
  return (<div>
    <div style={{ height: '500px' }}>
      <CropperComponent ref={image} image="https://fengyuanchen.github.io/cropperjs/images/picture.jpg" />
    </div>
    <button style={buttonStyle} onClick={cropImage}>Crop Image</button>
  </div >)
};

export default {
  title: 'Cropper',
  component: Cropper,
  parameters: {
    info: { inline: true },
  }
};