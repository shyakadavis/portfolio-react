import React, { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
// import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
// import FilePondPluginImageResize from 'filepond-plugin-image-resize'
// import { useDispatch } from 'react-redux'
// import { loginUser, updateUser } from '../../Redux/actions/authActions'
// import { useNotifications } from '@mantine/notifications'
import { RiErrorWarningLine, RiImageEditLine } from 'react-icons/ri';
import { IoIosImages } from 'react-icons/io';
// import { Title, Text, Button, Divider } from '@mantine/core'
import axios from 'axios';

registerPlugin(
  FilePondPluginImagePreview,
  //  FilePondPluginImageCrop, FilePondPluginImageTransform, FilePondPluginImageResize
);


const UploadImage = () => {
  const [files, setFiles] = useState<any[]>([]);
  // const dispatch = useDispatch()
  // const notifications = useNotifications()
  
  return (
    <div className="flex flex-col space-y-5 w-80">
      <FilePond
        // allowImageCrop={true}
        // allowImageTransform={true}
        // imageCropAspectRatio={'1:1'}
        files={files}
        onupdatefiles={(files) => {
          setFiles(files);
        }}
        instantUpload={false}
        server={{
          process: {
            url: 'http://localhost:5000/user/image',
            withCredentials: true,
            method: 'PUT',
            onload: (response) => {
              if (response.error) {
                // notifications.showNotification({
                //     title: 'Error',
                //     message: 'Ha ocurrido un error al actualizar tu imagen',
                //     color: 'pink',
                //     icon: <RiErrorWarningLine />
                // })
              } else {
                // dispatch(loginUser(false))
                // notifications.showNotification({
                //     title: 'Proceso exitoso',
                //     message: 'Tu imagen ha sido actualizada correctamente',
                //     color: 'teal',
                //     icon: <RiImageEditLine />
                // })
              }
              return 0;
            },
          },
        }}
        name="files"
        labelIdle="Upload an Image"
        className="cursor-pointer w-auto"
        stylePanelLayout="integrated"
        // imageResizeTargetWidth={200}
        // imageResizeTargetHeight={200}
      />
      
    </div>
  );
};

export default UploadImage;
