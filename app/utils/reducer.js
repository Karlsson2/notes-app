// utils/reducer.js
export const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];
    case "UPDATE_NOTE":
      return state.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload);
    case "SET_NOTES":
      return action.payload; // Replace the current state with the new notes
    default:
      return state;
  }
};
