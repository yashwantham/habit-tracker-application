import { createContext, useEffect, useReducer } from "react"
import { habits } from "../db/habits";
import { v4 as uuid } from "uuid";

export const ACTIONS = {
    SET_HABITS: "set_habits",
    ADD_NEW_HABIT: "add_new_habit"
}

const {SET_HABITS, ADD_NEW_HABIT} = ACTIONS;

export const HabitContext = createContext();

export function HabitProvider({children}) {

    const reducer = (state, action) => {
        
        switch(action.type) {

            case SET_HABITS: {
                return {habits: [...action.payload]}
            }

            case ADD_NEW_HABIT: {
                return {habits: [...state.habits, {...action.payload, _id: uuid()}]}
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
           <HabitContext.Provider value={{habitState, dispatchHabit}}>{children}</HabitContext.Provider> 
        </>
    )
}