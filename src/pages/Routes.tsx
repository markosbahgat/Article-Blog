import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Article from './Article';
import Layout from 'components/Layout/Layout';
import NotFound from './Error';

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Article />} path="/article/:id" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
