import React, { Component } from 'react'
import { editUser } from "../../actions/actionCreator"
import { connect } from "react-redux"
import styles from "./Table.module.css"

class Table extends Component {
    render() {
        return (
            <div className = {styles.container}>
               table:
               {
                    this.props.users.map(item =>{
                        return (<div className={styles.row}>
                            <div className = {styles.field}>{item.name}</div>
                            <div className = {styles.field}>{item.adress}</div>
                        </div>)
                    })
            }
               
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        users:state.users
    }
}
const mapDispatchToProps = (dispatch) =>{
    return(
        {
            edit:()=>{
                dispatch(editUser())
            }
            
        }
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(Table)
