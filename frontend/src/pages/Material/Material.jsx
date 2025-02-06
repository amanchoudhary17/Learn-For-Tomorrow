import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Material = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      setMessage('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:9090/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data.message);
      fetchFiles(); 
    } catch (error) {
      setMessage('Could not upload the file!');
      console.error('File upload error:', error);
    }
  };

  const fetchFiles = async () => {
    try {
      const response = await axios.get('http://localhost:9090/files');
      setFiles(response.data);
    } catch (error) {
      console.error('Error fetching files:', error);
      setMessage('Could not fetch files!');
    }
  };

  const downloadFile = async (fileUrl) => {
    try {
      const response = await axios.get(fileUrl, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileUrl.split('/').pop());
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading file', error);
      setMessage('Could not download the file!');
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='blog-section text-light py-5'>
      <div className='container d-flex flex-column align-items-center'>
        <div className='mt-5 py-5'>
          <h2 className='text-center text-capitalize'>Upload and Download Files</h2>
        </div>
        
        <div className="upload-section mb-5">
          <input type="file" onChange={handleFileChange} className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'/>
          <button onClick={handleFileUpload} className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Upload</button>
          <p className='mt-3'>{message}</p>
        </div>

        <div className="container mb-4">
          <input
            type="text"
            placeholder="Search Docs..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="input_box"
          />
        </div>

        <div className='row g-4 mt-5'>
          {filteredFiles.map((file) => (
            <div key={file.id} className='col-md-6 col-lg-4'>
              <Card className='h-100 shadow scale-hover-effect'>
                <Card.Body className='p-md-5'>
                  <Card.Title>{file.name}</Card.Title>
                  <Card.Text>Type: {file.type}</Card.Text>
                  <Card.Text>Size: {file.size} bytes</Card.Text>
                  <button onClick={() => downloadFile(file.url)} className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Download</button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Material;
