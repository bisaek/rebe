import React from 'react'

import { Get, config } from 'rebe'
import 'rebe/dist/index.css'

config({
    url: ["http://localhost:3001"],
    test: "heeee"
})

const App = () => {
    return <ul><Get url="/" ><li classname="heeej"></li></Get></ul>
}

export default App