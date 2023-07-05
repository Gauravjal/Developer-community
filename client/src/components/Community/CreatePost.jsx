import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import Dropzone from 'react-dropzone';
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import {createPost} from "../../actions/community"

function CreatePost() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  var User = useSelector((state) => state.Users);
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);

  const handleTextChange = (value) => {
    setText(value);
    console.log(text);
  };

  const handleImageDrop = (acceptedFiles) => {
    setImages((prevImages) => [...prevImages, ...acceptedFiles]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your post submission logic here
    // You can access the text and images state variables to get the entered text and uploaded images
    if(text==="")
    alert("Please enter post")
    else
    dispatch(createPost({postBody:text,userPosted:User?.name,userId:User?._id},navigate));

    console.log('Text:', text);
    console.log('Images:', images);
  };

  return (
    <div style={{display:'flex',paddingTop:'50px'}}>
    <LeftSideBar />
    <div style={{borderLeft:'1px solid black',borderRight:'1px solid black',width:'100%',height:'100vh',justifyContent:'center',padding:'10px'}}>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <ReactQuill
            value={text}
            onChange={handleTextChange}
            placeholder="Create a community post"
          />
        </div>
        <div>
          <Dropzone onDrop={handleImageDrop} multiple={true}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <button>Select images</button>
              </div>
            )}
          </Dropzone>
        </div>
        {images.length > 0 && (
          <div>
            <h3>Selected Images:</h3>
            <ul>
              {images.map((file, index) => (
                <li key={index}>
                  {file.name}{' '}
                  <button type="button" onClick={() => removeImage(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <br/>
        <button type="submit">Post</button>
      </form>
      </div>
      <RightSideBar />
    </div>
  );
}

export default CreatePost;
