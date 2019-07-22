import React,{Component} from 'react'
import store from '../store'    //简单
import {connect} from 'react-redux'

const add = (num)=>{
    // console.log('add');
    return{
        type:"ADD",
        step:5
    }
}

class Class6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:10
        }
    }
    addHandle(){
        // store.dispatch(add());
        // this.setState({
        //     count:store.getState().count
        // })
        this.props.add()
    }
    render(){
        return(
            <div>
                <h1>{this.props.count}</h1>
                <div><button onClick={this.addHandle.bind(this)}>add</button></div>
            </div>
        )
    }
}


//引用多的话
const mapStateToProps = (state)=>{
    return({
        count:state.count
    })
}
const mapDispatchToProps = (dispatch)=>{
    return{
        add:(num)=>dispatch(add(num))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Class6);