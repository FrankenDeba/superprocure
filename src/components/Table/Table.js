import React, { Component } from 'react'
import { editUser } from "../../actions/actionCreator"
import { connect } from "react-redux"
import styles from "./Table.module.css"

class Table extends Component {
    render() {
        return (
            <table className = {styles.container}>
                <tr className={styles.tableheader}>
                    <th className={styles.head}>Customer name</th>
                    <th className={styles.head}>Customer number</th>
                    <th className={styles.head}>Customer email</th>
                    <th className={styles.head}>Customer adress</th>
                    <th className={styles.head}>City pincode</th>
                    <th className={styles.head}>State</th>
                    <th className={styles.head}>Gst no.</th>
                    <th className={styles.head}>Edit button</th>
                </tr>
               {
                   
                    this.props.users.map(item =>{
                        return (<tr className={styles.row}>
                            <td className = {styles.field}>{item.name}</td>
                            <td className = {styles.field}>{item.number}</td>
                            <td className={styles.field}>{item.email}</td>
                            <td className={styles.field}>{item.adress}</td>
                            <td className={styles.field}>{item.pincode}</td>
                            <td className={styles.field}>{item.state}</td>
                            <td className={styles.field}>{item.gst}</td>
                            <td className={styles.field}><button className={styles.edit} onClick = {this.props.editUser}>Edit</button></td>
                
                        </tr>)
                    })
            }
               
            </table>
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
export default connect(mapStateToProps,null)(Table)
