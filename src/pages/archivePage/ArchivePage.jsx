import { NavLink } from "react-router-dom";
import "./ArchivePage.css";

export function ArchivePage() {
    return (
        <>
           <div className="archivepage-container">
                <div className="navi">
                    <NavLink to="/">Go to Habits</NavLink>
                </div>
            </div>       
        </>
    )
}