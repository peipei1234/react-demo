// 评论列表组件
import React from 'react';
// 导入组件样式
import  './index.css'

// 渲染列表
const List =(props)=>{
  let {list} = props;
  let items;
  if(list.length) {
    items=list.map((item)=>{
      return (
        <li key={item.id}>
          <p className="pline">{item.name}</p>
          <p> {item.content }</p>
        </li>
      )
    })
  } else {
    items=<li className="nodata"> 暂无评论！</li>
  }
  return (
    <ul className="list">
      {items}
    </ul>
  )
}

export default List;