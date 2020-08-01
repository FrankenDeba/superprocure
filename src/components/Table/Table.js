import React, { Component } from 'react'
import { selectUser } from "../../actions/actionCreator"
import { connect } from "react-redux"
import styles from "./Table.module.css"

class Table extends Component {
    handleClick = (e,item)=>{
        this.props.editUser()
        this.props.selectuser(item)
        
    }
    render() {
        return (
            <div className = {styles.container}>
                <table>
                    <tr className={styles.tableheader}>
                        <th className={styles.head}>Customer name</th>
                        <th className={styles.head}>Customer number</th>
                        <th className={styles.head}>Customer email</th>
                        <th className={styles.head}>Customer address</th>
                        <th className={styles.head}>City pincode</th>
                        <th className={styles.head}>State</th>
                        <th className={styles.head}>Gst no.</th>
                        <th className={styles.head}>Edit button</th>
                    </tr>
                                      
               {
                    this.props.users.map(item =>{
                        return (<tr key = {item.gst} className={styles.row}>
                            <td className = {styles.field}>{item.name}</td>
                            <td className = {styles.field}>{item.number}</td>
                            <td className={styles.field}>{item.email}</td>
                            <td className={styles.field}>{item.address}</td>
                            <td className={styles.field}>{item.pincode}</td>
                            <td className={styles.field}>{item.state}</td>
                            <td className={styles.field}>{item.gst}</td>
                            <td className={styles.field}>
                                <button className={styles.edit} onClick = {(e)=>this.handleClick(e,item)}>Edit</button>
                            </td>
                
                        </tr>)
                    })
            }
               
            </table>
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
            selectuser:(item)=>{
                dispatch(selectUser(item))
            }
            
        }
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(Table)
