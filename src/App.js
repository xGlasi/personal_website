import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx'
import Header from './pages/Header.jsx'
import Footer from './pages/Footer.jsx'

function App() {
  return (
    <>
      <div className="bg-slate-950 flex flex-col h-screen">
        <Header/>
      
        <main className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Blog" element={<Blog/>}/>
          </Routes>
        </main>

        <Footer/>
      </div>
    </>

  );
}

export default App;