import React, { useState, useRef, useEffect } from 'react';

import './ImagePicker.css';

const ImagePicker = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;

    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    } else {
      return;
    }
    // props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = (e) => {
    filePickerRef.current.click();
  };

  return (
    <div className="image-picker">
      <input
        ref={filePickerRef}
        type="file"
        required
        accept=".jpg,.png,.jpeg,.gif"
        onChange={pickedHandler}
        style={{ display: 'none' }}
      />
      {previewUrl && <img src={previewUrl} alt="Preview" />}
      <button
        className="button-second"
        onClick={pickImageHandler}
        type="button"
      >
        {!previewUrl && 'Оберіть зображення'}
        {previewUrl && 'Змінити зображення'}
      </button>
    </div>
  );
};

export default ImagePicker;
