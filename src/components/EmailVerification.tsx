import "./styles/EmailVerification.scss";
import EmailInputs from "./EmailInputs.tsx";
import { useState } from "react";
import cn from "classnames";
import {useNavigate} from "react-router";

export default function EmailVerification() {
	const [code, setCode] = useState<string[]>(Array(6).fill(""));
	const navigate = useNavigate()

	const isCodeEntered = code.every((digit) => digit !== "")

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate('/auth/signup/success')
	}

	return (
		<div className="email-verification">
			<div className="email-verification__wrapper">
				<img
					src="/images/logo-icon.svg"
					alt="Crewflag"
					className="email-verification__logo-image"
				/>
				<h1 className="email-verification__title">
					Подтвердите свой адрес электронной почты
				</h1>
				<p className="email-verification__description">
					Чтобы завершить настройку учетной записи, вам необходимо
					подтвердить свой адрес электронной почты которую вы указали
					при регистрации. Введите 6 значный код отправленный на
					почту.
				</p>
				<form className="email-verification__form" onSubmit={handleSubmit}>
					<EmailInputs
						length={6}
						onChange={(index, value) => {
							const updated = [...code];
							updated[index] = value;
							setCode(updated);
							console.log(`Індекс: ${index}, Значення: ${value}`);
						}}
					/>
					<button
						type="submit"
						className={cn(
							'email-verification__submit-button',
							isCodeEntered && "email-verification--active"
						)}
						disabled={!isCodeEntered}
					>
						Подтвердить адрес электронной почты
					</button>
				</form>
				<p className="email-verification__already-link">
					У вас есть учетная запись?{" "}
					<a
						className="email-verification__link email-verification__already-link"
						href="/"
					>
						Войти
					</a>
				</p>
			</div>
		</div>
	);
}
