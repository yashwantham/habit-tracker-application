import { createContext, useEffect, useReducer } from "react"
import { habits } from "../db/habits";

const ACTIONS = {
    SET_HABITS: "set_habits"
}

const {SET_HABITS} = ACTIONS;

export const HabitContext = createContext();

export function HabitProvider({children}) {

    const reducer = (state, action) => {
        
        switch(action.type) {

            case SET_HABITS: {
                return {habits: [...action.payload]}
            }

            default: {
                return state;
            }

        }

    }

    const [habitState, dispatchHabit] = useReducer(reducer, {habits: []});

    useEffect(() => {
        dispatchHabit({type: SET_HABITS, payload: habits})
    }, [])

    console.log(habitState)

    return (
        <>
           <HabitContext.Provider value={{habitState}}>{children}</HabitContext.Provider> 
        </>
    )
}