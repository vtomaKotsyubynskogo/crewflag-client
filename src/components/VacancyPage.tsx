import "./styles/VacancyPage.scss";
import { NavLink } from "react-router";

export default function VacancyPage() {
	return (
		<>
			<div className="vacancy-page">
				<div className="vacancy-page__nav-button">
					<NavLink to="/exchange" className="vacancy-page-back">
						<img
							src="/images/dark-blue-arrow-left.svg"
							alt=""
							className="vacancy-page-back__icon"
						/>
						<p className="vacancy-page-back__text">Назад</p>
					</NavLink>
					<NavLink to="#" className="vacancy-page-like">
						<img
							src="/images/like-icon.svg"
							alt=""
							className="vacancy-page-like__icon"
						/>
					</NavLink>
				</div>
				<div className="vacancy-page__content">
					<div className="vacancy-page__title-part">
						<div className="vacancy-page__text">
							<h2 className="vacancy-page__title">
								Third Engineer for VLCC
							</h2>
							<p className="vacancy-page__salary">$ 6,050/мес</p>
						</div>
						<div className="vacancy-page__hot-wrapper">
							<img
								src="/images/hot-icon.png"
								alt=""
								className="vacancy-page__hot"
							/>
						</div>
					</div>
					<div className="vacancy-page__characteristics">
						<div className="vacancy-page__info">
							<p className="vacancy-page__label">Компания</p>
							<div className="vacancy-page__company">
								<p className="vacancy-page__value vacancy-page__company-value">
									Flama Maritime Coaster Fleet
								</p>
								<img
									src="/images/verify-icon.svg"
									alt=""
									className="vacancy-page__verify-icon"
								/>
							</div>
						</div>
						<div className="vacancy-page__info">
							<p className="vacancy-page__label">Дата посадки:</p>
							<p className="vacancy-page__value">09.08.2024</p>
						</div>
						<div className="vacancy-page__info">
							<p className="vacancy-page__label">
								Длина контракта:
							</p>
							<p className="vacancy-page__value">3 месяца</p>
						</div>
						<div className="vacancy-page__info">
							<p className="vacancy-page__label">Тип судна:</p>
							<p className="vacancy-page__value">Cruise Liner</p>
						</div>
						<div className="vacancy-page__info">
							<p className="vacancy-page__label">Флаг судна:</p>
							<img
								src="/images/russia-flag-icon.svg"
								alt=""
								className="vacancy-page__ship"
							/>
						</div>
						<div className="vacancy-page__info">
							<p className="vacancy-page__label">Судовладелец:</p>
							<img
								src="/images/russia-flag-icon.svg"
								alt=""
								className="vacancy-page__shipowner"
							/>
						</div>
						<div className="vacancy-page__info">
							<p className="vacancy-page__label">DWT судна:</p>
							<p className="vacancy-page__value">24782</p>
						</div>
						<div className="vacancy-page__info">
							<p className="vacancy-page__label">
								Год постройки:
							</p>
							<p className="vacancy-page__value">2020</p>
						</div>
					</div>
					<div className="vacancy-page-description">
						<h3 className="vacancy-page-description__title">
							Описание вакансии
						</h3>
						<p className="vacancy-page-description__text">
							Обеспечение бесперебойной работы всех судовых
							энергетических установок, вспомогательных механизмов
							и систем (двигатели, генераторы, компрессоры,
							системы водоснабжения, вентиляции и т.д.) <br/><br/>Проведение
							планового технического обслуживания и ремонта
							оборудования <br/><br/> Ведение технической документации и
							отчетности по эксплуатации механизмов
						</p>
					</div>
				</div>
				<div className="vacancy-page__bottom">
					<div className="vacancy-page__publication">
						<div className="vacancy-page__date-block">
							<img
								src="/images/calendar-icon.svg"
								alt=""
								className="vacancy-page__calendar-icon"
							/>
							<p className="vacancy-page__date">16 Августа</p>
							<p className="vacancy-page__date">11:00</p>
						</div>
						<div className="vacancy-page__reviews-block">
							<div className="vacancy-page__rating">
								<img
									src="/images/star-icon.svg"
									alt=""
									className="vacancy-page__rating-icon"
								/>
								<p className="vacancy-page__rating-value">
									4,9
								</p>
							</div>
							<div className="vacancy-page__reviews">
								62 отзыва
							</div>
						</div>
					</div>
					<div className="vacancy-page__button-block">
						<button className="vacancy-page__button">
							Откликнуться
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
