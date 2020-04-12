import * as React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto Mono', sans-serif;
        font-size: 2rem;
        color: #333;
        background: #f4f4f4;
    }
`

import Grid from './components/Grid'

const App = () => (
    <>
        <GlobalStyles />
        <h1>My App</h1>
        <Grid></Grid>
    </>
)

const root = document.querySelector('#app')

console.log(root)

ReactDOM.render(<App />, root)