import React, { Component } from 'react';

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
    }
  
    render(){

    var {isLoaded, items} = this.state;

    if (!isLoaded){
        return (<div>Loading...</div>)
    }
    else{
            return(
                <div>
                    <h2> Welcome to the 交通部觀光景點</h2>
                    <ul>
                        {items.slice(0,this.state.spotLimit).map((item,index) => (
                            <li key={index}>
                                {item.Name}
                            </li>
                        ))};
                    </ul>
                </div>
            )
        
    }
  }
}

export default App;