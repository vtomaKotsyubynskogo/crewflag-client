import "./styles/RegisterAccepted.scss";

export default function RegisterAccepted() {
	return (
		<>
			<div className="register-accepted">
				<div className="register-accepted__wrapper">
					<img
						src="/images/logo-icon.svg"
						alt="Crewflag"
						className="register-accepted__logo-image"
					/>
					<h1 className="register-accepted__title">
						Регистрация отправлена на модерацию
					</h1>
					<img
						className="register-accepted__checked"
						src="/images/check-icon.svg"
						alt="Подтверждено"
					/>
					<p className="register-accepted__description">
						Спасибо за регистрацию! <br /> В ближайшее время вы
						получите ответ модерации!
					</p>
					<button type="submit" className="register-accepted__button">
						На главную страницу
					</button>
				</div>
			</div>
		</>
	);
}
