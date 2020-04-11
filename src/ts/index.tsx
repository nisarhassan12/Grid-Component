import * as React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
    <p>App.</p>
)

const root = document.querySelector('#app')

console.log(root)

ReactDOM.render(<App />, root)