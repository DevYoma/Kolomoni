import './App.scss'
import Benefits from './components/Benefits/Benefits'
import Features from './components/Features/Features'
import Hero from './components/Hero/Hero'
import Join from './components/Join/Join'
import Navbar from './components/Navbar/Navbar'
import ReadArticle from './components/ReadArticle/ReadArticle'

function App() {

  return (
    <div className="app">
      <div className="app__container">
        <Navbar />
        <Hero />
        <Features />
      </div>
      <Benefits />
      <div className="app__container">
        <Join />
        <ReadArticle />
      </div>
    </div>
  )
}

export default App
