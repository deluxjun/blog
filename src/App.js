import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path={['/login']} />
      <Route component={WritePage} path={['/write']} />
      <Route component={PostPage} path={['/@:username/:postId']} />
      <Route component={RegisterPage} path={['/register']} />
    </>
  );
}

export default App;
