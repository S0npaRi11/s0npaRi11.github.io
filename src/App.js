import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Error404 from './components/404'
import Error500 from './components/500';

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
      let r = await getRepos()

      r.sort((a,b) => {
        return new Date(b.created_at) - new Date(a.created_at)
      })

      setRepos(r)
    }
    
    fetchRepos()
  }, [])


  return (
    <div className="App">

      <Router>

      <Switch>
        <Route exact path="/">
          <Home repos = { repos }/>
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/projects" >
          <Projects repos = { repos } />
        </Route>

        <Route exact path="/500">
          <Error500 />
        </Route>


        <Route path="*">
          <Error404 />
        </Route>
      </Switch>

      </Router>

      
      
    </div>
  );
}

export default App;

// TODO
  /* 
   * Write down the static content for About Me section
   */
