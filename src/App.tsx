import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ComponentTest from './components/ComponentTest/ComponentTest'
import ErrorBoundary from './utilities/ErrorBoundary'
import ComponentTestAsync from './components/ComponentTest/ComponentTestAsync'

function App() {
  const [name, setName] = useState<string>('')
  useEffect(() => {
    setTimeout(() => {
      debugger
      setName('Juan')
    }, 2000)
  }, [])
  return (
    <div className="App">
      {/* <ErrorBoundary
        fallBackComponent={<>NO ANDAAAA !!</>}
        resetCondition={name}
      > */}
      {/* <ComponentTest /> */}
      {/* <ComponentTest name={null} /> */}
      {/* <ComponentTest name={name} /> */}
      <ComponentTestAsync />
      <ComponentTest name={name} />
      {/* </ErrorBoundary> */}
    </div>
  )
}

export default App
