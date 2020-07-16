import React from 'react';
import './index.less';
import { history } from 'umi';

export default () => {
  return (
    <div className="form-page-root">
      <div className="form-group">
        <div className="form-title">Input</div>
        <input className="form-control" type="text" />
      </div>

      <div className="form-group">
        <div className="form-title">Check</div>
        <label className="check-label">
          <input type="checkbox" />
          <span className="check-text">项目一</span>
        </label>
        <label className="check-label">
          <input type="checkbox" />
          <span className="check-text">项目一</span>
        </label>
      </div>

      <div className="form-group">
        <div className="form-title">Radio</div>
        <label className="check-label">
          <input type="radio" />
          <span className="check-text">项目一</span>
        </label>
        <label className="check-label">
          <input type="radio" />
          <span className="check-text">项目一</span>
        </label>
      </div>

      <div className="form-group">
        <div className="form-title">select</div>
        <select className="form-control">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <button className="form-button">提交</button>
    </div>
  );
};
