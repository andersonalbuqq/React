export default function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "numberTimes7":
      return {...state, number: state.number * 7}
    case "numberBy25":
      return {...state, number: state.number / 25}
    case "numberToInt":
      return {...state, number: Math.round(state.number)}
    case "numberAddX":
      return {...state, number: state.number + action.x}
    case "login":
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}