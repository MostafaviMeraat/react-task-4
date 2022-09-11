import axios from "axios"
import { method } from "lodash"
import { Fragment, useEffect, useState } from "react"


const Images = ({ image }) => {
  console.log(image)

  try {
    return (<Fragment>
      {image.map((image, index) => {
        return (<div>
          <span> </span><img key={index} src={`${image}`} style={{width:'20%vw'}} />
        </div>)
      })}
      
    </Fragment>)
  }
  catch {
    console.log('image Err')
  }
}
export default Images