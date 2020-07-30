import React, { Component } from 'react'
import { connect } from "react-redux"
import styles from "./Form.module.css"
import { addUser, editUser } from "../../actions/actionCreator"
export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             number:"",
             email:"",
             adress:"",
             pincode:"",
             city:"",
             gst:"",

        }
    }
    changeValue = (e) =>{
        console.log(e.target.value);
        if(e.target.name==="name"){
            this.setState({name:e.target.value})
        }   
        else if (e.target.name === "number") {
            this.setState({ number: e.target.value })
        }
        else if (e.target.name === "email") {
            this.setState({ email: e.target.value })
        }
        else if (e.target.name === "adress") {
            this.setState({ adress: e.target.value })
        }
        else if (e.target.name === "pincode") {
            this.setState({ pincode: e.target.value })
        }
        else if (e.target.name === "state") {
            this.setState({ state: e.target.value })
        }
        else if (e.target.name === "gst") {
            this.setState({ gst: e.target.value })
        } 
        // { (e.target.name === "name") ? this.setState({ name: e.target.value }) : this.setState({ adress: e.target.value })}
        
    }

  
     
    
    submit = async (e) =>{
        e.preventDefault()
        await this.props.adduser({
            name:this.state.name,
            number: this.state.number,
            email:this.state.email,
            adress:this.state.adress,
            pincode:this.state.pincode,
            state: this.state.state,
            gst: this.state.gst,

        })
        console.log(this.props.user)
        
    }
    
    render() {
        return (
            <div className = {styles.container}>
        

                    <form className={styles.form} onSubmit={(e) => this.submit(e)}>
                        <div className = {styles.top}>Please enter customer details:<span className={styles.close} onClick={this.props.click}>X</span></div>
                        <div className={styles.field}>
                        
                            <input placeholder = "Customer Name" type="text" value={this.state.name} name="name" onChange={(e) => this.changeValue(e)} />
                        </div>
                    <div className={styles.field}>

                        <input placeholder="Customer Number" type="number" value={this.state.number} name="number" onChange={(e) => this.changeValue(e)} />
                    </div>

                    <div className={styles.field}>

                        <input placeholder="Customer Email" type="email" value={this.state.email} name="email" onChange={(e) => this.changeValue(e)} />
                    </div>

                    <div className={styles.field}>

                        <input placeholder="Customer Adress" type="text" value={this.state.adress} name="adress" onChange={(e) => this.changeValue(e)} />
                    </div>
                        <div className={styles.field}>
                            <input type = "text" placeholder = "City Pincode" value={this.state.pincode} name="pincode" onChange={(e) => this.changeValue(e)} />
                        </div>
                    <div className={styles.field}>

                        <input placeholder="State" type="text" value={this.state.state} name="state" onChange={(e) => this.changeValue(e)} />
                    </div>
                    <div className={styles.field}>

                        <input placeholder="Gst no." type="text" value={this.state.gst} name="gst" onChange={(e) => this.changeValue(e)} />
                    </div>
                        <div className={styles.field}><input type="submit" value="submit" className = {styles.submit}/></div>
                    </form>
                    
                    
            
                
        
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        adduser:(user)=>{
            dispatch(addUser(user))
        }
    }
}

const mapStateToProps = (state) =>{
    return {
        user:state.users
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form)
