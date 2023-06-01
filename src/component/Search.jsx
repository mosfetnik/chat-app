import React from 'react'

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text"  placeholder='Search a person' />
      </div>

      <div className="userChat">
        <img src="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg" />
        <div className="userChatInfo">
          <sapn>Mosfet</sapn>
        </div>
      </div>
    </div>
  )
}

export default Search  