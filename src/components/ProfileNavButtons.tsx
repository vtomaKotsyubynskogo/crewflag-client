import "./styles/ProfileNavButtons.scss";
import { NavLink } from "react-router";

export interface ProfileProps {
	title: string;
	to: string;
	isActive: boolean;
	onClick: () => void;
}



export default function ProfileNavButtons({title, to, isActive, onClick}: ProfileProps) {
	return (
		<>
				<NavLink to={to} onClick={onClick} className={`profile-nav-buttons__item ${isActive ? 'profile-nav-buttons__item-active' : ''}`}>
					<p className={`profile-nav-buttons__title ${isActive ? 'profile-nav-buttons__title-active' : ''}`}>{title}</p>
				</NavLink>
		</>
	);
}
