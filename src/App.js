import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'

// Route all the pages here

function App() {

  const [repos, setRepos] = useState([])

  const getRepos = async () => {

    const URL = 'https://api.github.com/users/s0npaRi11/repos'

    const data = await fetch(URL)

    return data.json()

  }

  useEffect(() => {
    
    const fetchRepos = async () => {
      const r = await getRepos()
      console.log(r)
      setRepos(r)
    }
    
    fetchRepos()
  }, [])


  return (
    <div className="App">

      <Router>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/projects">
          <Projects repos={ repos } />
        </Route>

        <Route exact path="/">
          <Home repos = { repos }/>
        </Route>

      </Router>
      
    </div>
  );
}

export default App;

// TODO
  /* 
   * Add descriptions to all the repos
   * Write down the static content for About Me section
   * On home, only display the repos that are recently updated
   * On projects, sort the repos based on update time
   */
