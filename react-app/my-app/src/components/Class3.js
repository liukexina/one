import React, { Component } from 'react';
import	{
    BrowserRouter as	Router,	
    Route,	
    Link,
    Switch,
    withRouter,
    Prompt,
    NavLink
  }	from	"react-router-dom";

const Page1 = () =>{
    return(
        <div>
            <h1>page1</h1>
        </div>
    )
}
const Page2 = () =>{
    return(
        <div>
            <h1>page2</h1>
        </div>
    )
}
//自定义连接一直渲染在当前页面  但是若不触发他 他的match为空  触发的时候有值
const MenuLink = ({to,label}) =>{
    return(
        <Route 
            path={to} 
            children = {
                ({match})=>{    //res  :history location match
                    console.log(match);
                    return(
                        <div>
                            {to}
                            {label}
                            <Link to={to}>{label}</Link>
                        </div>
                    )
                    
                }
             }
         />
    )
}
//编程式导航
const RouterChange = withRouter(({history})=>{
    return(
        <div>
            <button onClick={() => {history.push('/page2')}}>编程式导航</button>
        </div>
    )
})
class Class3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            prompt:true
        }
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <MenuLink to='/page3' label="这是一个自定义链接1"/>
                        <MenuLink to='/page4' label="这是一个自定义链接2"/>
                        <NavLink to="/page1" activeStyle={{color:'red'}} isActive={()=>false}>页面1</NavLink>   
                         {/* navlink   点击自定义加了属性class = "active" 也可以通过activeClassName =‘bb' 改变类名 */}
                         {/* activeStyle 选中状态 */}
                         {/* isActive 返回函数boolean  是否选中添加状态值 false不加 true 加 */}
                        <Link to="/page2">页面2</Link>
                        <Prompt 
                            when={this.state.prompt}    //true（检测是否离开当前页面） or false（不检测）
                            message="确定离开"
                        />
                        <RouterChange></RouterChange>
                        <Route path="/page1" component={Page1}></Route>
                        <Route path="/page2" component={Page2}></Route>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Class3;