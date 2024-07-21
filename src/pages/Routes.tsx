import React, {lazy} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Article from './Article';
import Layout from 'components/Layout/Layout';

const NotFound = lazy(() => import('./Error'));
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
