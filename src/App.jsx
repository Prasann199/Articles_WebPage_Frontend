import Header from "./Components/Header/Header"
import './App.css'
import AddArticles from "./Components/AddArticles/AddArticles"
import DisplayArticles from "./Components/DisplayArticles/DisplayArticles"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UpdateArticle from "./Components/UpdateArticle/UpdateArticle"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/add" element={<AddArticles />} />
        <Route path="/getData" element={<DisplayArticles />} />
        <Route path="/updateArticle/:id" element={<UpdateArticle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
