import "./styles/ProfilePasswordEdit.scss";
import { NavLink } from "react-router";

export default function ProfilePasswordEdit() {
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
				<NavLink to="/security" className="password-edit-back">
					<img
						src="/images/dark-blue-arrow-left.svg"
						alt=""
						className="password-edit-back__icon"
					/>
					<p className="password-edit-back__text">Назад</p>
				</NavLink>

				<div className="password-edit-content">
					<div className="password-edit-content__wrapper">
						<h2 className="password-edit-content__title">
							Изменить пароль
						</h2>
						<p className="password-edit-content__subtitle">
							Введите новый пароль для смены
						</p>
						<input
							type="password"
							className="password-edit-content__item"
							placeholder="Введите новый пароль"
						/>
					</div>

					<div className="password-edit-content__wrapper">
						<p className="password-edit-content__subtitle">
							Введите пароль еще раз
						</p>
						<input
							type="password"
							className="password-edit-content__item"
							placeholder="Повторите пароль"
						/>
					</div>
				</div>
			</section>

			<button className="password-edit-content__button">Подтвердить</button>
		</div>
	);
}
