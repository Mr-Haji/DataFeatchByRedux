import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    Counter: 0,
}
const counterSlice = createSlice(
    {
        name: "counterSlice",
        initialState,
        reducers:
        {

            AddCount: (state, action) => {
                state.Counter= ++state.Counter
                // setCount(state + 1);
            }
            , DecCount: (state, action) => {
                if (state !== 0) {
                    // setCount(Count - 1);
                }

            }
        }
    }
)
const { actions, reducer } = counterSlice;
export const { AddCount, DecCount } = actions;
export default reducer;             