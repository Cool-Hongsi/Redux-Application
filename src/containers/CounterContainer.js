import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';

// export const increment = () => {
//     return {type : INCREMENT}
// };

// export const decrement = () => {
//     return {type : DECREMENT}
// };

class CounterContainer extends Component{
    handleIncrement = () => {
        console.log("handleIncrement");
        this.props.increment();
    }

    handleDecrement = () => {
        console.log("handleIncrement");
        this.props.decrement();
    }

    render(){
        const { color, number } = this.props;
        console.log(color);
        console.log(number);

        return(
            <Counter color={color} value={number} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    return {
        color : state.counter.color,
        number : state.counter.number
    }
}

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
})

// Same as above mapDispatchToProps
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ increment, decrement }, dispatch);

// Same as above mapDispatchToProps
// const mapDispatchToProps = { increment, decrement };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer)
