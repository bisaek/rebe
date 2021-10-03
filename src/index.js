import React, { useState} from 'react'
import styles from './styles.module.css'
import axios from 'axios'

// config
let Config = {
  url: [""],
  test: "heeelo"
}
export const config = (c = Config) => {
  for (let index = 0; index < Object.keys(Config).length; index++) {
    if (c[Object.keys(Config)[index]] != undefined) {
      Config[Object.keys(Config)[index]] = c[Object.keys(Config)[index]];
    }
  }
}


//// Get \\\\
export const Get = ({
  data = "", 
  url = '/', 
  baseUrl = 0
}) => {
  const [res, setRes] = useState({})
  let output = <label>error</label>

  // connect to the api
  axios.get(Config.url[baseUrl] + url)
    .then(response => {
      if (data == "") setRes(response.data)
      else setRes(response.data[data])
  })

  // create output
  typeof(res) == "object" ? 
    output = Object.keys(res).map( obj => <li> {res[obj]} </li>) : output = res


  // return output
  return output
}
