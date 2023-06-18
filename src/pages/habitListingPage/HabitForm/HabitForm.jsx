import { useContext, useState } from "react";
import "./HabitForm.css";
import { ACTIONS, HabitContext } from "../../../context/HabitProvider";

export function HabitForm({ formType, toggleModal }) {

    const { SET_HABITS, ADD_NEW_HABIT } = ACTIONS;

    const { dispatchHabit } = useContext(HabitContext);

    const [formData, setFormData] = useState({
        name: "",
        repeat: "daily",
        goal: "1 time a day",
        timeoftheday: "morning",
        startdate: "today",
    })

    const inputChangeHandler = (e) => {
        setFormData((formData) => ({ ...formData, [e.target.name]: e.target.value }))
    }

    console.log(formData)

    const submitHabitForm = () => {
        dispatchHabit({ type: ADD_NEW_HABIT, payload: formData })
        toggleModal();
    }

    return (
        <>
            <div className="habitform-container" >
                <div className="form-heading">
                    <h2>{formType}</h2>
                </div>
                <div className="input-boxes">
                    <div className="habitname-container">
                        Habit Name: <input type="text" name="name" onChange={inputChangeHandler} />
                    </div>

                    <div className="reapeat-container">
                        <select name="repeat" id="" onChange={inputChangeHandler}>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>

                    <div className="goal-container">
                        <select name="goal" id="" onChange={inputChangeHandler}>
                            <option value="1 time a day">1 time a day</option>
                            <option value="5 times a day">5 times a day</option>
                            <option value="10 times a day">10 times a day</option>
                        </select>
                    </div>

                    <div className="timeoftheday-container">
                        <select name="timeoftheday" id="" onChange={inputChangeHandler}>
                            <option value="anytime">Anytime</option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                            <option value="night">Night</option>
                        </select>
                    </div>

                    <div className="startdate-container">
                        <select name="startdate" id="" onChange={inputChangeHandler}>
                            <option value="today">Today</option>
                            <option value="tommorrow">Tommorrow</option>
                            <option value="dayaftertommorrow">Day after Tommorrow</option>
                        </select>
                    </div>

                    <div className="submit-btn-container">
                        <button onClick={submitHabitForm}>Save</button>
                    </div>

                </div>
            </div>
        </>
    )
}