import "./scss/ProfileLayout.scss";
import { Outlet, useLocation } from "react-router";
import BottomNavBar from "../components/BottomNavBar.tsx";
import ProfileNavButtons from "../components/ProfileNavButtons.tsx";
import {
	useEffect,
	useState,
	createContext,
	useContext,
} from "react";

interface Notification {
	id: string;
	type: "success" | "error";
	message: string;
}

interface NotificationContextType {
	addNotification: (type: Notification["type"], message: string) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotifications = () => {
	const ctx = useContext(NotificationContext);
	if (!ctx)
		throw new Error(
			"useNotifications must be used within NotificationProvider",
		);
	return ctx;
};

interface TitleItem {
	text: string;
	value: string;
}

const titles: TitleItem[] = [
	{ text: "Данные", value: "data" },
	{ text: "Безопасность", value: "security" },
	{ text: "Анкета", value: "questionnaire" },
];

export default function ProfileLayout() {
	const location = useLocation();
	const [selectedCategory, setSelectedCategory] = useState<string | null>(
		null,
	);
	const [notifications, setNotifications] = useState<Notification[]>([]);

	const addNotification = (type: Notification["type"], message: string) => {
		const id = Date.now().toString();
		setNotifications((prev) => [...prev, { id, type, message }]);
		setTimeout(() => {
			setNotifications((prev) => prev.filter((n) => n.id !== id));
		}, 4000);
	};

	useEffect(() => {
		const category = titles.find(
			(title) => title.value === location.pathname.split("/")[2],
		);
		setSelectedCategory(category?.value || titles[0].value);
	}, [location.pathname]);

	return (
		<NotificationContext.Provider value={{ addNotification }}>
			<div className="profile">
				<div className="profile-header">
					<div className="profile-header__wrapper">
						<div className="profile-header__logo">
							<img
								src="/images/logo-icon.svg"
								alt="Crewflag"
								className="profile-header__logo-image"
							/>
							<p className="profile-header__title">Профиль</p>
						</div>
					</div>

					<div className="profile-content">
						<img
							src="/images/settings-icon.svg"
							alt=""
							className="profile-content__settings-icon"
						/>
						<img
							src="/images/editing-icon.svg"
							alt=""
							className="profile-content__editing-icon"
						/>
						<div className="profile-content__image-container">
							<div className="profile-content__profile-photo-border">
								<img
									src="/images/profile-photo.svg"
									alt=""
									className="profile-content__profile-photo"
								/>
							</div>
							<img
								src="/images/status-pro1.svg"
								alt=""
								className="profile-content__status-pro1"
							/>
							<div className="profile-content__bg-gradient"></div>
						</div>
						<p className="profile-content__username">
							Александр Рожков
						</p>
						<p className="profile-content__rank">Капитан 1 ранга</p>
						<div className="profile-content__buttons">
							{titles.map((el, key) => (
								<ProfileNavButtons
									key={key}
									title={el.text}
									to={el.value}
									isActive={el.value === selectedCategory}
									onClick={() =>
										setSelectedCategory(el.value)
									}
								/>
							))}
						</div>
					</div>
				</div>

				<main className="profile-layout-main">
					<Outlet />
				</main>

				{/* Сповіщення */}
				<div className="notifications-wrapper">
					{notifications.map((n) => (
						<div
							key={n.id}
							className={`notification notification-${n.type}`}
						>
							<div
								className="notification__text"
								dangerouslySetInnerHTML={{ __html: n.message }}
							/>
							{n.type === "success" ? (
								<img
									src="/images/check-icon.svg"
									alt="ok"
									className="notification__icon"
								/>
							) : (
								<img
									src="/images/error-icon.svg"
									alt="error"
									className="notification__icon"
								/>
							)}
						</div>
					))}
				</div>
			</div>
			<BottomNavBar />
		</NotificationContext.Provider>
	);
}
