import * as actionTypes from './actionTypes'

export const number=(num)=>({
    type: actionTypes.NUMBER,
    payload: `${num}`
})
export const dot=()=>({
    type: actionTypes.DOT,
    payload: '.'
})
export const plus=()=>({
    type: actionTypes.OPERATOR,
    payload: '+'
})
export const minus=()=>({
    type: actionTypes.OPERATOR,
    payload: '-'
})
export const multiply=()=>({
    type: actionTypes.OPERATOR,
    payload: '*'
})
export const divide=()=>({
    type: actionTypes.OPERATOR,
    payload: '/'
})
export const equals=()=>({
    type: actionTypes.EQUALS,
    payload: '='
})
export const reset=()=>({
    type: actionTypes.RESET,
})