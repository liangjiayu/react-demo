import React, { useState, useEffect } from 'react';
import './index.less';
import { history, request } from 'umi';

// css module name =>  home-page

function ListItems() {
  let [list, setList] = useState([]);

  let getHomeList = () => {
    request('/api/home').then(res => {
      setList(res.list);
    });
  };

  useEffect(() => {
    getHomeList();
  }, []);

  let result = list.map((item: any) => {
    return (
      <div
        key={item.id}
        className="item"
        onClick={() => {
          history.push({ pathname: '/detail', query: { id: item.id } });
        }}
      >
        <div className="item-img">
          <img src={item.img} alt="" />
        </div>
        <div className="item-info">
          <div className="item-title">{item.title}</div>
          <div className="item-subtitle">{item.desc}</div>
          <div className="item-more">
            {item.slide.map((cell: any) => {
              return (
                <div className="cell" key={cell.id}>
                  <div className="cell-img">
                    <img src={cell.img} alt="" />
                  </div>
                  <div className="cell-title">{cell.title}</div>
                  <div className="price">{cell.price.toFixed(2)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  return <div className="list">{result}</div>;
}

export default () => {
  return (
    <div className="home-page">
      <ListItems></ListItems>
    </div>
  );
};
