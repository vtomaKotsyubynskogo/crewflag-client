import "./styles/ArticleCard.scss";
import { formatDate } from "../utils/formatDate.ts";
import {NavLink} from "react-router";

export type ArticleCardCategory ='relevant' | 'health' | 'vacancies' | 'industry' | 'travels'

interface ArticleProps {
	id: string;
	title: string;
	description: string;
	date: Date;
	image?: string;
	category: ArticleCardCategory;
	views: number;

	isWide?: boolean;
}

const categoryToTitle: Record<ArticleCardCategory, string> = {
	relevant: "Актуально",
	health: "Здоровье",
	vacancies: "Вакансии",
	industry: "Индустрия",
	travels: "Путишествия"
}

export default function ArticleCard({
	id,
	title,
	description,
	date,
	image,
	category,
	views,
	isWide,
}: ArticleProps) {
	return (
		<>
			<NavLink to={`/events/${id}`}
				className={`article-card-container ${isWide ? "article-card-container-wide" : ""}`}
			>
				<div className={`article-card-category article-card-category-${category}`}>{categoryToTitle[category]}</div>
				<div className="article-text-section">
					<h1 className="article-card-title">{title}</h1>
					<p className="article-card-description">{description}</p>
					<div className="article-card-date-and-views">
						<div className="article-card-date-time">
							<img
								src="/images/calendar-icon.svg"
								alt=" "
								className="calendar-icon"
							/>
							<div className="date-time">
								{formatDate(date, "DD MMMM hh:mm")}
							</div>
						</div>
						<div className="article-card-mins">
							<p className="min-value">10м</p>
						</div>
						<div className="article-card-views">
							<img
								src="/images/visibility-icon.svg"
								alt=" "
								className="visibility-icon"
							/>
							<div className="views-value">{views}</div>
						</div>
						<div className="article-card-button">
							<img src="/images/dark-blue-arrow-right.svg" alt=" " className="article-card-button-icon"/>
						</div>
					</div>
				</div>
				{image ? (
					<div className="article-image">
						<img
							src={`/images/${image}`}
							alt=" "
							className="first-card"
						/>
					</div>
				) : null}
			</NavLink>
		</>
	);
}
