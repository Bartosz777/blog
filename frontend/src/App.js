import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { CreatePost } from './components/CreatePost'
import { Footer } from './components/Footer'
import { Contact } from './pages/Contact'
import { Post } from './pages/Post'
import { Home } from './pages/Home'
import { About } from './pages/About'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {

  const [items, setItems] = useState([]);

  const addPost = (post) => {
    fetch("http://localhost:4000/add", {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(post)
    }).then(res => {return res.json()})
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  const getPosts = () => {
    fetch("http://localhost:4000/").then(res => res.json())
    .then(data => setItems(data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home postList={items}/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/post/:title" element={<Post items={items}/>}/>
        <Route path="/add" element={<CreatePost addPost={addPost} />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
