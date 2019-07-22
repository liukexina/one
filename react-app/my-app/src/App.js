import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Class1 from './components/Class1';
import Class2 from './components/Class2';
import Class3 from './components/Class3';
import Class6 from './components/Class6';
import Class7 from './components/Class7';
import	{
    BrowserRouter as	Router,	
    Route,	
    Link,
    Switch,
    Redirect
  }	from	"react-router-dom";

import {Provider} from'react-redux';
import store from './store';
const Test = ({match}) => {
  console.log(match);
  return(
    <div>
      <h1>这是一个测试组件 {match.params.id}</h1>
    </div>
  )
}
class App extends Component {
  render() {

    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div>
              {/* route中的path 在link中to 包含匹配   所以默认一直存在*/}
              {/* 解决办法：
              1.exact 严格匹配
              2.switch标签 当前组件只渲染一个组件 但是仍然包含匹配 内容不变 将默认的放在最后面*/}

              {/* 渲染：components
                    render  渲染简单的   或者 适用于重定向
                    children */}
              <Link to="/">Class1</Link>  
              <Link to="/class2/100">Class2</Link>
              <Link to="/class3">Class3</Link>
              <Link to="/test/200">Test</Link>
              <Link to="/render">Render</Link>
              <Link to="/class6">Class6</Link>
              <Link to="/class7">Class7</Link>
              <Switch>
                <Route path={'/class2/:id'} component={Class2}></Route>
                <Route path={'/class3'} component={Class3}></Route>
                <Route path={'/test/:id'} component={Test}></Route>
                {/* <Route path={'/render'} render={()=><div><h1>render组件</h1></div>}></Route> */}
                <Route path={'/render'} render={()=><Redirect to='/'></Redirect>}></Route>
                <Route path={'/class6'} component={Class6}></Route>
                <Route path={'/class7'} component={Class7}></Route>
                <Route path={'/'} component={Class1}></Route>
              </Switch>
              {/* <Route exact path={'/'} component={Class1}></Route>
              <Route path={'/class2'} component={Class2}></Route> */}
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
