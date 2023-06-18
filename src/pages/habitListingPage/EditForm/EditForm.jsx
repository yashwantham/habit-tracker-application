import { useContext, useState } from "react";
import { ACTIONS, HabitContext } from "../../../context/HabitProvider";

export function EditForm({ formType, setformVisible, habitData }) {

    const { SET_HABITS, ADD_NEW_HABIT } = ACTIONS;

    const { habitState, dispatchHabit } = useContext(HabitContext);

    const [formData, setFormData] = useState({...habitData})

    const inputChangeHandler = (e) => {
        setFormData((formData) => ({ ...formData, [e.target.name]: e.target.value }))
    }

    console.log(formData)

    const submitHabitForm = (id) => {
        setformVisible(false);
        const newHabitList = habitState.habits.map((habt) => habt._id === id ? {...formData} : habt );
        dispatchHabit({ type: SET_HABITS, payload: newHabitList })
    }

    return (
        <>
            <div className="habitform-container" >
                <div className="form-heading">
                    <h2>{formType}</h2>
                </div>
                <div className="input-boxes">
                    <div className="habitname-container" >
                        Habit Name: <input type="text" name="name" onChange={inputChangeHandler} value={formData.name}/>
                    </div>

                    <div className="reapeat-container">
                        Repeat: <select name="repeat" id="" onChange={inputChangeHandler} value={formData.repeat}>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>

                    <div className="goal-container">
                        Goal: <select name="goal" id="" onChange={inputChangeHandler} value={formData.goal}>
                            <option value="1 time a day">1 time a day</option>
                            <option value="5 times a day">5 times a day</option>
                            <option value="10 times a day">10 times a day</option>
                        </select>
                    </div>

                    <div className="timeoftheday-container">
                        Time of the day: <select name="timeoftheday" id="" onChange={inputChangeHandler} value={formData.timeoftheday}>
                            <option value="anytime">Anytime</option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                            <option value="night">Night</option>
                        </select>
                    </div>

                    <div className="startdate-container">
                        Start date: <select name="startdate" id="" onChange={inputChangeHandler} value={formData.startdate}>
                            <option value="today">Today</option>
                            <option value="tommorrow">Tommorrow</option>
                            <option value="dayaftertommorrow">Day after Tommorrow</option>
                        </select>
                    </div>

                    <div className="submit-btn-container">
                        <button onClick={() => submitHabitForm(habitData._id)}>Save</button>
                    </div>

                    <button onClick={() => setformVisible(false)}>Close</button>

                </div>
            </div>
        </>
    )
}