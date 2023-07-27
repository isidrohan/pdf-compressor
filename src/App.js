// App.js

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import reducePDFSize from './pdfUtils';


function App() {
  const [outputFile, setOutputFile] = useState(null);

  const handleDrop = async (acceptedFiles) => {
    try {
      const inputFile = acceptedFiles[0];

      const outputBlob = await reducePDFSize(inputFile);
      setOutputFile(outputBlob);
    } catch (error) {
      console.error('Error reducing PDF size:', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.pdf',
    onDrop: handleDrop,
  });

  return (
    <div className="App">
      <div className="header">
        <h1 className='title'>PDF COMPRESSOR <hr /></h1>

        <div className='pdf-field' {...getRootProps()} style={{ border: '1px dashed #df5353', padding: '20px', textAlign: 'center' }}>
          <input {...getInputProps()} />
          <p>Drag and drop a PDF file here, or click to select a file</p>
        </div>
      </div>

      <div className="footer">
        {outputFile && (
          <div className='download' style={{ marginTop: '20px' }}>
            <h2>Reduced PDF</h2>
            <a href={URL.createObjectURL(outputFile)} download="compressed.pdf">
              Download Reduced PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;