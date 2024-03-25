import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx'
import Header from './pages/Header.jsx'
import Footer from './pages/Footer.jsx'
import Newsletter from './pages/Newsletter.jsx';
import Imprint from './pages/Imprint.jsx';
import DataProtection from './pages/DataProtection.jsx';
import Unsubcribe from './pages/Unsubscribe.jsx';
import Subscribe from './pages/Subscribe.jsx';
import BlogPost from './pages/BlogPost.jsx';
import TuringMachine from './components/Blogpost/TuringMachine.jsx';

function App() {
  return (
    <>
      <div className="bg-customDarkGray flex flex-col h-screen">
        <Header/>
        <main className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Blog" element={<Blog/>}/>
            <Route path="/Newsletter" element={<Newsletter/>}/>
            <Route path="/Imprint" element={<Imprint/>}/>
            <Route path="/dataprotection" element={<DataProtection/>}/>
            <Route path="/unsubscribe" element={<Unsubcribe/>}/>
            <Route path="/subscribe" element={<Subscribe/>}/>
            <Route path="/post/:url" element={<BlogPost/>} />
            <Route path="/turing-machine" element={<TuringMachine/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default App;