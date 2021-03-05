import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import './calculatorPage.css';
import { number, dot, plus, minus, multiply, divide, equals, reset } from '../../../../redux/actions/calculatorAction'

class CalculatorPage extends Component {
    render() {
        let isMobile = window.innerWidth < 900;
        const numkeypad = [];
        for (let i = 1; i < 10; i++) {
            if ((i - 1) % 3 === 0 && i != 1) numkeypad.push(<br />)
            numkeypad.push(<button onClick={e => { this.props.dispatch(number(i)) }} type="button" value={i} class="btn btn-lg">{i}</button>);
        }
        numkeypad.push(<br />);
        numkeypad.push(<button onClick={e => { this.props.dispatch(number(0)) }} type="button" value="0" class="btn btn-lg ">0</button>);
        return (
            <div class='container'>
                <div class={isMobile ? 'row' : 'row pl-5 ml-5'}>
                    <div class="calculator card">
                        <input type="text" class={isMobile ? 'calculator-screen z-depth-1' : 'calculator-screen z-depth-1 pr-3'} value={this.props.result} disabled />
                        <div class="container calculator-keys">
                            <div class={isMobile ? 'row' : 'row pt-2'}>
                                <div class={isMobile ? 'col-6 p-0' : 'col-5 p-0'}>
                                    {numkeypad}
                                    <button onClick={e => { this.props.dispatch(dot()) }} type="button" class="btn btn-lg" value=".">.</button>
                                    <button onClick={e => { this.props.dispatch(reset()) }} type="button" class={isMobile ? 'btn btn-danger btn-lg mb-2' : 'btn btn-danger btn-sm ml-1 mt-1 mb-2'}>AC</button>
                                </div>
                                <div class={isMobile ? 'col-4 p-0' : 'col-4 p-0'}>
                                    <button onClick={e => { this.props.dispatch(plus()) }} type="button" class="operator btn btn-lg" value="+">+</button>
                                    <button onClick={e => { this.props.dispatch(minus()) }} type="button" class="operator btn btn-lg" value="-">-</button><br />
                                    <button onClick={e => { this.props.dispatch(multiply()) }} type="button" class="operator btn btn-lg" value="*">&times;</button>
                                    <button onClick={e => { this.props.dispatch(divide()) }} type="button" class="operator btn btn-lg" value="/">&divide;</button>
                                </div>
                                <div class={isMobile ? 'col-2 p-0' : 'col-3'}>
                                    <button onClick={e => { this.props.dispatch(equals()) }} type="button" class="equal btn btn-lg " value="=">=</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { result: state.calculatorReducer }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: [
            bindActionCreators(dot, dispatch),
            bindActionCreators(number, dispatch),
            bindActionCreators(plus, dispatch),
            bindActionCreators(minus, dispatch),
            bindActionCreators(multiply, dispatch),
            bindActionCreators(divide, dispatch),
            bindActionCreators(equals, dispatch),
            bindActionCreators(reset, dispatch)
        ]
    }
}

connect(mapDispatchToProps)(CalculatorPage);
export default connect(mapStateToProps)(CalculatorPage);
