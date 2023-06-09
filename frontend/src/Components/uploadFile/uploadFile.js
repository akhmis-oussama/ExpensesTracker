import React, { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import { createItem, getItems } from '../../functions';


const UploadFile = () => {
  const [item, setItem] = useState({ title: '', image: '' });
  const [items, setItems] = useState([]);
  const [uploadedImage, setUploadedImage] = useState('');


  // const onSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   const result = await createItem({ item });
  //   setItems([...items, result]);
  //   setUploadedImage(result.image); // Met à jour l'URL de l'image téléchargée
  // };
  

   const onSubmitHandler = (e) => {
     e.preventDefault();
     window.location.href = 'https:www.google.com'; 
   };
  

  useEffect(() => {
    const fetchData = async () => {
      const result = await getItems();
      console.log('fetch data', result);
      setItems(result);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <pre>{JSON.stringify(item, null, '\t')}</pre>
      <form action="" onSubmit={onSubmitHandler}>
        <input
          type="text"
          className="input-field"
          onChange={(e) => setItem({ ...item, title: e.target.value })}
        />
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setItem({ ...item, image: base64 })}
        />
        <div className="right-align">
          <button className="btn">submit</button>
        </div>
      </form>
      {items?.map((item) => (
        <div className="card" key={item._id}>
          <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" style={{ width: '100%', height: 300 }} src={uploadedImage} alt="item" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};


export default UploadFile;
