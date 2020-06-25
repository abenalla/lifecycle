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
            {<li>Name: Leanne Graham | UserName: Bret | <a href = ''>Website</a></li>}
            {<li>Name: Ervin Howell | UserName: Antonette | <a href = ''>Website</a></li>}
            {<li>Name: Clementine Bauch | UserName: Samantha | <a href = ''>Website</a></li>}
            {<li>Name: Patricia Lebsack | UserName: Karianne | <a href = ''>Website</a></li>}
            {<li>Name: Chelsey Dietrich | UserName: Kamren | <a href = ''>Website</a></li>}
            {<li>Name: Mrs. Dennis Schulist | UserName: Leopoldo_Corkery | <a href = ''>Website</a></li>}
            {<li>Name: Kutis Weissnat | UserName: Elwun.Skiles | <a href = ''>Website</a></li>}
            {<li>Name: Nicholas Runolfsdottir V | UserName: Maxime_Nienow | <a href = ''>Website</a></li>}
            {<li>Name: Glenna Reichert | UserName: Delphine | <a href = ''>Website</a></li>}
            {<li>Name: Clementina DuBuque | UserName: Moriah.Stanton | <a href = ''>Website</a></li>}
          </ul>
        </div>
      </div>
    )
  }
}
export default App;