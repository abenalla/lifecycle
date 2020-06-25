import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      items:[],
      isLoaded: false,
    }
  }
increment =() =>{

}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res =>{
    return res.json();
  })
  .then(data => {
    // console.log(data);
    this.setState({
      isLoaded: true,
      items: data,
    });
  });
// put code here
}

  render(){
    let {isLoaded, items} = this.state;
    if(!isLoaded){
      return <div>Loading....</div>
    }else{
      console.log("This is items in the render method: ", items);
    }
    return(
      <div>
        <div>
          <ul>
            {<li>Name: </li>}
            {<li>Name: </li>}
            {<li>Name: </li>}
            {<li>Name: </li>}
            {<li>Name: </li>}
          </ul>
        </div>
      </div>
    )
  }
}
export default App;