import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import Images from "./Images"


const SearchResult = ({ value }) => {
  // console.log(list)

  value = value.toLowerCase() //because why not
  
  const [matchSearch, setMatchSearch] = useState([])
  const [isTrue, setIsTrue] = useState(false) 
  const [image, setImage] = useState([])
  const [result, setResualt] = useState([])

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${value}`)
    .then(res=>res.json())
    .then(data => setResualt(data.products))
  }, [value])

    const handleClick = (item) => {
    setIsTrue(!isTrue)
    setImage(item)
  }

  const close = () => {
    setIsTrue(false)
  }

  // console.log(result)
  try { 
    return (<>
      {isTrue && <div className='popUp'>
        {/* <div className="popUpWrapper"> */}
          <i className="fa-solid fa-square-xmark" onClick={close}></i>
          <Images image={image} />
        {/* </div> */}
      </div>}
      <main className='searchItems'>
        {result.map((item, index) => {
          return (<Fragment key={index}>
            <div onClick={()=>{handleClick(item.images)}} key={index} className='item' style={{ backgroundImage: "url(" + item.thumbnail + ")", opacity: '.3'}}>
              <p><span>Category: </span>{item.category}</p>
              <p><span>Brand: </span>{item.brand}</p>
              <p><span>Title: </span>{item.title}</p>
              <p><span>Description: </span>{item.description}</p>
              <p><span>Price: </span>{item.price}</p>
              <p><span>Rating: </span>{item.rating}</p>
            </div>
          </Fragment> )
        })}
      </main>
      
    </>)
  }
  catch {
    console.log('nashud')
  }
}
  export default SearchResult;
