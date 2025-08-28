import "./scss/ChatPage.scss";
import CategoriesItem from "../components/CategoriesItem.tsx";
import { useState } from "react";

interface TitleItem {
	text: string;
	value: string;
}

const title: TitleItem[] = [
	{
		text: "Чат",
		value: "chat",
	},
	{
		text: "Уведомления",
		value: "notification",
	},
	{
		text: "Поддержка",
		value: "support",
	},
	{
		text: "Инжинер",
		value: "engineer",
	},
	{
		text: "Инжинер",
		value: "engineer",
	},
	{
		text: "Инжинер",
		value: "engineer",
	},
];

export default function ChatPage() {
	const [selectedCategory, setSelectedCategory] = useState(title[0].value);

	return (
		<>
			<div className="chat-page">
				<div className="chat-page__category-list">
					{title.map((el, key) => (
						<CategoriesItem
							key={key}
							title={el.text}
							isActive={el.value === selectedCategory}
							onClick={() => setSelectedCategory(el.value)}
						/>
					))}
				</div>
				<div className="chat-page__title-container">
					<p className="chat-page__title">Глобальный чат</p>
				</div>
				<div className="chat-page__container"></div>
				<div className="chat-page__input-container">
					<input className="chat-page__input" placeholder="Сообщение..."/>
					<img src="/images/chat-send-icon.svg" alt="send message" className="chat-page__send-icon"/>
				</div>
			</div>
		</>
	);
}
