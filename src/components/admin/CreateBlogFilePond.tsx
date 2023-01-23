import 'filepond/dist/filepond.min.css';
import { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';

import { setOptions } from 'filepond';
// import FilePondPluginFileMetadata from 'filepond-plugin-file-metadata'
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(
  //   FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  //   FilePondPluginFileMetadata
);

type Props = {
  location: { latitude: string; longitude: string };
};
export default function DropZone() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [files, setFiles] = useState<any>([]);
  setOptions({
    // fileMetadataObject: {
    //   latitude: location.latitude,
    //   longitude: location.longitude,
    // },
  });
  return (
    <div className="App">
      <FilePond
        files={files}
        onupdatefiles={(file) => {
          setFiles(file);
        }}
        maxFiles={1}
        server="http://159.223.2.234:8085/create"
        name="fromUpload"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}
