import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import { firebase } from '../../firebase';

const FileUploader = ({ dir, filename, defaultImg, defaultImgName, resetImage }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [fileURL, setFileURL] = useState('');

  const handleUploadStart = () => {
    setIsUploading(true);
  };

  const handleUploadError = (error) => {
    console.log(error);
    setIsUploading(false);
  };

  const handleUploadSuccess = (uploadedFilename) => {
    setIsUploading(false);
    console.log("dir:", dir);
    console.log("uploadedFilename:", uploadedFilename);
    uploadedFilename &&
      firebase
        .storage()
        .ref(`players/${uploadedFilename}`)
        .getDownloadURL()
        .then((url) => {
          setFileURL(url);
        });
    uploadedFilename && filename && filename(uploadedFilename);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleUploadStart();
      const uploadTask = firebase.storage().ref('players').child(file.name).put(file);

      uploadTask.on(
        'state_changed',
        null,
        (error) => {
          handleUploadError(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            handleUploadSuccess(file.name);
          });
        }
      );
    }
  };

  const handleRemove = () => {
    setFileURL('');
    filename && filename('');
    // Clear the file input value
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  // Method to handle uploading again and resetting the image
  const uploadAgain = () => {
    setFileURL('');
    setIsUploading(false);
    resetImage();
  };

  return (
    <div>
      {!fileURL && (
        <div>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
      )}

      {isUploading && (
        <div className="progress" style={{ textAlign: 'center', margin: '30px 0' }}>
          <CircularProgress style={{ color: '#98c6e9' }} thickness={7} />
        </div>
      )}

      {fileURL && (
        <div className="image_upload_container">
          <img style={{ width: '100%' }} src={fileURL} alt={fileURL} />
          <div className="remove" onClick={uploadAgain}>
            Remove
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;


// import React, { useState } from 'react';
// import { CircularProgress } from '@mui/material';
// import { firebase } from '../../firebase';

// const FileUploader = ({ dir, filename, defaultImg, defaultImgName, resetImage }) => {
//   const [isUploading, setIsUploading] = useState(false);
//   const [fileURL, setFileURL] = useState('');

//   const handleUploadStart = () => {
//     setIsUploading(true);
//   };

//   const handleUploadError = (error) => {
//     console.log(error);
//     setIsUploading(false);
//   };

//   const handleUploadSuccess = (uploadedFilename) => {
//     setIsUploading(false);
//     console.log("dir:", dir);
//     console.log("uploadedFilename:", uploadedFilename);
//     uploadedFilename &&
//       firebase
//         .storage()
//         .ref(`/api/${dir}`)
//         .child(uploadedFilename)
//         .getDownloadURL()
//         .then((url) => {
//           setFileURL(url);
//         });
//     uploadedFilename && filename && filename(uploadedFilename);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       handleUploadStart();
//       const uploadTask = firebase.storage().ref().child(file.name).put(file);

//       uploadTask.on(
//         'state_changed',
//         null,
//         (error) => {
//           handleUploadError(error);
//         },
//         () => {
//           uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//             handleUploadSuccess(file.name);
//           });
//         }
//       );
//     }
//   };

//   const handleRemove = () => {
//     setFileURL('');
//     filename && filename('');
//     // Clear the file input value
//     const fileInput = document.querySelector('input[type="file"]');
//     if (fileInput) {
//       fileInput.value = '';
//     }
//   };

//   // Method to handle uploading again and resetting the image
//   const uploadAgain = () => {
//     setFileURL('');
//     setIsUploading(false);
//     resetImage();
//   };

//   return (
//     <div>
//       {!fileURL && (
//         <div>
//           <input type="file" accept="image/*" onChange={handleFileChange} />
//         </div>
//       )}

//       {isUploading && (
//         <div className="progress" style={{ textAlign: 'center', margin: '30px 0' }}>
//           <CircularProgress style={{ color: '#98c6e9' }} thickness={7} />
//         </div>
//       )}

//       {fileURL && (
//         <div className="image_upload_container">
//           <img style={{ width: '100%' }} src={fileURL} alt={fileURL} />
//           <div className="remove" onClick={uploadAgain}>
//             Remove
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileUploader;






// import React, { useState } from 'react';
// import { CircularProgress } from '@mui/material';
// import { firebase } from '../../firebase';

// const FileUploader = ({ dir, filename }) => {
//   const [isUploading, setIsUploading] = useState(false);
//   const [fileURL, setFileURL] = useState('');

//   const handleUploadStart = () => {
//     setIsUploading(true);
//   };

//   const handleUploadError = (error) => {
//     console.log(error);
//     setIsUploading(false);
//   };

//   const handleUploadSuccess = (uploadedFilename) => {
//     setIsUploading(false);
//     uploadedFilename &&
//       firebase
//         .storage()
//         .ref(`/api/${dir}`)
//         .child(uploadedFilename)
//         .getDownloadURL()
//         .then((url) => {
//           setFileURL(url);
//         });
//     uploadedFilename && filename && filename(uploadedFilename);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       handleUploadStart();
//       const uploadTask = firebase.storage().ref().child(file.name).put(file);

//       uploadTask.on(
//         'state_changed',
//         null,
//         (error) => {
//           handleUploadError(error);
//         },
//         () => {
//           uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//             handleUploadSuccess(file.name);
//           });
//         }
//       );
//     }
//   };

//   const handleRemove = () => {
//     setFileURL('');
//     filename && filename('');
//     // Clear the file input value
//     const fileInput = document.querySelector('input[type="file"]');
//     if (fileInput) {
//       fileInput.value = '';
//     }
//   };

//   return (
//     <div>
//       {!fileURL && (
//         <div>
//           <input type="file" accept="image/*" onChange={handleFileChange} />
//         </div>
//       )}

//       {isUploading && (
//         <div className="progress" style={{ textAlign: 'center', margin: '30px 0' }}>
//           <CircularProgress style={{ color: '#98c6e9' }} thickness={7} />
//         </div>
//       )}

//       {fileURL && (
//         <div className="image_upload_container">
//           <img style={{ width: '100%' }} src={fileURL} alt={fileURL} />
//           <div className="remove" onClick={()=> this.uploadAgain()}>
//             Remove
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileUploader;


