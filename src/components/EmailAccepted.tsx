import "./styles/EmailAccepted.scss";
import {NavLink} from "react-router";

export default function EmailAccepted() {
	return (
		<>
			<div className="email-accepted">
				<div className="email-accepted__wrapper">
					<img
						src="/images/logo-icon.svg"
						alt="Crewflag"
						className="email-accepted__logo-image"
					/>
					<h1 className="email-accepted__title">
						Адрес электронной почты подтвержден!
					</h1>
					<img className="email-accepted__checked" src="/images/check-icon.svg" alt="Подтверждено" />
					<p className="email-accepted__description">
						Спасибо за подтверждение!<br/> Данные подтверждены, регистрация закончена!
					</p>
					<NavLink to='/' className="email-accepted__button">
						На главную страницу
					</NavLink>
				</div>
			</div>
		</>
	);
}
