import "./scss/ExchangePage.scss";
import CategoriesItem from "../components/CategoriesItem.tsx";
import { useState } from "react";
import VacanciesCard from "../components/VacanciesCard.tsx";
import SearchInput from "../components/SearchInput.tsx";
import BlueSphere from "../components/BlueSphere.tsx";

interface TitleItem {
	text: string;
	value: string;
}

interface VacanciesCardType {
	id: number;
	title: string;
	date: Date;
	term: string;
	salary: string;
	company: string;
}

const vacancies: VacanciesCardType[] = [
	{
		id: 1,
		title: "Главный инженер",
		date: new Date("08.09.2024"),
		term: "3 месяца",
		salary: "$ 6,050/мес",
		company: "ООО Морской Инженерный Флот",
	},
	{
		id: 2,
		title: "Single Engineer",
		date: new Date("08.12.2024"),
		term: "3 месяца",
		salary: "$ 6,500/мес",
		company: "Martracon Group",
	},
	{
		id: 3,
		title: "Electrician",
		date: new Date("08.17.2024"),
		term: "3 месяца",
		salary: "$ 4,500/мес",
		company: "YCrewing Marine Agency",
	},
	{
		id: 4,
		title: "ETO",
		date: new Date("09.01.2024"),
		term: "3 месяца",
		salary: "$ 9,000/мес",
		company: "Caravella",
	},
	{
		id: 5,
		title: "Chief Officer",
		date: new Date("09.11.2024"),
		term: "3 месяца",
		salary: "$ 10,000/мес",
		company: "Ocean Force LLC",
	},
	{
		id: 6,
		title: "Cook",
		date: new Date("09.19.2024"),
		term: "3 месяца",
		salary: "$ 4,000/мес",
		company: "Dese Crew Management",
	},
];

const title: TitleItem[] = [
	{
		text: "Все",
		value: "all",
	},
	{
		text: "HOT",
		value: "hot",
	},
	{
		text: "Штурман",
		value: "navigator",
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

export default function ExchangePage() {
	const [selectedCategory, setSelectedCategory] = useState(title[0].value);

	return (
		<>
			<div className="exchanges">
				<div className="exchanges__category-list">
					{title.map((el, key) => (
						<CategoriesItem
							key={key}
							title={el.text}
							isActive={el.value === selectedCategory}
							onClick={() => setSelectedCategory(el.value)}
						/>
					))}
				</div>

				<SearchInput />
				<div className="exchanges__vacancies">
					<BlueSphere width={347} height={220} />
					{vacancies.map((el) => (
						<VacanciesCard
							key={el.id}
							id={el.id.toString()}
							title={el.title}
							date={el.date}
							term={el.term}
							salary={el.salary}
							company={el.company}
						/>
					))}
				</div>
			</div>
		</>
	);
}
