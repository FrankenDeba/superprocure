import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import styles from "./Form.module.css"
import { addUser, editUser } from "../../actions/actionCreator"
export class Form extends Component {
    constructor(props) {
        //alert("mode is: ",props.mode);
        
        super(props)
        this.mode=props.mode
        this.state = {
             name:this.mode,
             number:"",
             email:"",
             adress:"",
             pincode:"",
             city:"",
             gst:"",
             message:"",
             allFilled:false,
             errorColor:"",
        }

    }
    componentWillReceiveProps = (nextProps) =>{
        console.log("show hide:",nextProps.openclose)
       if(nextProps.mode === "edit"){
           this.setState({
            name:nextProps.selecteduser.name,
            number:nextProps.selecteduser.number,
            email:nextProps.selecteduser.email,
            adress:nextProps.selecteduser.adress,
            pincode:nextProps.selecteduser.pincode,
            state:nextProps.selecteduser.state,
            gst:nextProps.selecteduser.gst,
        
           })
       }
       else{
           this.setState({
               name:"",
               number:"",
               email:"",
               adress:"",
               pincode:"",
               state:"",
               gst:""
           })
       }
       if(nextProps.openclose===false){
           this.setState({message:""})
       }

    }
    
    settingValue = (mode) =>{
        alert("setting value: ",this.props.mode)
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

        if(this.state.name === "" || 
        this.state.number === "" || 
        this.state.email==="" || 
        this.state.adress === "" || 
        this.state.pincode === "" ||
        this.state.state === "" ||
        this.state.gst === ""){
            await this.setState({errorColor:"red",message:"please fill all the details",allFilled:false})
        }    
        else{
            await this.setState({allFilled:true,errorColor:"green",message:"submitted successfully"},
            ()=>console.log("all field value",this.state.allFilled))
            if(this.props.mode==="add"){
                await this.props.addUser({
                name: this.state.name,
                number: this.state.number,
                email: this.state.email,
                adress: this.state.adress,
                pincode: this.state.pincode,
                state: this.state.state,
                gst: this.state.gst,





            })
            await this.setState({
                name: "",
                number: "",
                email: "",
                adress: "",
                pincode: "",
                state: "",
                gst: "",

            })
        }
            else if(this.props.mode==="edit"){
                
                console.log("state value before editing",this.state);
                
                // this.setState({
                //     name:this.props.user[0].name,
                //     number: this.props.user[0].number,
                //     email: this.props.user[0].email,
                //     adress: this.props.user[0].adress,
                //     pincode: this.props.user[0].pincode,
                //     state: this.props.user[0].state,
                //     gst: this.props.user[0].gst,
                // },()=>console.log("state after editing: ",this.props.user))
                await this.props.editUser({
                    name: this.state.name,
                    number: this.state.number,
                    email: this.state.email,
                    adress: this.state.adress,
                    pincode: this.state.pincode,
                    state: this.state.state,
                    gst: this.state.gst,
                })
                await this.setState({
                    name: "",
                    number: "",
                    email: "",
                    adress: "",
                    pincode: "",
                    state: "",
                    gst: "",

                })    
            }
    }
        // console.log(this.state.allFilled);
        
                await console.log("before submission",this.state.allFilled);
                
              
        
    
           console.log(this.props.user);
            
    
        
        
        
    }
    render() {
       
        console.log("openclose",this.props.openclose);
        
        return (
            
        
            <div className = {styles.container}>
                    <form className={styles.form} onSubmit={(e) => this.submit(e)}>
                        <div className = {styles.top}>Please enter customer details:<span className={styles.close} onClick={this.props.click}>X</span></div>
                            <div className={styles.field}>
                                <input 
                                    placeholder="Customer Name" 
                                    type="text" 
                                    value={this.state.name} 
                                    name="name" 
                                    onChange={(e) => this.changeValue(e)} />
                            </div>
                            <div className={styles.field}>

                                <input 
                                    placeholder="Customer Number" 
                                    type="number" 
                                    value={this.state.number} 
                                    name="number" 
                                    onChange={(e) => this.changeValue(e)} />
                            </div>

                            <div className={styles.field}>

                                <input 
                                    placeholder="Customer Email" 
                                    type="email" 
                                    value={this.state.email} 
                                    name="email" 
                                    onChange={(e) => this.changeValue(e)} />
                            </div>

                            <div className={styles.field}>

                                <input 
                                    placeholder="Customer Adress" 
                                    type="text" 
                                    value={this.state.adress} 
                                    name="adress" 
                                    onChange={(e) => this.changeValue(e)} />
                            </div>
                            <div className={styles.field}>
                                <input 
                                type="text" 
                                placeholder="City Pincode" 
                                value={this.state.pincode} 
                                name="pincode" 
                                onChange={(e) => this.changeValue(e)} />
                            </div>
                            <div className={styles.field}>

                                <input 
        
                                    placeholder="State" 
                                    type="text" 
                                    value={this.state.state} 
                                    name="state" 
                                    onChange={(e) => this.changeValue(e)} />
                            </div>
                            <div className={styles.field}>

                                <input 
                                    placeholder="Gst no." 
                                    type="text" 
                                    value={this.state.gst} 
                                    name="gst" 
                                    onChange={(e) => this.changeValue(e)} />
                            </div>
                            <div className={styles.field}>
                                <input 
                                    type="submit" 
                                    value="submit" 
                                    className = {styles.submit}/>
                            </div>
                            <div style={this.state.errorColor==='red'?{color:"red"}:{color:"green"}}>
                                {this.state.message}
                            </div>
                    </form>
                    
                    
            
                
        
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    // return {
    //     // adduser:(user)=>{
    //     //     dispatch(addUser(user))
    //     // },    
    // }
    return bindActionCreators({ addUser, editUser }, dispatch)
}

const mapStateToProps = (state) =>{
    return {
        user:state.users,
        selecteduser:state.selectedUser
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form)
