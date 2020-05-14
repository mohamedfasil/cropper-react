# cropper-react

[CropperJs](https://github.com/fengyuanchen/cropperjs) as a react component

### Installation

```sh
$ npm install cropper-react
```

You need to import cropper styles from cropperjs

```js
import '../node_modules/cropperjs/dist/cropper.css';
```


### Usage
```js
import Cropper from "cropper-react";
import '../node_modules/cropperjs/dist/cropper.css';

const buttonStyle = {
  border: '1px solid #ccc',
  padding: '5px 15px',
  fontSize: '16px',
  color: 'black',
  background: 'white',
  marginTop: '20px'
};
export const MyCropper = () => {
  const image = useRef<HTMLImageElement>();
  const cropImage = useCallback(() => {
    const dataUrl = image.current.cropper.getCroppedCanvas({ width: 624 }).toDataURL('image/jpeg', 0.9);
    console.log(dataUrl); // do something with the image, save to server etc
  }, [image]);
  return (<div>
    <div style={{ height: '500px' }}>
      <Cropper ref={image} image="https://fengyuanchen.github.io/cropperjs/images/picture.jpg" />
    </div>
    <button style={buttonStyle} onClick={cropImage}>Crop Image</button>
  </div >)
};
```

### Props

Supports same props as [CropperJs](https://github.com/fengyuanchen/cropperjs/blob/master/README.md#options) see [example and docs](https://mohamedfasil.github.io/cropper-react/?path=/docs/cropper--default-view) 


### Development

Want to contribute? Great! please open a PR [here](https://github.com/mohamedfasil/cropper-react/pulls)
