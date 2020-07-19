import React, { useEffect, useState, useReducer } from 'react';
import './index.less';
import { history, request } from 'umi';
import NavberBox from '../../components/NavberBox';
import { cartState, cartReducer } from '../../store/cart';
import Dialog from '@/components/Dialog';

// css name => detail-page-root
export default () => {
  const [detail, setDetail] = useState(null as any);
  const [cartData, cartDispatch] = useReducer(cartReducer, cartState);

  // Dialog prop and methods
  const [msgBox, setMsgBox] = useState({
    visible: false,
    title: '温馨提示',
    msg: '添加成功',
    onCancel: () => {
      setMsgBox({
        ...msgBox,
        visible: false,
      });
    },
    onConfirm: () => {
      history.push('/result');
    },
  });

  const getDetailData = () => {
    request('/api/detail', { params: { id: history.location.query.id } }).then(
      res => {
        setDetail(res);
      },
    );
  };

  const addCart = () => {
    cartDispatch({
      type: 'ADD_CART',
      payload: { ...detail, timeId: new Date().getTime() },
    });
    setMsgBox({ ...msgBox, visible: true });
  };

  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <div className="detail-page-root">
      <NavberBox name="产品详情"></NavberBox>

      <Dialog {...msgBox} confirmText="结算页面"></Dialog>

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
        <div className="btn orange" onClick={addCart}>
          加入购物车
        </div>
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
