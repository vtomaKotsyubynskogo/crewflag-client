import "./scss/AuthLayout.scss";
import {Outlet} from "react-router";

// export default function AuthLayout({children}: {children: ReactNode}) {
export default function AuthLayout() {
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
					</div>
					<div className="header__actions">
						<div className="header__search">
							<input
								type="search"
								className="header__search-input"
							/>
						</div>
						<div className="header__language">
							<select>
								<option value="ru">Русский</option>
								<option value="en">English</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<main className="main">
                <Outlet/>
			</main>
		</>
	);
}
