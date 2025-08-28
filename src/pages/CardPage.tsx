import "./scss/CardPage.scss";
import CategoriesItem from "../components/CategoriesItem.tsx";
import { useState } from "react";

interface TitleItem {
	text: string;
	value: string;
}

const title: TitleItem[] = [
	{
		text: "Карта",
		value: "card",
	},
	{
		text: "Рефералы",
		value: "referral",
	},
	{
		text: "Бонусы",
		value: "bonuses",
	},
	{
		text: "Подарки",
		value: "gifts",
	},
];

export default function CardPage() {
	const [selectedCategory, setSelectedCategory] = useState(title[0].value);
	return (
		<>
			<div className="card-page">
				<div className="card-page__category-list">
					{title.map((el, key) => (
						<CategoriesItem
							key={key}
							title={el.text}
							isActive={el.value === selectedCategory}
							onClick={() => setSelectedCategory(el.value)}
						/>
					))}
				</div>
				<div className="card-page__title-container">
					<h3 className="card-page__title">Клуб моряков</h3>
				</div>
				<div className="card-page__container">
					<div className="card-page__blue-bg"></div>
					<img src="/images/card-image.png" alt="" className="card-page__image" />
				</div>
			</div>
		</>
	);
}
