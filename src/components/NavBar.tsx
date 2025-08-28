import "./styles/NavBar.scss";

export default function NavBar() {
	return (
		<>
			<div className="nav-bar-container">
				<div className="nav-bar">
					<div className="nav-tabs">
						<a href="/">
							<img
								src="/images/logo-icon.svg"
								alt="Logo"
								className="main-logo"
							/>
						</a>
						<a href="/" className="nav-link">
							Моряк
						</a>
						<a href="/" className="nav-link">
							Судовладелец
						</a>
						<a href="/" className="nav-link">
							Партнер
						</a>
					</div>
					<div className="nav-actions">
						<img src="/images/search-icon.svg" alt="Search" className="nav-search" />
						<select className="lang-selector">
							<option className="language" value="ru">
								Русский
							</option>
							<option className="language" value="en">
								English
							</option>
						</select>
						<button className="nav-login">
							<img src="/images/login-icon.svg" alt=" " /> Вход
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
