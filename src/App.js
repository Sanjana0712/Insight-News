import './App.css';
import React, { useEffect } from 'react'
import {useState}from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { auth, signInWithGoogle, logOut } from './firebase';
import userEvent from '@testing-library/user-event';

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const[theme, setTheme] = useState('light');
  const[user, setUser] = useState(null);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

useEffect(() => {
  auth.onAuthStateChanged(setUser);
  },[]);

  return (
    <div className={theme}>
      <Router>
        <NavBar toggleTheme={toggleTheme} theme={theme} user={user} signIn={signInWithGoogle} logOut={logOut}/>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" theme={theme}/>}
          />
          <Route
            exact
            path="/business"
            element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" theme={theme}/>}
          />
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" theme={theme}/>}
          />
          <Route
            exact
            path="/general"
            element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" theme={theme}/>}
          />
          <Route
            exact
            path="/health"
            element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" theme={theme}/>}
          />
          <Route
            exact
            path="/science"
            element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" theme={theme}/>}
          />
          <Route
            exact
            path="/sports"
            element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" theme={theme}/>}
          />
          <Route
            exact
            path="/technology"
            element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" theme={theme}/>}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
