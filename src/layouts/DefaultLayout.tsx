import "./scss/DefaultLayout.scss";
import { NavLink, Outlet, useLocation } from "react-router";
import BottomNavBar from "../components/BottomNavBar.tsx";
import { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop.tsx";

const routeToBreadcrumbs: Record<string, string> = {
	"/exchange": "Биржа",
	"/chat": "Чат",
	"/events": "События",
	"/card": "Клуб моряков",
};

export default function DefaultLayout() {
	const username = "Александр";
	const location = useLocation();
	const [breadcrumbKey, setBreadcrumbKey] = useState<string | null>(null);

	useEffect(() => {
		const key = Object.keys(routeToBreadcrumbs).find((key) =>
			location.pathname.includes(key),
		);
		setBreadcrumbKey(key || null);
	}, [location.pathname]);

	return (
		<>
			<div className="header">
				<div className="header__wrapper">
					<div className="header__logo">
						<img
							src="/images/logo-icon.svg"
							alt="Crewflag"
							className="header__logo-image"
						/>
						{breadcrumbKey && (
							<span className="header__logo-title">
								{routeToBreadcrumbs[breadcrumbKey]}
							</span>
						)}
					</div>
					<div className="header__actions">
						<NavLink to="/profile/data" className="header__account">
							<div className="username">
								<p className="username__title">
									{username}{" "}
									<img
										src="/images/dark-arrow-right.svg"
										alt=" "
										className="usesname__arrow"
									/>
								</p>
								<img
									src="/images/status-pro1.svg"
									alt="status"
									className="usesname__status"
								/>
							</div>
							<div className="header__user-photo">
								<img
									src="/images/user-icon.svg"
									alt="user"
									className="username__user-icon"
								/>
							</div>
						</NavLink>
					</div>
				</div>
			</div>
			<main className="default-layout-main">
				<ScrollToTop />
				<Outlet />
			</main>
			<BottomNavBar />
		</>
	);
}
