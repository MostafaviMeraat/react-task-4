import React, { useEffect, useState } from "react"
import { axios } from 'axios'
import SearchResult from "./SearchResult"


const PhonesList = ({ list, check, isCheck, value }) => {
  try {
      if (value === '') {
      return (<>
        <div className="wrapper">
          <main>
            {list.map((item, index) => {
              return (<>
                <div key={index} className='item'>
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