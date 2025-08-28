import "./styles/ArticlesScreen.scss";
import { useState } from "react";
import ArticleCard from "./АrticleCard.tsx";

const tabs = [
	{
		id: 1,
		title: "Актуально",
	},
	{
		id: 2,
		title: "Вакансии",
	},
	{
		id: 3,
		title: "Индустрия",
	},
	{
		id: 4,
		title: "Здоровье",
	},
	{
		id: 5,
		title: "Путишествия",
	},
];

const firstArticles = [
	{
		title: "Трудовые отношения — гайд от юристов",
		description:
			"Какие есть преимущества у трудовых отношений, расскажем подробнее в этом гайде.",
		date: new Date("09.27.2025 11:00"),
		image: "first-article-image.svg",
		category: "Актуально",
		views: 40

	},
];

const articles = [

	{
		title: "Что ожидает судоходную отрасль в 2022 и 2023 годах?",
		description:
			"Какие есть преимущества у трудовых отношений, расскажем подробнее в этом гайде.",
		date: new Date("09.27.2025 11:00"),
		category: "Вакансии",
		views: 40
	},
	{
		title: "20 интересных фактов о морской индустрии и работе в море",
		description:
			"Какие есть преимущества у трудовых отношений, расскажем подробнее в этом гайде.",
		date: new Date("09.27.2025 11:00"),
		category: "Здоровье",
		views: 40

	},
	{
		title: "Лучшие крюинговые компании мира в 2021 году",
		description:
			"Какие есть преимущества у трудовых отношений, расскажем подробнее в этом гайде.",
		date: new Date("09.27.2025 11:00"),
		category: "Индустрия",
		views: 40

	},
	{
		title: "Здоровье и благополучие моряков в 2021 году",
		description:
			"Какие есть преимущества у трудовых отношений, расскажем подробнее в этом гайде.",
		date: new Date("09.27.2025 11:00"),
		category: "Индустрия",
		views: 40
	},
];

export default function ArticlesScreen() {
	const [activeTab, setActiveTab] = useState(1);
	return (
		<>
			<div className="articles-screen-container">
				<div className="articles-screen-categories">
					<h2 className="categories-title">Категории</h2>
					<div className="categories-container">
						{tabs.map((tab) => (
							<button
								className={`category-name ${activeTab === tab.id ? "category-name-active" : ""}`}
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
							>
								{tab.title}
							</button>
						))}
					</div>
				</div>
				<div className="articles-cards-section">
					<h1 className="articles-screen-title">Статьи</h1>
					<div className="articles-first-card">
						{firstArticles.map((firstArticle, key) => (
							<ArticleCard
								key={key}
								title={firstArticle.title}
								description={firstArticle.description}
								date={firstArticle.date}
								category={firstArticle.category}
								image={firstArticle.image}
								views={firstArticle.views}
								isWide={true}
							/>
						))}
					</div>
					<div className="others-cards">
						{articles.map((article, key) => (
							<ArticleCard
								key={key}
								title={article.title}
								description={article.description}
								date={article.date}
								views={article.views}
								category={article.category}
							/>
						))}
					</div>
					<button className="more-articles">Загрузить больше</button>
				</div>
			</div>
		</>
	);
}
