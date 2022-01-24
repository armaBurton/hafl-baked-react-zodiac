import './App.css'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import { zodiac } from './data'

{/* import the zodiac array */}
const current = new Date()

function App() {
  return (
    
    <div className="App">
      {/* import and use the Header. Main, and Footer components here */}
      {/* the Header component needs a string passed in as the `name` prop */}
      <Header name = { `Arma` } />

      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
      <Main zodiac = {{ zodiac }} />

      {/* the Footer component needs a year passed in as the `year` prop */}
      <Footer year = {`${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`} />
    </div>
  )
}

export default App
