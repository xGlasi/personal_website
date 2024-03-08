import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Blog from './Blog.jsx';

function App() {
  return (
    <div className="bg-slate-900 flex flex-col h-screen">
    <Router>
      <Header/>
      <main className="flex-grow overflow-auto">
          <Blog/>
        </main>
      <Footer/>
    </Router>
    </div>

  );
}

export default App;