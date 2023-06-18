import { NavLink } from "react-router-dom";
import "./ArchivePage.css";
import { useContext } from "react";
import { HabitContext } from "../../context/HabitProvider";
import { HabitCard } from "../habitListingPage/HabitCard/HabitCard";

export function ArchivePage() {

    const {habitState} = useContext(HabitContext);

    return (
        <>
           <div className="archivepage-container">
                <div className="navi">
                    <NavLink to="/">Go back to Habits</NavLink>
                </div>
                <div className="archived-habit-list">
                {habitState.archivedHabits.map((habit) => <HabitCard habit={habit} />)}
                </div>
            </div>       
        </>
    )
}