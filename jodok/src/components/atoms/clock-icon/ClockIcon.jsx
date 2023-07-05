import Clock from '/src/assets/clock.svg'
import './ClockIcon.styles.css'

export default function ClockIcon() {
    return (
        <div>
            <img id="clock-icon" src={Clock} alt="Clock Icon" />
        </div>
    )
}