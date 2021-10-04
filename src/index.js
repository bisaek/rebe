import React, { useState} from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import ReactDOMServer from 'react-dom/server';

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
  baseUrl = 0,
  children = null,
}) => {
  const [res, setRes] = useState({})
  let output = <label>error</label>
  let site; 

  baseUrl == 'null' ? site = url : site = Config.url[baseUrl] + url

  // connect to the api
  axios.get(site)
    .then(response => {
      if (data == "") setRes(response.data)
      else setRes(response.data[data])
  })

  // create output
  if (children == null) {
    typeof(res) == "object" ? 
      output = Object.keys(res).map( obj => <li> {res[obj]} </li>) : output = res
  } else {
    // custom parents
    typeof(res) == "object" ?
      output = Object.keys(res).map( obj => React.cloneElement(children, { children: res[obj] })) :
      output = React.cloneElement(children, { children: res })
  }
  


  // return output
  return output
}