import './App.css'
import {Routes, Route, Navigate, Link} from 'react-router-dom'
import { PageNotFound } from './pages/PageNotFound'
import { Posts } from './pages/Posts'
import { Post } from './pages/Post'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element = {<Navigate to= '/home'/>}/>
        <Route path='/home' element={<Posts />} />
     <Route path='/home/:itemId' element={<Post />} />
     <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
