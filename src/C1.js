import React,{Component} from "react";
import axios from 'axios';

class C1 extends React.Component{
    state = {sinit: false, msg: ""}
    componentDidMount() {
        axios.get(`/test`)
            .then(res => {
                console.log(res)
                console.log(res.data);
                this.setState({sinit:true,msg:res.data.msg})
        })
    }

    render() {

        if(!this.state.sinit){
            return (
            <>
            <div>
                this is from component one when not initialised
            </div>
            </>);
        }
        return (<><div>this is when initialization is done:- {this.state.msg}</div></>);
        
    } 
}

export default C1;
