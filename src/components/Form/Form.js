import React, { Component } from 'react'
import { connect } from "react-redux"
import styles from "./Form.module.css"
import { addUser, editUser } from "../../actions/actionCreator"
export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             adress:"",
             isVisible:false
        }
    }
    changeValue = (e) =>{
        console.log(e.target.value);
        
       
        { (e.target.name === "name") ? this.setState({ name: e.target.value }) : this.setState({ adress: e.target.value })}
        
    }

    showModal = () =>{
        this.setState({isVisible:!this.state.isVisible})
    }
    
    submit = async (e) =>{
        e.preventDefault()
        await this.props.adduser({
            name:this.state.name,
            adress:this.state.adress
        })
        console.log(this.props.user)
        
    }
    
    render() {
        return (
            <div className = {styles.container}>
            <button className = {styles.adduser} onClick = {()=>this.showModal()}>add user</button>
            {this.state.isVisible?
                    (<form className={styles.form} onSubmit={(e) => this.submit(e)}>

                        <div className={styles.field}>
                            Name: <input type="text" value={this.state.name} name="name" onChange={(e) => this.changeValue(e)} />
                        </div>
                        <div className={styles.field}>
                            Adress: <input value={this.state.adress} name="adress" onChange={(e) => this.changeValue(e)} />
                        </div>
                        <div className={styles.field}><input type="submit" value="submit" /></div>
                    </form>)
                    :null
            }
                
        
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
