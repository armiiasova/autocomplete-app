import logo from './logo.svg';
import './App.css';
import Data from './Data/Data';
import React from 'react';
import List from './Components/List';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data:Data,
      inputVal: '',
    }
  }

  liFunction = (data) =>{
    const fullName = `${data.first} ${data.last}`
   this.setState({inputVal: fullName})
  }

  render(){
    const{inputVal, data,} = this.state
  return (
    <div className="App">
   
        <input type='text' placeholder='Type Name or Lastname' value={inputVal} onChange={(event) => this.setState({inputVal: event.target.value})}/>
       <ul>
        {
        data.map(el => {

          let values = Object.values(el);

          if(inputVal !==''){

          return values.map(ele =>{
            if(ele.includes(inputVal.toUpperCase()))
           
            {
              return <List listFirst = {el.first}  listLast={el.last} func={this.liFunction} data = {el}/>
            }  
                                  })
                            } 
         
        })
        
        }
       </ul>
    </div>
  );
  }
}

export default App;