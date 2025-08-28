import "./styles/LoginForm.scss";
import {
	useState,
	useEffect,
	type ChangeEvent,
	type FormEvent,
	type FocusEvent
} from "react";
import cn from "classnames";

export default function LoginForm() {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});
	const [emailTouched, setEmailTouched] = useState(false);
	const [isEmailInvalid, setIsEmailInvalid] = useState(false);
	const [isFormFilled, setIsFormFilled] = useState(false);

	useEffect(() => {
		setIsFormFilled(
			Object.values(form).every((val) => val.trim() !== "")
		);
	}, [form]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value, validity } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: value,
		}));

		if (name === "email" && emailTouched) {
			setIsEmailInvalid(!validity.valid);
		}
	};

	const handleEmailBlur = (e: FocusEvent<HTMLInputElement>) => {
		setEmailTouched(true);
		setIsEmailInvalid(!e.target.validity.valid);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!isFormFilled || isEmailInvalid) return;

		console.log("Форма входа:", form);
	};

	return (
		<div className="login-form">
			<div className="login-form__wrapper">
				<img
					src="/images/logo-icon.svg"
					alt="Crewflag"
					className="login-form__logo-image"
				/>
				<h1 className="login-form__title">Войти в кабинет</h1>
				<form noValidate className="login-form__form" onSubmit={handleSubmit}>
					<div className="login-form__inputs">
						<input
							type="email"
							name="email"
							className={cn(
								"login-form__item",
								isEmailInvalid && "login-form__item--error"
							)}
							placeholder="Адрес электронной почты"
							required
							formNoValidate
							onChange={handleChange}
							onBlur={handleEmailBlur}
						/>
						<input
							type="password"
							name="password"
							className="login-form__item"
							placeholder="Пароль"
							required
							onChange={handleChange}
						/>
					</div>
					<button
						type="submit"
						className={cn(
							"login-form__submit-button",
							isFormFilled && !isEmailInvalid && "login-form__submit-button--active"
						)}
					>
						Вход					</button>
				</form>
				<p className="login-form__already-link">
					У вас нет учетной записи?{" "}
					<a
						className="login-form__link login-form__already-link"
						href="/"
					>
						Регистрация
					</a>
				</p>
			</div>
		</div>
	);
}
