//rcc
import React, { Component } from 'react';
import axios from 'axios'

class Class7 extends Component {
    constructor(props){
        super(props);
        this.state={
            dataList:[]
        }
    }
    componentDidMount(){
        let url = 'https://api.myjson.com/bins/9inum'; 
        let url1 = "https://www.fellow23.com/getData2";
        let url2 = "https://www.fellow23.com/getData3";
        axios.get(url2).then((res)=>{
            // console.log(res);
            this.setState({
                dataList:res.data.data
            })
        })
    }
    render() {
        let com = null;
        let nowList = this.state.dataList;
        console.log(nowList);
        com = nowList.map((items,index)=>{
            return(
                <li key={items.id}>
                    <div>{items.name}</div>
                    <div>
                        <img src={items.img} alt=""/>
                    </div>
                    <div>{items.address}</div>
                </li>
            )
        })
        return (
            <div>
                <ul>
                    {com}
                </ul>
            </div>
        );
    }
}

export default Class7;