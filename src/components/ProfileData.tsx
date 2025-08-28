import "./styles/ProfileData.scss";
import Select from "./ui/Select.tsx";
import cn from "classnames";
import { CITIES } from "./ui/cities.tsx";
import { FLEET_TYPE } from "./ui/fleetType.tsx";
import { POSITION_OPTIONS } from "./ui/positionOptions.tsx";
import { SHIP_TYPE_OPTIONS } from "./ui/shipType.tsx";
import { COC_LEVEL } from "./ui/cocLevel.tsx";
import { useEffect, useState, useTransition } from "react";
import { useNavigate } from "react-router";

export default function ProfileData() {
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
			<div className="profile-data">
				<div className="profile-data__title-block">
					<div className="profile-data__title-text-block">
						<p className="profile-data__title">Данные профиля</p>
						<img
							src="/images/editing-icon.svg"
							alt=""
							className="profile-data__edit-icon"
						/>
					</div>
				</div>
				<form onSubmit={handleSubmit} className="profile-data__form">
					<div className="profile-data__form-section">
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
							className="profile-data__item"
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
							className="profile-data__item"
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
							className="profile-data__item"
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
							className="profile-data__item"
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
								cityError && "profile-data__item--error",
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
									prev === "fleetType" ? null : "fleetType",
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
								fleetError && "profile-data__item--error",
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
								positionError && "profile-data__item--error",
							)}
							placeholder={"Тип должности"}
							defaultValue={form.positionType}
							data={POSITION_OPTIONS.flatMap((el) => el.options)}
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
								shipTypeError && "profile-data__item--error",
							)}
							placeholder={"Тип судна"}
							defaultValue={form.shipType}
							data={SHIP_TYPE_OPTIONS.flatMap((el) => el.options)}
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
								cocLevelError && "profile-data__item--error",
							)}
							placeholder={"COC"}
							defaultValue={form.cocLevel}
							data={COC_LEVEL}
						/>
					</div>
					<button
						type="submit"
						disabled={isPending}
						className={`profile-data__submit profile-data__item ${isFormFilled && !isPending ? "profile-data__submit--active" : ""} ${isPending ? "profile-data__submit--pending" : ""}`}
					>
						Подтвердить
					</button>
				</form>
			</div>
		</>
	);
}
