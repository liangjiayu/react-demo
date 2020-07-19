import React, { useState } from 'react';
import './index.less';
import { history } from 'umi';
import NavberBox from '../../components/NavberBox';
import Dialog from '../../components/Dialog';

export default () => {
  const [form, setForm] = useState({
    input: '',
    checkbox: [] as any[],
    radio: '',
    select: '',
  });

  // 单一属性 通用用于 input radio select
  const handleChange = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // 多选 通常用于 checkbox
  const handleCheckbox = (event: any) => {
    const value = event.target.value;
    const name = event.target.name as 'checkbox'; // 逃避ts的错误，传入name必须为 form 中的属性
    const checked = event.target.checked;
    const checkbox = form[name];

    if (checked) {
      checkbox.push(value);
    } else {
      let i = checkbox.findIndex((i: any) => {
        return i === value;
      });
      checkbox.splice(i, 1);
    }

    setForm({
      ...form,
    });
  };

  // Dialog prop and methods
  const [msgBox, setMsgBox] = useState({
    visible: false,
    title: '弹窗标题',
    msg: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
    onCancel: () => {
      setMsgBox({
        ...msgBox,
        visible: false,
      });
    },
    onConfirm: () => {},
  });

  const sumbitForm = () => {
    const msg = JSON.stringify(form);
    setMsgBox({
      ...msgBox,
      msg,
      visible: true,
      onConfirm: () => {
        history.push('/result');
      },
    });
  };

  return (
    <div className="form-page-root">
      <Dialog {...msgBox}></Dialog>

      <NavberBox name="表单页面"></NavberBox>

      <div className="form-group">
        <div className="form-title">Input</div>
        <input
          className="form-control"
          type="text"
          value={form.input}
          name="input"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <div className="form-title">Check</div>
        <label className="check-label">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="多选1"
            name="checkbox"
            checked={form.checkbox.includes('多选1')}
          />
          <span className="check-text">多选1</span>
        </label>
        <label className="check-label">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="多选2"
            name="checkbox"
            checked={form.checkbox.includes('多选2')}
          />
          <span className="check-text">多选2</span>
        </label>
      </div>

      <div className="form-group">
        <div className="form-title">Radio</div>
        <label className="check-label">
          <input
            type="radio"
            name="radio"
            onChange={handleChange}
            checked={form.radio === '单选1'}
            value="单选1"
          />
          <span className="check-text">单选1</span>
        </label>
        <label className="check-label">
          <input
            type="radio"
            name="radio"
            onChange={handleChange}
            checked={form.radio === '单选2'}
            value="单选2"
          />
          <span className="check-text">单选2</span>
        </label>
      </div>

      <div className="form-group">
        <div className="form-title">select</div>
        <select
          className="form-control"
          name="select"
          onChange={handleChange}
          value={form.select}
        >
          <option value="" disabled hidden>
            请选择
          </option>
          <option value="下拉1">下拉1</option>
          <option value="下拉2">下拉2</option>
          <option value="下拉3">下拉3</option>
        </select>
      </div>

      <button className="form-button" onClick={sumbitForm}>
        提交
      </button>
    </div>
  );
};
