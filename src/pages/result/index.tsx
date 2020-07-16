import React from 'react';
import './index.less';
import { history } from 'umi';

export default () => {
  return (
    <div className="result-page-root">
      <div className="page-header">
        <i className="success-icon"></i>
      </div>
      <div className="page-body">
        <div className="title">操作成功</div>
        <div className="desc">
          内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
        </div>
      </div>
      <div className="page-footer">
        <button className="button">提交</button>
      </div>
    </div>
  );
};
