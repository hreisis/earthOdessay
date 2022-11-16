import React, { useState } from 'react';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">

      <UploadForm />
      <ImageGrid />
      {/* { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )} */}
    </div>
  );
}

export default App;
