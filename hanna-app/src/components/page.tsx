import React from 'react';
import { Main } from '../pages/mainPage';
import { About } from '../pages/aboutPage';
import { Page404 } from '../pages/404Page';
import { FormPage } from '../pages/formPage';

import { Routes, Route } from 'react-router-dom';

class Page extends React.Component {
  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    );
  }
}

export default Page;
