import React from 'react';
import './index.less';
import { history } from 'umi';

// css name => detail-page-root
export default () => {
  return (
    <div className="detail-page-root">
      <div className="detail-navbar">
        <i
          className="arrow-icon"
          onClick={() => {
            history.goBack();
          }}
        ></i>
        <div className="title">产品详情</div>
      </div>
      <div className="detail-img">
        <img src="https://iph.href.lu/500x500" alt="" />
      </div>
      <div className="detail-info">
        <div className="price">49.00</div>
        <div className="title">
          弗拉就发垃圾啊了房间啊垃圾分类艾灸疗法弗拉就发垃圾啊了房间啊垃圾分类艾灸疗法弗拉就发垃
        </div>
        <div className="sub-title">
          发了放假啦就樊辣椒了房间啊了解放拉萨机发法律纠纷啦
        </div>
      </div>
      <div className="detail-footer">
        <div className="btn orange">加入购物车</div>
        <div className="btn red">立即购买</div>
      </div>
    </div>
  );
};
