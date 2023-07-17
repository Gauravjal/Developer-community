import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { fetchPosts } from "../../actions/community";
import Alert from "../Alert/Alert";
function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Set the breakpoint size according to your requirements
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);
  let alertMessage=useSelector((state)=>state.alert);
  useEffect(() => {
    dispatch(fetchPosts());
    console.log(posts?.data);
  }, [dispatch]);
  return (
    <div  style={{ borderLeft:'none',width:'100%',borderTop:'none',marginLeft:isSmallScreen?'10vw':'17vw',marginRight:isSmallScreen?'1vw':'24vw' }}>
      {alertMessage?.data && <Alert type="success" Children={alertMessage?.data} />}
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >
      {posts?.data?.map((post) => {
        return(
        <Post children={post}/>
        )
      })}
      {/* <Post />
      <Post />
      <Post /> */}
      </div>
    </div>
  );
}

export default Home;
