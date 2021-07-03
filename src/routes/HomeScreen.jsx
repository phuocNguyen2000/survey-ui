import React from 'react'
import { connect } from 'react-redux'

export const HomeScreen = (props) => {
    return (
        <div>
            <button onClick={()=>this.props.userEditDispatchInStore()}>click me</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        editStatus:state.editStatus}
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        userEditDispatchInStore:()=>{
            dispatch({type:"CHANGE_EDIT_STATUS"})
        }
    }

    
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
