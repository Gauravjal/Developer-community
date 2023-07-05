import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
function Search() {
  return (
    <form style={{position:'relative',padding:'10px',width:'100%'}}>
        <input style={{padding:'10px',width:'90%'}}/>
        <AiOutlineSearch style={{position:'absolute',left:'88%',top:'30%',fontSize:'150%'}}/>
    </form>
  )
}

export default Search