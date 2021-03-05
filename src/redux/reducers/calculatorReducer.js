import * as actionTypes from '../actions/actionTypes'
import calculatorState from './calculatorState'

const calculatorReducer = (state = '0', action) => {
    let newState = state;
    switch (action.type) {
        case actionTypes.NUMBER:
            if (calculatorState.waitNum) {
                calculatorState.firstNum = '0';
                calculatorState.lastOperator = '';
                state = '0';
                calculatorState.waitNum = false;
            }
            if (state === '0') {
                newState = action.payload;
            }
            else newState = state + action.payload;

            return (newState);
        case actionTypes.OPERATOR:
            calculatorState.waitNum = false;
            calculatorState.lastOperator = action.payload;
            if (state != '0') {
                calculatorState.firstNum = state;
                newState = '0';
            }
            return (newState);
        case actionTypes.DOT:
            if (!state.includes('.') && !calculatorState.waitNum) newState = state + action.payload;
            return (newState);
        case actionTypes.EQUALS:
            switch (calculatorState.lastOperator) {
                case '+':
                    newState = Number(calculatorState.firstNum) + Number(state);
                    break;
                case '-':
                    if (!calculatorState.waitNum) newState = Number(calculatorState.firstNum) - Number(state);
                    else newState = Number(state) - Number(calculatorState.firstNum);
                    break;
                case '*':
                    newState = Number(calculatorState.firstNum) * Number(state);
                    break;
                case '/':
                    if (!calculatorState.waitNum) newState = Number(calculatorState.firstNum) / Number(state);
                    else newState = Number(state) / Number(calculatorState.firstNum);
                    break;
            }
            if(calculatorState.firstNum != '0'){
                if (!calculatorState.waitNum) {
                    calculatorState.firstNum = state;
                }
                calculatorState.waitNum = true;
            }
            return (newState.toString());
        case actionTypes.RESET:
            calculatorState.firstNum = '0';
            calculatorState.lastOperator = '';
            state = '0';
            calculatorState.waitNum = false;
            return (state);
        default:
            return state;
    }
}

export default calculatorReducer;