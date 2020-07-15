import React from 'react';
import './index.less';
import { history } from 'umi';

// page name =>  home-page

export default () => {
  function ListItems() {
    let result = [];
    for (let i = 0; i < 10; i++) {
      result.push(
        <div
          className="item"
          key={i}
          onClick={() => {
            history.push('/detail');
          }}
        >
          <div className="item-img">
            <img src="https://iph.href.lu/500x500" alt="" />
          </div>
          <div className="item-info">
            <div className="item-title">麦当劳麦当劳</div>
            <div className="item-subtitle">麦当劳麦当劳</div>
            <div className="item-more">
              <div className="cell">
                <div className="cell-img">
                  <img src="https://iph.href.lu/500x500" alt="" />
                </div>
                <div className="cell-title">麦当劳123</div>
                <div className="price">￥12</div>
              </div>
              <div className="cell">
                <div className="cell-img">
                  <img src="https://iph.href.lu/500x500" alt="" />
                </div>
                <div className="cell-title">麦当劳123</div>
                <div className="price">￥12</div>
              </div>
              <div className="cell">
                <div className="cell-img">
                  <img src="https://iph.href.lu/500x500" alt="" />
                </div>
                <div className="cell-title">麦当劳123</div>
                <div className="price">￥12</div>
              </div>
            </div>
          </div>
        </div>,
      );
    }
    return <div className="list">{result}</div>;
  }

  return (
    <div className="home-page">
      <ListItems></ListItems>
    </div>
  );
};
