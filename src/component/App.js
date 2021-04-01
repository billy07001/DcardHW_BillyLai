import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import '../style/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            spotLimit: 30            
        }
    }

    componentDidMount(){
        fetch('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON')
          .then(res => res.json())
          .then(json => {
               this.setState({
                   isLoaded: true,
                   items: json
               })
          });
        if (this.scroll) {
            this.scroll.addEventListener("scroll", e => {
              const { clientHeight, scrollHeight, scrollTop } = e.target;
              // const { clientHeight, scrollHeight, scrollTop } = this.scroll;
       
              const isBottom = scrollTop + clientHeight + 20 > scrollHeight;
              console.log(scrollTop, clientHeight, scrollHeight, isBottom);
        });   
     }
    }
    render(){

    var {isLoaded, items} = this.state;

    if (!isLoaded){
        return (<div>Loading...</div>)
    }
    else{
            return(
                <div ref={e => (this.scroll = e)}>
                    <Table>
                      <thead>
                           <tr>
                               <td>景點名稱</td>
                               <td>景點位址</td>
                           </tr>
                      </thead>
                      <tbody>
                        {items.slice(0,this.state.spotLimit).map((item,index) => (
                            <tr key={index}>
                                <td>{item.Name}</td>
                                <td>{item.Description}</td>
                            </tr>
                        ))};
                      </tbody>
                    </Table>
                </div>
            )
        
    }
  }
}

export default App;