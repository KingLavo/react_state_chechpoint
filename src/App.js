import React from "react"

class App extends React.Component{

  constructor(){
      super()
      this.state = {
        fullName: "Uduma Ekwe Ekwe",
        imgSrc: "./native.jpg",
        profession: "Software Developer",
        bio:`software developer with GoMyCode Nigeria `,
        show: false,
        mountTime: null,
        currentTime: new Date(),
    }
  }

  componentDidMount(){
    console.log("inside component did mount")
    this.setState({mountTime: new Date()})
    this.interval = setInterval(() => {
      this.setState({ currentTime: new Date() });

    }, 1000);
  }

  componentWillUnmount() {
    console.log("inside component Unmount")
    console.log(this.interval)
    clearInterval(this.interval)

  }

  getTimeInterval() {
    const { mountTime, currentTime } = this.state;
    if (!mountTime) return 'Calculating...';
    const intervalVal = Math.floor((currentTime - mountTime) / 1000);  
    return `${intervalVal} seconds`;
  }
  
  render(){
    return(
      <div style={{width: "50%", margin: "0 auto"}}>
        <h1>Welcome to React State check point</h1>
        { 
        this.state.show ? 
          (<div  style={{width:"300px", height:"auto"}} >
              <h2>Hi, i'am {this.state.fullName}</h2>
              <h4>{this.state.bio}</h4>
              <img src={this.state.imgSrc} alt={this.state.fullName} style={{width:"200px", height:"200px", borderRadius:"8px"}} srcSet="" />
              <p style={{fontWeight:"bolder"}}>{this.state.profession}</p>
          </div>) 
          : ""
        }
        <button
        style={
          {
            padding:".6rem", 
            fontWeight:"bolder", 
            borderRadius:".5rem",
            fontSize: "1rem"
          }
        }
        onClick={()=>this.setState({show: !this.state.show})}
        >Toggle</button>
        <p
        style={{fontWeight:"bolder"}}
        >Time since mount: {this.getTimeInterval()}</p>
      </div>
    )
  }
}

export default App;
