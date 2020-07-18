import React from 'react';
import './index.less';
import { history } from 'umi';

interface NavberBoxProps {
  name: string;
}

const NavberBox = (props: NavberBoxProps) => {
  return (
    <div className="navber-box-wrap">
      <div className="navber-box">
        <i
          className="arrow-icon"
          onClick={() => {
            history.goBack();
          }}
        ></i>
        <div className="title">{props.name}</div>
      </div>
    </div>
  );
};

NavberBox.defaultProps = {
  name: '标题',
};

export default NavberBox;
