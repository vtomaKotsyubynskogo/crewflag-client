import "./styles/ProfileEmailEdit.scss";
import { NavLink } from "react-router";

export default function ProfileEmailEdit() {
	return (
		<div className="profile-edit">
			<header className="profile-edit-header">
				<div className="profile-edit-header__logo">
					<img
						src="/images/logo-icon.svg"
						alt="Crewflag"
						className="profile-edit-header__logo-image"
					/>
					<p className="profile-edit-header__title">Профиль</p>
				</div>
			</header>

			<section className="profile-edit-block">
				<NavLink to="/security" className="email-edit-back">
					<img
						src="/images/dark-blue-arrow-left.svg"
						alt=""
						className="email-edit-back__icon"
					/>
					<p className="email-edit-back__text">Назад</p>
				</NavLink>

				<div className="email-edit-content">
					<div className="email-edit-content__wrapper">
						<h2 className="email-edit-content__title">Изменить e-mail</h2>
						<p className="email-edit-content__subtitle">
							Введите новый e-mail для смены старой почты
						</p>
						<input
							type="email"
							className="email-edit-content__item"
							placeholder="example@mail.com"
						/>
					</div>
				</div>
			</section>
			<button className="email-edit-content__button">Подтвердить</button>
		</div>
	);
}
