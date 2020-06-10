import React,{ Component } from 'react';
// 导入组件样式
import './index.css';
// 导入列表组件
import List from './list'

// 步骤：
// 1.模拟数据：state={list:[]}
// 2.使用js 的数组map()
export class Index extends Component {
  state ={
    // 列表数据
    list:[
    ],
    name:'',
    content:''
  }


// 受控组件改变状态数据
handleForm=(e)=> {
  console.log(e.target.value)
  this.setState({
    [e.target.name]:e.target.value
  })
}
//发布评论
handlePublic=()=> {
  let { name, content, list} =this.state;
  if (!name || !content) {
    return alert('评论人或者评论内容不能为空！')

  }

  // 提交新评论
  let nlist =[...list,{id:list.length+1,name:name,content:content}]
  this.setState({
    list:nlist,
    name:'',
    content:''
  })
}


// 渲染页面
render(){
  return (
    <div className="box">
      <h1>评论</h1>
      {/* 发表评论 */}
      <div className="pub">
        <p><input className="test" style={{color:'gree'}} type="text" name="name" value={this.state.name} onChange={this.handleForm} /></p>
        <p><textarea name="content" value={this.state.content} onChange={this.handleForm}></textarea></p>
        <p><button className="btn" onClick={this.handlePublic}>发表评论</button></p>
        <hr className="line"/>
        {/* 评论列表 */}
        <List  list={ this.state.list}/>
        {/* <li className="pline">
          <p>小红</p>
          <p>刚发表过</p>
        </li>
        <li className="pline">
          <p > 小栏</p>
          <p>刚发表过</p>
        </li>
        <li className="nodata">
          <p>暂无评论！</p>
        </li> */}
      </div>
    </div>
  )
}
}