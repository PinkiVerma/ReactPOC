import axios from 'axios'
import React, {useReducer, useEffect} from 'react'

function DataFetching() {
    useEffect(() => {
      // axios.get('https://jsonplaceholder.typicod.com/posts')
      // .then()
      // console.log("useEffect CALLED")
    }, [])

    
  return (
    <div>
    DataFetching
    </div>
  )
}

export default DataFetching