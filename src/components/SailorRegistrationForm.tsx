import "./styles/SailorRegistrationForm.scss";
import { useNavigate } from "react-router";
import Select from "./ui/Select.tsx";
import { useEffect, useState, useTransition } from "react";
import cn from "classnames";
import { CITIES } from "./ui/cities.tsx";
import { COC_LEVEL } from "./ui/cocLevel.tsx";
import { POSITION_OPTIONS } from "./ui/positionOptions.tsx";
import { SHIP_TYPE_OPTIONS } from "./ui/shipType.tsx";
import { FLEET_TYPE } from "./ui/fleetType.tsx";
// import type {ChangeEvent} from "react";

export default function SailorRegistrationForm() {
	const [form, setForm] = useState({
		username: "",
		surname: "",
		patronymic: "",
		birthDate: "",
		city: "",
		fleet: "",
		positionType: "",
		shipType: "",
		cocLevel: "",
	});

	const [openSelect, setOpenSelect] = useState<
		"city" | "fleetType" | "positionType" | "shipType" | "cocLevel" | null
	>(null);

	const [cityError, setCityError] = useState(false);
	const [fleetError, setFleetError] = useState(false);
	const [positionError, setPositionError] = useState(false);
	const [shipTypeError, setShipTypeError] = useState(false);
	const [cocLevelError, setCocLevelError] = useState(false);

	const [isPending, startTransition] = useTransition();
	const [isFormFilled, setIsFormFilled] = useState(false);

	useEffect(() => {
		setIsFormFilled(
			Object.values(form).every((val) => {
				if (typeof val === "string") {
					return val.trim() !== "";
				}
				return val;
			}),
		);
	}, [form]);

	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate("/auth/signup/registration");

		startTransition(async () => {
			if (form.city.trim() === "") {
				setCityError(true);
				return;
			}
			if (form.fleet.trim() === "") {
				setFleetError(true);
				return;
			}
			if (form.positionType.trim() === "") {
				setPositionError(true);
				return;
			}
			if (form.shipType.trim() === "") {
				setShipTypeError(true);
				return;
			}
			if (form.cocLevel.trim() === "") {
				setCocLevelError(true);
				return;
			}

			await new Promise((res) => setTimeout(res, 1500)); // умовний запит

			setCityError(false);
			setFleetError(false);
			setCocLevelError(false);
			setPositionError(false);
			setShipTypeError(false);

			console.log("Форма відправлена", form);
			navigate("/auth/signup/verification");
		});
	};

	return (
		<>
			<div className="register-form">
				<div className="register-form__wrapper">
					<img
						src="/images/logo-icon.svg"
						alt="Crewflag"
						className="register-form__logo-image"
					/>
					<h1 className="register-form__title">Регистрация</h1>
					<p className="register-form__description">
						Заполните все поля чтобы отправить форму на модерацию
					</p>
					<div className="register-form__ship"></div>

					<form
						onSubmit={handleSubmit}
						className="register-form__form"
					>
						<div className="register-form__form-section">
							<input
								type="text"
								name="user-name"
								id="username"
								placeholder="Имя"
								required
								onChange={(e) =>
									setForm((prev) => ({
										...prev,
										username: e.target.value,
									}))
								}
								// onBlur={handleEmailBlur}
								className="register-form__item"
							/>
							<input
								type="text"
								name="surname"
								id="surname"
								placeholder="Фамилия"
								required
								onChange={(e) =>
									setForm((prev) => ({
										...prev,
										username: e.target.value,
									}))
								}
								// onBlur={handleEmailBlur}
								className="register-form__item"
							/>
							<input
								type="text"
								name="patronymic"
								id="patronymic"
								placeholder="Отчество"
								required
								onChange={(e) =>
									setForm((prev) => ({
										...prev,
										username: e.target.value,
									}))
								}
								// onBlur={handleEmailBlur}
								className="register-form__item"
							/>
							<input
								type="date"
								name="birthDate"
								id="birthDate"
								placeholder="Дата рождения"
								required
								onChange={(e) =>
									setForm((prev) => ({
										...prev,
										username: e.target.value,
									}))
								}
								// onBlur={handleEmailBlur}
								className="register-form__item"
							/>
							<Select
								id="city"
								defaultValue={form.city || null}
								open={openSelect === "city"}
								onToggle={() =>
									setOpenSelect((prev) =>
										prev === "city" ? null : "city",
									)
								}
								className={cn(
									cityError && "auth-register__item--error",
								)}
								placeholder={"Постоянное место жительства"}
								searchPlaceholder={"Выберите город"}
								data={CITIES}
								onChange={(value) => {
									setForm((prev) => ({
										...prev,
										city: value,
									}));
									setCityError(false);
								}}
							/>
							<Select
								id="fleet"
								open={openSelect === "fleetType"}
								onToggle={() =>
									setOpenSelect((prev) =>
										prev === "fleetType"
											? null
											: "fleetType",
									)
								}
								onChange={(value) => {
									setForm((prev) => ({
										...prev,
										fleet: value,
									}));
									setFleetError(false);
								}}
								className={cn(
									fleetError && "auth-register__item--error",
								)}
								placeholder={"Тип флота"}
								defaultValue={form.fleet}
								data={FLEET_TYPE}
							/>
							<Select
								id="positionType"
								open={openSelect === "positionType"}
								onToggle={() =>
									setOpenSelect((prev) =>
										prev === "positionType"
											? null
											: "positionType",
									)
								}
								onChange={(value) => {
									setForm((prev) => ({
										...prev,
										positionType: value,
									}));
									setPositionError(false);
								}}
								className={cn(
									positionError &&
										"auth-register__item--error",
								)}
								placeholder={"Тип должности"}
								defaultValue={form.positionType}
								data={POSITION_OPTIONS.flatMap(
									(el) => el.options,
								)}
							/>
							<Select
								id="shipType"
								open={openSelect === "shipType"}
								onToggle={() =>
									setOpenSelect((prev) =>
										prev === "shipType" ? null : "shipType",
									)
								}
								onChange={(value) => {
									setForm((prev) => ({
										...prev,
										shipType: value,
									}));
									setShipTypeError(false);
								}}
								className={cn(
									shipTypeError &&
										"auth-register__item--error",
								)}
								placeholder={"Тип судна"}
								defaultValue={form.shipType}
								data={SHIP_TYPE_OPTIONS.flatMap(
									(el) => el.options,
								)}
							/>
							<Select
								id="cocLevel"
								open={openSelect === "cocLevel"}
								onToggle={() =>
									setOpenSelect((prev) =>
										prev === "cocLevel" ? null : "cocLevel",
									)
								}
								onChange={(value) => {
									setForm((prev) => ({
										...prev,
										cocLevel: value,
									}));
									setCocLevelError(false);
								}}
								className={cn(
									cocLevelError &&
										"auth-register__item--error",
								)}
								placeholder={"COC"}
								defaultValue={form.cocLevel}
								data={COC_LEVEL}
							/>
						</div>
						<button
							type="submit"
							disabled={isPending}
							className={`auth-register__submit auth-register__item ${isFormFilled && !isPending ? "auth-register__submit--active" : ""} ${isPending ? "auth-register__submit--pending" : ""}`}
						>
							Подтвердить
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
