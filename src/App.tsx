import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'

/** styles */
import GlobalStyle from 'components/GlobalStyle'
import theme from 'theme'

/** pages */
import MovieDetail from 'components/pages/MovieDetail'
import Home from 'components/pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/movie/:id" exact>
            <MovieDetail />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
