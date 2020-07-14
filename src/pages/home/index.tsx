import React from 'react';
import './index.less';
import { history } from 'umi';

// page name =>  home-page

export default () => {
  return (
    <div className="home-page">
      <div
        className="title"
        onClick={() => {
          history.push('/list');
        }}
      >
        home
      </div>
    </div>
  );
};
