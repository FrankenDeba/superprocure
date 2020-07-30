import React from 'react'
import './App.css'
import Table from "./components/Table/Table"
import Modal from "./components/Modal/Modal"
import Button from "./components/Button/Button"
import Form from      "./components/Form/Form"

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
        showhide: false
    }
  }
  toggleModal = () =>{
    this.setState({showhide:!this.state.showhide})
  }
  render(){
    return (
      <div className="App">
        <Button click={() => this.toggleModal()} value="Add user" />
        <Table />
        <Modal status={this.state.showhide}><Form click = {()=>this.toggleModal()}/></Modal>
      </div>
    );
  }
   

}

export default App;
