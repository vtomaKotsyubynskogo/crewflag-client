import "./styles/AccountCreation.scss";
import Select from "./ui/Select";
import {
	useState,
	useEffect,
	type FormEvent,
	type ChangeEvent,
	type FocusEvent, useTransition,
} from "react";
import "./styles/AccountCreation.scss";
import cn from "classnames";
import {useNavigate} from "react-router";
import {COUNTRIES} from "./ui/countries.tsx";

export default function AccountCreation() {
	const [form, setForm] = useState({
		country: "",
		email: "",
		name: "",
		surname: "",
		password: "",
		agreement: false
	});
	const [isOpen, setIsOpen] = useState(false);
	const [countryError, setCountryError] = useState(false);
	const [emailTouched, setEmailTouched] = useState(false);
	const [isEmailInvalid, setIsEmailInvalid] = useState(false);
	const [isFormFilled, setIsFormFilled] = useState(false);
	const navigate = useNavigate()

	const [isPending, startTransition] = useTransition();

	useEffect(() => {
		setIsFormFilled(Object.values(form).every((val) => {
			if(typeof val === 'string') {
				return val.trim() !== ""
			}
			return val
		}));
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

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target;
		setForm((prev) => ({
			...prev,
			[name]: checked,
		}));
	}

	const handleEmailBlur = (e: FocusEvent<HTMLInputElement>) => {
		setEmailTouched(true);
		setIsEmailInvalid(!e.target.validity.valid);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		startTransition(async () => {

			if (form.country.trim() === "") {
				setCountryError(true);
				return;
			}

			await new Promise((res) => setTimeout(res, 1500)); // умовний запит

			setCountryError(false);
			console.log("Форма відправлена", form);
			navigate('/auth/signup/verification')
		})
	};

	return (
		<>
				<div className="auth-register">
					<div className="auth-register__wrapper">
						<img
							src="/images/logo-icon.svg"
							alt="Crewflag"
							className="auth-register__logo-image"
						/>
						<h1 className="auth-register__title">
							Создать учетную запись
						</h1>
						<form
							onSubmit={handleSubmit}
							className="auth-register__form"
						>
							<div className="auth-register__form-section">
								<Select
									id='country'
									open={isOpen}
									data={COUNTRIES}
									onToggle={() => setIsOpen(!isOpen)}
									className={cn(countryError && "auth-register__item--error")}
									onChange={(value) => {
										setForm((prev) => ({
											...prev,
											country: value,
										}));
										setCountryError(false);
									}}
									placeholder={"Страна"}
									searchPlaceholder={"Найдите страну"}
									defaultValue={form.country || null}
								/>

								<input
									type="email"
									name="email"
									id="user-email"
									// className="auth-register__item"
									placeholder="Адрес электронной почты"
									required
									formNoValidate
									onChange={handleChange}
									onBlur={handleEmailBlur}
									className={`auth-register__item ${isEmailInvalid ? "auth-register__item--error" : ""}`}
								/>
								<div className="auth-register__row">
									<input
										type="text"
										name="name"
										id="user-name"
										className="auth-register__item"
										placeholder="Имя"
										required
										onChange={handleChange}
									/>
									<input
										type="text"
										name="surname"
										id="user-surname"
										className="auth-register__item"
										placeholder="Фамилия"
										required
										onChange={handleChange}
									/>
								</div>
								<input
									type="password"
									name="password"
									id="user-password"
									className="auth-register__item"
									placeholder="Пароль"
									required
									onChange={handleChange}
								/>
							</div>
							<div className="auth-register__agreement">
								<input
									type="checkbox"
									id="agreement"
									name='agreement'
									className="auth-register__checkbox"
									required
									onChange={handleCheckboxChange}
								/>
								<label
									htmlFor="agreement"
									className="auth-register__description"
								>
									Я соглашаюсь на обработку моих личных данных
									в сответствии с политикой
									конфиденциальности. Я прочитал и согласен с{' '}
									<a
										className="auth-register__inner-color"
										href="/"
									>
										Условиями пользования
									</a>
								</label>
							</div>
							<button
								type="submit"
								disabled={isPending}
								className={`auth-register__submit auth-register__item ${isFormFilled && !isPending ? "auth-register__submit--active" : ""} ${isPending ? 'auth-register__submit--pending' : ''}`}
							>
								Подтвердить
							</button>
						</form>
						<p className="auth-register__already-link">
							У вас есть учетная запись?{' '}
							<a
								className="auth-register__link auth-register__already-link"
								href="/"
							>
								Войти
							</a>
						</p>
					</div>
				</div>
		</>
	);
}
