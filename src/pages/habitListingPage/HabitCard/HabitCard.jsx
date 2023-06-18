import "./HabitCard.css";

export function HabitCard({habit}) {
    return (
        <>
            <div className="habitcard-container">
                <h2>{habit.name}</h2>
            </div>
        </>
    )
}