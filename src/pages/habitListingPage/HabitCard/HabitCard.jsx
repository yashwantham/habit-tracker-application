import { useContext, useState } from "react";
import "./HabitCard.css";
import { ACTIONS, HabitContext } from "../../../context/HabitProvider";
import { HabitForm } from "../HabitForm/HabitForm";
import { EditForm } from "../EditForm/EditForm";

export function HabitCard({habit}) {

    
const {SET_HABITS, ADD_NEW_HABIT, ADD_TO_ARCHIVE} = ACTIONS;

    const {habitState, dispatchHabit} = useContext(HabitContext)

    const [formVisible, setformVisible] = useState(false);

    const [habitdetailsshow, setHabitdetailsshow] = useState(false)

    const archiveHandler =(id) => {
        dispatchHabit({type: ADD_TO_ARCHIVE, payload: habitState.habits.find(({_id}) => _id === id)});
        dispatchHabit({type: SET_HABITS, payload: habitState.habits.filter(({_id}) => _id !== id)});
    }

    const deleteHandler = (id) => {
        dispatchHabit({type: SET_HABITS, payload: habitState.habits.filter(({_id}) => _id !== id)})
    }




    return (
        <>
            <div className="habitcard-container" >
                
               <div className="habit-heading" onClick={() => setHabitdetailsshow(!habitdetailsshow)}>
               <h2>{habit.name}</h2>
               </div>

                {habitdetailsshow && <div className="habit-detail">
                    <p>Repeat: {habit.repeat} | Goal: {habit.goal} | Time of the day: {habit.timeoftheday} | Start date: {habit.startdate}</p>
                </div>}

               <div className="action-btns">
                    <button onClick={() => setformVisible(true)}>Edit</button>
                    <button onClick={() => archiveHandler(habit._id)}>Archive</button>
                    <button onClick={() => deleteHandler(habit._id)}>Delete</button>
                </div>

                {formVisible && <div className="edit-form">
                    <EditForm formType={habit.name} setformVisible={setformVisible} habitData={habit}/>
                </div>}
            </div>
        </>
    )
}