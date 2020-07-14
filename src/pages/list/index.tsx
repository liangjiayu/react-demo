import React from 'react';
import { history } from 'umi';
import './index.less';

function goToPage(path: any) {
  history.push(path);
}

// page name => list-page
export default () => {
  return (
    <div className="list-page">
      <div
        className="title"
        onClick={() => {
          history.goBack();
        }}
      >
        list
      </div>
    </div>
  );
};
