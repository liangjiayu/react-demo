import React, { useReducer } from 'react';
import './index.less';
import { history } from 'umi';
import { cartState, cartReducer } from '../../store/cart';

export default () => {
  const [cartData, cartDispatch] = useReducer(cartReducer, cartState);

  const delCartItem = (item: any) => {
    cartDispatch({ type: 'DEl_CART', payload: item });
  };

  return (
    <div className="result-page-root">
      <div className="page-header">
        <i className="success-icon"></i>
      </div>
      <div className="page-body">
        <div className="title">购买成功</div>
        {cartData.list.map(i => {
          return (
            <div className="cart-cell" key={i.timeId}>
              <div className="cart-bd">{i.timeId}</div>
              <div
                className="cart-del"
                onClick={() => {
                  delCartItem(i);
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="page-footer">
        <button
          className="button"
          onClick={() => {
            history.push('/');
          }}
        >
          首页
        </button>
      </div>
    </div>
  );
};
