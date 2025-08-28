import "./scss/EventsPage.scss"
import CategoriesItem from "../components/CategoriesItem.tsx";
import {useState} from "react";
import SearchInput from "../components/SearchInput.tsx";
import ArticleCard, {ArticleCardCategory} from "../components/АrticleCard.tsx";

interface TitleItem {
    text: string;
    value: string;
}

const title: TitleItem[] = [
    {
        text: "Актуально",
        value: "relevant",
    },
    {
        text: "Вакансии",
        value: "vacancies",
    },
    {
        text: "Индустрия",
        value: "industry",
    },
    {
        text: "Здоровье",
        value: "health",
    },
    {
        text: "Путишествия",
        value: "travels",
    },
];

interface ArticlesItemType {
    id: number;
    title: string;
    description: string;
    date: Date;
    category: ArticleCardCategory;
    views: number;
}

const articles: ArticlesItemType[] = [

    {
        id: 1,
        title: "Что ожидает судоходную отрасль в 2022 и 2023 годах?",
        description:
            "Какие есть преимущества у трудовых отношений, расскажем подробнее в этом гайде.",
        date: new Date("09.27.2025 11:00"),
        category: "vacancies",
        views: 40
    },
    {
        id: 2,
        title: "20 интересных фактов о морской индустрии и работе в море",
        description:
            "Какие есть преимущества у трудовых отношений, расскажем подробнее в этом гайде.",
        date: new Date("09.27.2025 11:00"),
        category: "health",
        views: 40

    },
    {
        id: 3,
        title: "Лучшие крюинговые компании мира в 2021 году",
        description:
            "Какие есть преимущества у трудовых отношений, расскажем подробнее в этом гайде.",
        date: new Date("09.27.2025 11:00"),
        category: "industry",
        views: 40

    },
    {
        id: 4,
        title: "Здоровье и благополучие моряков в 2021 году",
        description:
            "Какие есть преимущества у трудовых отношений, расскажем подробнее в этом гайде.",
        date: new Date("09.27.2025 11:00"),
        category: "industry",
        views: 40
    },
];

export default function EventsPage() {

    const [selectedCategory, setSelectedCategory] = useState(title[0].value);

	return <>
        <div className="events-page">
            <div className="events-page__category-list">
                {title.map((el, key) => (
                    <CategoriesItem
                        key={key}
                        title={el.text}
                        isActive={el.value === selectedCategory}
                        onClick={() => setSelectedCategory(el.value)}
                    />
                ))}
            </div>
            <SearchInput/>
            <div className="events-page-list">
                {articles.map((el) => (
                    <ArticleCard
                        key={el.id}
                        id={el.id.toString()}
                        title={el.title}
                        description={el.description}
                        date={el.date}
                        category={el.category}
                        views={el.views}
                    />
                ))}
            </div>
        </div>
    </>;
}
