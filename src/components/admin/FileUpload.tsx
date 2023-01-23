import React, { ChangeEvent } from 'react';

// interface IFileProps {
//     field:
//     props:
// }

function FileUpload(props: any) {
  const { field, form } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      const reader = new FileReader();
      const imgTag = document.getElementById('myImage');
      if (imgTag) {
        imgTag.title = file.name;
        reader.onload = function (event) {
          imgTag.src = event.target.result;
        };
        reader.readAsDataURL(file);
        form.setFieldValue(field.name, file);
      }
    }
  };

  return (
    <div>
      <input
        type={'file'}
        onChange={(o) => handleChange(o)}
        className={'form-control'}
      />
      <img src={''} alt="" id={'myImage'} />
    </div>
  );
}

export default FileUpload;
