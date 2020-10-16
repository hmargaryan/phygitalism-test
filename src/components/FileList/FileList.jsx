import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import FileItem from '../FileItem';

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchFiles = async () => {
    try {
      const { data } = await axios.get('http://localhost:3005/data');

      setFiles(data);
      setIsLoaded(true);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  if (isError) {
    return <h2>Something went wrong. Please, reload the page</h2>;
  }

  return isLoaded ? (
    <ol>
      {files.map(({ name, type, time }) => {
        const id = nanoid();
        return <FileItem key={id} name={name} type={type} time={time} />;
      })}
    </ol>
  ) : (
    <h2>Loading...</h2>
  );
};

export default FileList;
