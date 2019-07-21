import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <h1>Hello World!!</h1>
        </main>
      </div>
    )
  }
}

export default hot(module)(App)
