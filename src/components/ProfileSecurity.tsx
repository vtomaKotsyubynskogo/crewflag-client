import "./styles/ProfileSecurity.scss";
import { useNotifications } from "../layouts/ProfileLayout";

export default function ProfileSecurity() {

	const { addNotification } = useNotifications();

	const handleSuccess = () => {
		addNotification("success", "Данные подтверждены! <br/>Регистрация прошла успешно!");
	};

	const handleError = () => {
		addNotification("error", "Подтвердите верификацию! <br/> Мы отправили вам письмо на вашу почту");
	};

	return (
		<>
			<div className="profile-security">
				<div className="profile-security__title-block">
					<div className="profile-security__title-text-block">
						<p className="profile-security__title">
							Данные безопасности
						</p>
						{/*<img*/}
						{/*	src="/images/editing-icon.svg"*/}
						{/*	alt=""*/}
						{/*	className="profile-security__edit-icon"*/}
						{/*/>*/}
					</div>
				</div>
				<form className="profile-security__form">
					<input
						type="email"
						name="email"
						id="user-email"
						placeholder="E -mail"
						required
						formNoValidate
						className="profile-security__item"
						value="email@email.com"
					/>
					<div className="profile-security__password-container">
						<input
							type="password"
							name="password"
							id="user-password"
							className="profile-security__item"
							placeholder="Пароль"
							required
							value="password"
						/>

					</div>
				</form>
				<button onClick={handleSuccess}>success</button>
				<button onClick={handleError}>error</button>
			</div>
		</>
	);
}
