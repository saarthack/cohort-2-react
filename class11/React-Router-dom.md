React-Router-dom

- install react router dom "npm i react-router-dom"
- in main.jsx "import {BrowserRouter} from 'react-router-dom'"
- wrap <App /> by BrowserRouter in main.jsx file
- In App.jsx "import { Route, Routes } from 'react-router-dom'"
- make <Routes> (collection of all route) and inside <Routes></Routes> make <Route />
- In <Route /> mention path (where to go) and elements (what to render) attributes
- In Navbar Use <Link> by 'react-router-dom' tag to redirect to any specific route 
- Make Navbar Component as well and add it before <Routes> in App.jsx

- Nestes Routes can be made by writing in this way - path="/product/men"
- Dynamic Routes can be made by writing this way - path="/product/:id"

- You can access id by using useParams() hook inside that component you rendered in a Dynamic Route