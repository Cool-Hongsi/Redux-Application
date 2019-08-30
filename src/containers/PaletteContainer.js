import React, { Component } from 'react';
import { connect } from 'react-redux'; // In order to create Container Component
import Palette from '../components/Palette';
import { changeColor } from '../store/modules/counter';
// export const changeColor = (color) => ({type : CHANGE_COLOR, color});

/* Component with redux -> Container Component */
/* Component only for transferring props and focus on view -> Presentational Component */

class PaletteContainer extends Component{
    handleSelect = (color) => {
        const { changeColor } = this.props; // Implement mapDispatchToProps
        console.log('what'); // 1
        changeColor(color); // 2 // returnning object from changeColor(color) will go to dispatch parameter (action) in mapDispatchToProps
    }

    render(){
        console.log("PaletteContainer");
        const { color } = this.props;
        console.log(color);
        return(
            <Palette onSelect={this.handleSelect} selected={color} />
        )
    }
}

// state in store that will be put in props
/* present state parameter */
/* whenever the value of state is changed, it is called */
const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    return {color : state.counter.color}
}
/* First parameter in connect() -> mapStateToProps */
/* PaletteContainer Component can use this.props.color */


// action function that will be put props
/* whenever changeColor(color) is called, implement this */
const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps");
    return {changeColor : color => dispatch(changeColor(color))}
}
/* Second parameter in connect() -> mapDispatchToProps */
/* PaletteContainer Component can use this.props.changeColor */

// Combine redux store with components
export default connect(
    mapStateToProps, // transfer state as props
    mapDispatchToProps // transfer action function as props
)(PaletteContainer);
// In PaletteContainer Component, this.props.color / this.props.changeColor
