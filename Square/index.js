import React from 'react';
import '../index.css'
// import ReactDOM from 'react-dom';
// import Board from '../Board'
// import Game from '../Game'

// 单个方格

  export function Square(props) {
  return (
    // 传递点击事件
    <button className="square" style={{backgroundColor:props.value ? (props.value ==="x" ?"blue":"red") :"white"}} onClick={props.onClick}>
      {/* 传递数据 */}
      {props.value}
    </button>
  );
}

export default Square