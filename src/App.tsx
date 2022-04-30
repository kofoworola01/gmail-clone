import React, {Fragment} from 'react'
import Navbar from './components/navbar/navbar'
import  GlobalStyle  from './globalStyles.styled'

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
    </Fragment>
  )
}

export default App
