import React, { useState } from "react";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
function Search() {
  let users = useSelector((state) => state.Users);
  const [searchData, setSearchData] = useState([]);
  return (
    <form style={{ position: "relative", padding: "10px", width: "100%" }}>
      <input
        style={{ padding: "10px", width: "90%" }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            console.log(users);
            setSearchData(
              users.data?.filter((user) =>
                user.name.toLowerCase().includes(e.target.value.toLowerCase())
              )
            );
          }
        }}
      />
      <AiOutlineSearch
        style={{
          position: "absolute",
          left: "88%",
          top: "30%",
          fontSize: "150%",
        }}
      />
      {searchData?.map((item) => {
        return (
          <div
            style={{
              marginTop: "10px",
              height: "80px",
              border: "1px soid black",
              borderRadius: "10px",
              textDecoration: "none",
              display: "flex",
              flexDirection: "row",
              width: "20vw",
              alignItems: "center",
              padding: "10px",
              marginRight: "10px",
              justifyContent:'space-between',
              boxShadow:'red'
              ,backgroundColor:'#ffffff',
              margin:'auto'
            }}
          >
            <Link
              style={{ textDecoration: "none", display: "flex" }}
              to={`/community/profile/${item._id}`}
            >
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <img
                width="50vw"
                style={{ borderRadius: "60%",height:'50%',border:'1px solid grey'}}
                alt="profile PIC"
                src={`http://localhost:5000/uploads/${item?.avatar}`}
              ></img>
              </div>
              <h4
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding:"20px"
                }}
              >
                {item?.name}
              </h4>
            </Link>

            <button
              onClick={() => {
                //dispatch(followUser(id,currentUser?._id));
              }}
              style={{ height: "45%", borderRadius: "20px"}}
            >
              Follow
            </button>

          </div>
        );
      })}
    </form>
  );
}

export default Search;
