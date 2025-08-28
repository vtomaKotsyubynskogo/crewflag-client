import "./styles/ArticlePage.scss";
import { NavLink, useParams } from "react-router";
import ReadAlsoArticle from "./ReadAlsoArticle.tsx";

export default function ArticlePage() {
	const { id } = useParams();
	return (
		<>
			<NavLink to={`/exchange/${id}`} className="article-page">
				<div className="article-page__nav-button">
					<NavLink to="/events" className="article-page-back">
						<img
							src="/images/dark-blue-arrow-left.svg"
							alt=""
							className="article-page-back__icon"
						/>
						<p className="article-page-back__text">Здоровье</p>
					</NavLink>
				</div>
				<div className="article-info">
					<div className="article-info__date-block">
						<img
							src="/images/calendar-icon.svg"
							alt=""
							className="article-info__calendar-icon"
						/>
						<p className="article-info__date">16 Августа</p>
						<p className="article-info__date">11:00</p>
					</div>
					<div className="article-info__min">10м</div>
					<div className="article-info__reviews-block">
						<img
							src="/images/visibility-icon.svg"
							alt=""
							className="article-info__reviews-icon"
						/>
						<div className="article-info__reviews">16</div>
					</div>
					<div className="article-info__comment">
						<img
							src="/images/comment-icon.svg"
							alt=""
							className="article-info__comment-icon"
						/>
						<p className="article-info__comment-value">16</p>
					</div>
				</div>
				<div className="article-page-content">
					<div className="article-page-content__category">
						<div className="article-page-content__first-category">
							Здоровье
						</div>
						<div className="article-page-content__second-category">
							Вакансии
						</div>
					</div>
					<div className="article-page-content__text-container">
						<h2 className="article-page-content__title">
							20 интересных фактов о морской индустрии и работе в
							море
						</h2>
						<p className="article-page-content__text">
							Морская индустрия — это основа глобальной торговли и
							одно из самых загадочных и романтичных направлений
							человеческой деятельности. Работа в море полна
							вызовов, но и открывает удивительные
							горизонты.Откройте для себя новые высоты, с нашей
							статьей о 20 интересных фактов, которые помогут
							взглянуть и почувствовать огромное сложное морское
							дело по-новому: <br />
							<br /> 90% мировой торговли осуществляется морским
							транспортом — от нефти до бананов. Самые большие
							корабли в мире — контейнеровозы. Они могут
							перевозить более 24 000 контейнеров за один рейс.
							<br />
							<br />
							Современные суда оснащены автопилотами, и часто
							капитан не управляет вручную судном в открытом море.
							<br />
							<br />
							Средняя продолжительность рейса моряка — от 4 до 9
							месяцев. Это тяжелая, но стабильная работа.
							<br />
							<br />
							Профессия моряка входит в число самых
							интернациональных: на одном судне могут работать
							представители 10 и более стран. Работа в море
							требует высокой квалификаци
						</p>
						<img
							src="/images/article-content-img.svg"
							alt=""
							className="article-page-content__img"
						/>
						<p className="article-page-content__img-description">
							Танкер “ Qatar-Max” в атлантическом океане
						</p>
					</div>
					<div className="read-also-block">
						<div className="read-also-block__title">
							Читайте так же
						</div>
						<div className="read-also-block__content">
							<ReadAlsoArticle />
							<ReadAlsoArticle />
						</div>
					</div>
				</div>
			</NavLink>
		</>
	);
}
