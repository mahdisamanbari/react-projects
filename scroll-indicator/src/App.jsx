
import './App.css'
import Content from './Content'
import ScrollIndicator from './ScrollIndicator'

function App() {
  

  return (
    <>
      <header>
        <div className="container">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Shop</li>
          </ul>
        </div>
      </header>
      <ScrollIndicator/>
      <Content/> 
    </>
  )
}

export default App
