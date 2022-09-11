import axios from "axios"
import { useEffect, useState } from "react"


const SearchResult = ({ value, list }) => {
  // console.log(list)

  value = value.toLowerCase() //because why not 

  const [matchSearch, setMatchSearch] = useState([])
  const [result, setResualt] = useState([])

  useEffect(() => { // to monitore input changes and act base on 
    if (value !== '') {
      try {
          const temp = []
          list.map((e) => { //find user search
            if (value === e.brand.toLowerCase() ) {
              temp.push(e.id)
            }
            else {
              // console.log('peyda naaaashud') //not found
            }
          })
          setMatchSearch(temp)
        }
        catch {
          console.log('err')
      }
      return () => { // to clean up last search first
        setMatchSearch([])
      }
      }

  }, [value] )
  
  // console.log(matchSearch)

  useEffect(() => {
    const temp = []
    list.map((e) => {
      matchSearch.map((item) => {
        if (e.id === item) {
          temp.push(e)
          setResualt(temp)
        }
      })
    })

  }, [matchSearch])

  console.log(result)
    
  try {
    return (<>
      
      
    </>)
  }
  catch {
    console.log('nashud')
  }
}
  export default SearchResult;
