import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  //foco...
  number: 0,
};

function reducer(state, action) {
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

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "ANDERSON" })}
          >Login</button>
          <button className="btn" onClick={() => dispatch({ type: "numberAdd2" })}>
            +2
          </button>
          <button className="btn" onClick={() => dispatch({ type: "numberTimes7" })}>
            x7
          </button>
          <button className="btn" onClick={() => dispatch({ type: "numberBy25" })}>
            /25
          </button>
          <button className="btn" onClick={() => dispatch({ type: "numberToInt" })}>
            ParseInt
          </button>
          <button className="btn" onClick={() => dispatch({ type: "numberAddX", x: 10 })}>
            Add X
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
