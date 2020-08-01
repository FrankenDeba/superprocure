import React from 'react'
import './App.css'
import Table from "./components/Table/Table"
import Modal from "./components/Modal/Modal"
import Button from "./components/Button/Button"
import Form from "./components/Form/Form"

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
        showhide: false,
        mode:"",
        
    }

  }

  mode = ["add","edit"]
  
  toggleModal = (e,modeValue) =>{
    this.setState({showhide:!this.state.showhide,mode:modeValue})
  }

   render(){
    return (
      <div className="App">
        <Button 
          click={(e) => this.toggleModal(e,this.mode[0])} 
          value="Add User" />
        <Table 
          editUser = {(e) =>this.toggleModal(e,this.mode[1])}/>
        <Modal 
          status={this.state.showhide}>
            <Form 
              openclose={this.state.showhide} 
              mode = {this.state.mode} 
              click = {()=>this.toggleModal()}/>
        </Modal>
      </div>
    );
  }
   

}

export default App;
