import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { fetchPosts } from "../../actions/community";
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
  useEffect(() => {
    dispatch(fetchPosts());
    console.log(posts?.data);
  }, [dispatch]);
  return (
    <div  style={{ border: "1px solid black" ,borderLeft:'none',width:'100%',borderTop:'none',marginLeft:'17vw',marginRight:isSmallScreen?'1vw':'24vw' }}>
      {posts?.data?.map((post) => {
        return(
        <Post children={post}/>
        )
      })}
      {/* <Post />
      <Post />
      <Post /> */}
    </div>
  );
}

export default Home;
