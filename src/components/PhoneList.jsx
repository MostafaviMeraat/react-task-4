import React, { useEffect, useState } from "react"
import { axios } from 'axios'
import SearchResult from "./SearchResult"
import Images from "./Images"


const PhonesList = ({ list, value }) => {

  const [isTrue, setIsTrue] = useState(false) 
  const [image, setImage] = useState ([])

  const handleClick = (item) => {
    setIsTrue(!isTrue)
    setImage(item)
  }
  const close = () => {
    setIsTrue(false)
  }


  try {
      if (value === '') {
        return (<>
          {isTrue && <div className='popUp'>
            {/* <div className="popUpWrapper"> */}
              <i className="fa-solid fa-square-xmark" onClick={close}></i>
              <Images image={image} />
            {/* </div> */}
          </div>}
            
        <div class="wrapper">
          <main >
            {list.map((item, index) => {
              return (<>
                <div key={index} className='item' style={{ backgroundImage: "url(" + item.thumbnail + ")", opacity: '.5' }} onClick={() => { handleClick(item.images)}}>
                  <p><span>Category: </span>{item.category}</p>
                  <p><span>Brand: </span>{item.brand}</p>
                  <p><span>Title: </span>{item.title}</p>
                  <p><span>Description: </span>{item.description}</p>
                  <p><span>Price: </span>{item.price}</p>
                  <p><span>Rating: </span>{item.rating}</p> 
                </div> 
              </>)
            })}
          </main>
        </div>
      </>)}
      else {
        return (<>
          <SearchResult value={value} list={list} />
          
        </>)
    }
  }
  catch {
    console.log('errPhoneList')
  }

}

export default PhonesList