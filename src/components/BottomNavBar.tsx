import "./styles/BottomNavBar.scss";
import { NavLink } from "react-router";

export default function BottomNavBar() {
	return (
		<>
			<div className="bottom-nav-bar">
				<NavLink to="/" className="bottom-nav-bar__item">
					{({isActive}) => (
						<>
							<svg className="bottom-nav-bar__logo" >
								<use href={`/images/bottom-nav-bar-icons.svg#main-${isActive ? 'active' : 'passive'}`}></use>
							</svg>
							<p className="bottom-nav-bar__title">Главная</p>
						</>
					)}
				</NavLink>
				<NavLink to="/card" className="bottom-nav-bar__item">
					{({isActive}) => (
						<>
							<svg className="bottom-nav-bar__logo"
							>
								<use href={`/images/bottom-nav-bar-icons.svg#card-${isActive ? 'active' : 'passive'}`}></use>
							</svg>
							<p className="bottom-nav-bar__title">Карта</p>
						</>
					)}
				</NavLink>
				<NavLink to="/chat" className="bottom-nav-bar__item">
					{({isActive}) => (
						<>
							<svg className="bottom-nav-bar__logo" >
								<use href={`/images/bottom-nav-bar-icons.svg#chat-${isActive ? 'active' : 'passive'}`}></use>
							</svg>
							<p className="bottom-nav-bar__title">Чат</p>
						</>
					)}

				</NavLink>
				<NavLink to="/exchange" className="bottom-nav-bar__item">
					{({isActive}) => (
						<>
							<svg className="bottom-nav-bar__logo">
								<use href={`/images/bottom-nav-bar-icons.svg#exchange-${isActive ? 'active' : 'passive'}`}></use>
							</svg>
							<p className="bottom-nav-bar__title">Биржа</p>
						</>
					)}
				</NavLink>
				<NavLink to="/events" className="bottom-nav-bar__item">
					{({isActive}) => (
						<>
							<svg className="bottom-nav-bar__logo">
								<use href={`/images/bottom-nav-bar-icons.svg#events-${isActive ? 'active' : 'passive'}`}></use>
							</svg>
							<p className="bottom-nav-bar__title">События</p>
						</>
					)}
				</NavLink>
			</div>
		</>
	);
}
