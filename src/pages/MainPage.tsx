import "./scss/MainPage.scss";
import { NavLink } from "react-router";
import SearchInput from "../components/SearchInput.tsx";
import BlueSphere from "../components/BlueSphere.tsx";

export default function MainPage() {
	return (
		<>
			<div className="main-page">
				<NavLink to="#" className="main-page__notification">
					<p className="main-page__notification-text">
						Зарегистрируйтесь в экосистеме CrewFlag и заполните
						данные CV
					</p>
					<img
						src="/images/blue-arrow-right.svg"
						alt=" "
						className="main-page__notification-image"
					/>
				</NavLink>
				<SearchInput />
				<div className="main-page__content">
					<BlueSphere width={152} height={133} />
					<div className="benefits-section">
						<div className="benefits-section__item">
							<p className="benefits-section__text">
								Присоединяйся к команде
							</p>
							<img
								src="/images/benefits-card-icon.svg"
								alt=""
								className="benefits-section__image"
							/>
						</div>
						<div className="benefits-section__item">
							<p className="benefits-section__text">
								Находи работу своей мечты
							</p>
							<img
								src="/images/benefits-work-icon.svg"
								alt=""
								className="benefits-section__image"
							/>
						</div>
						<div className="benefits-section__item">
							<p className="benefits-section__text">
								Присоединяйся к перевозкам
							</p>
							<img
								src="/images/benefits-transport-icon.svg"
								alt=""
								className="benefits-section__image"
							/>
						</div>
						<div className="benefits-section__item">
							<p className="benefits-section__text">
								Присоединяйся к команде
							</p>
							<img
								src="/images/benefits-card-icon.svg"
								alt=""
								className="benefits-section__image"
							/>
						</div>
						<div className="benefits-section__item">
							<p className="benefits-section__text">
								Присоединяйся к команде
							</p>
							<img
								src="/images/benefits-work-icon.svg"
								alt=""
								className="benefits-section__image"
							/>
						</div>
					</div>
					<div className="actions">
						<div className="actions__first-block">
							<NavLink to="#" className="actions__block">
								<div className="counter">1</div>
								<div className="actions__wrapper">
									<img
										src="/images/layer-support-icon.svg"
										alt=""
										className="actions__icon"
									/>
									<p className="actions__title actions__short-text">
										Поддержка Юриста
									</p>
								</div>
								<img
									src="/images/dark-blue-arrow-right.svg"
									alt=""
									className="actions__arrow-icon"
								/>
							</NavLink>
							<NavLink to="#" className="actions__block">
								<div className="counter">1</div>
								<div className="actions__wrapper">
									<img
										src="/images/club-card-icon.svg"
										alt=""
										className="actions__icon"
									/>
									<p className="actions__title actions__short-text">
										Клубная Карта
									</p>
								</div>
								<img
									src="/images/dark-blue-arrow-right.svg"
									alt=""
									className="actions__arrow-icon"
								/>
							</NavLink>
						</div>
						<div className="actions__second-block">
							<NavLink
								to="#"
								className="actions__item actions__block"
							>
								<div className="counter">1</div>
								{/*<div className="actions__wrapper">*/}
								<img
									src="/images/cv-element-icon.svg"
									alt=""
									className="actions__icon-cv-element"
								/>
								<img
									src="/images/cv-icon.svg"
									alt=""
									className="actions__icon-cv"
								/>
								<p className="actions__title">Создать резюме</p>
								{/*</div>*/}
								<img
									src="/images/dark-blue-arrow-right.svg"
									alt=""
									className="actions__arrow-icon"
								/>
							</NavLink>
						</div>
					</div>
					<div className="social-media">
						{/*<div className="gradient-border">*/}
						<NavLink to="#" className="social-media__item">
							<div className="counter">1</div>
							<img
								src="/images/discord-icon.svg"
								alt=""
								className="social-media__icon"
							/>
							<p className="social-media__title">
								Присоединяйся к нашему сообществу в{" "}
								<span className="dis">Discord</span>
							</p>
							<img
								src="/images/dark-blue-arrow-right.svg"
								alt=""
								className="social-media__arrow-icon"
							/>
						</NavLink>
						{/*</div>*/}
						{/*<div className="gradient-border">*/}
							<NavLink to="#" className="social-media__item">
								<div className="counter">1</div>
								<img
									src="/images/instagram-icon.svg"
									alt=""
									className="social-media__icon"
								/>
								<p className="social-media__title">
									Присоединяйся к нашему сообществу в{" "}
									<span className="inst">Instagram</span>
								</p>
								<img
									src="/images/dark-blue-arrow-right.svg"
									alt=""
									className="social-media__arrow-icon"
								/>
							</NavLink>
						{/*</div>*/}
					</div>
				</div>
			</div>
		</>
	);
}
