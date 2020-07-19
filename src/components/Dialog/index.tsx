import React from 'react';
import './index.less';

interface DialogProps {
  visible: boolean;
  title?: string;
  msg: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelText?: string;
  confirmText?: string;
}

const Dialog = (props: DialogProps) => {
  return (
    <div style={{ display: props.visible ? 'block' : 'none' }}>
      <div className="ko-mark"></div>
      <div className="ko-dialog">
        <div className="ko-dialog__hd">{props.title}</div>
        <div className="ko-dialog__bd">{props.msg}</div>
        <div className="ko-dialog__ft">
          {props.onCancel && (
            <div className="ko-dialog__btn default" onClick={props.onCancel}>
              {props.cancelText}
            </div>
          )}
          {props.onConfirm && (
            <div className="ko-dialog__btn primary" onClick={props.onConfirm}>
              {props.confirmText}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Dialog.defaultProps = {
  cancelText: '取消',
  confirmText: '确定',
};

export default Dialog;
