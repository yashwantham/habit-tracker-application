import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import "./HabitListingPage.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { HabitContext } from "../../context/HabitProvider";
import { HabitCard } from "./HabitCard/HabitCard";
import { HabitForm } from "./HabitForm/HabitForm";

export function HabitListingPage() {

    const [modal, setModal] = useState(false);

    const { habitState } = useContext(HabitContext);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <HabitForm formType="New Habit" toggleModal={toggleModal}/>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
            <div className="habitlisting-page-container">
                <div className="action-btns">
                    <div className="addnewhabit-btn-container">
                        <button className="addnewhabit-btn" onClick={toggleModal}>
                            <FontAwesomeIcon icon={faCirclePlus} />Add New Habit
                        </button>
                        <div className="archive-navi-container">
                            <NavLink to="/archive">Go to Archives</NavLink>
                        </div>
                    </div>
                    <div className="habits-container">
                        {habitState.habits.map((habit) => <HabitCard habit={habit} />)}
                    </div>
                </div>
            </div>
        </>
    )
}