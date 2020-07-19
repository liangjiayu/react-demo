import React, { useEffect, useState } from 'react';
import './index.less';
import { history, request } from 'umi';
import NavberBox from '../../components/NavberBox';

// css name => detail-page-root
export default () => {
  const [detail, setDetail] = useState(null as any);

  const getDetailData = () => {
    request('/api/detail', { params: { id: history.location.query.id } }).then(
      res => {
        setDetail(res);
      },
    );
  };

  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <div className="detail-page-root">
      <NavberBox name="产品详情"></NavberBox>
      {detail && (
        <div>
          <div className="detail-img">
            <img src={detail.img} alt="" />
          </div>
          <div className="detail-info">
            <div className="price">{detail.price.toFixed(2)}</div>
            <div className="title">{detail.title}</div>
            <div className="sub-title">{detail.desc}</div>
          </div>
        </div>
      )}

      <div className="detail-footer">
        <div className="btn orange">加入购物车</div>
        <div
          className="btn red"
          onClick={() => {
            history.push('/form');
          }}
        >
          立即购买
        </div>
      </div>
    </div>
  );
};
