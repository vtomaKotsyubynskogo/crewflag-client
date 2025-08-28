import './styles/AccountTypeCard.scss'
import {NavLink} from "react-router";

export interface AccountTypeCardProps {
    title: string,
    subtitle: string,
}

export default function AccountTypeCard({title, subtitle}: AccountTypeCardProps) {
    return (
        <>
        <NavLink to="/" className="card">
            <div className="card-main-text">
                <h1 className="card-main-text__title">{title}</h1>
                <p className="card-main-text__subtitle">{subtitle}</p>
            </div>
            <button className="card__main-button">
                <img src="/images/arrow-right.svg" alt=" " className="card__arrow-right" />
            </button>
        </NavLink>
        </>
    );
}
