import "./styles/VacanciesScreen.scss";
import VacanciesCard from "./VacanciesCard.tsx";
const vacancies = [
	{
		title: "Главный инженер",
		date: new Date("08.09.2024"),
		term: "3 месяца",
		salary: "$ 6,050/мес",
		company: "ООО Морской Инженерный Флот",
	},
	{
		title: "Single Engineer",
		date: new Date("08.12.2024"),
		term: "3 месяца",
		salary: "$ 6,500/мес",
		company: "Martracon Group",
	},
	{
		title: "Electrician",
		date: new Date("08.17.2024"),
		term: "3 месяца",
		salary: "$ 4,500/мес",
		company: "YCrewing Marine Agency",
	},
	{
		title: "ETO",
		date: new Date("09.01.2024"),
		term: "3 месяца",
		salary: "$ 9,000/мес",
		company: "Caravella",
	},
	{
		title: "Chief Officer",
		date: new Date("09.11.2024"),
		term: "3 месяца",
		salary: "$ 10,000/мес",
		company: "Ocean Force LLC",
	},
	{
		title: "Cook",
		date: new Date("09.19.2024"),
		term: "3 месяца",
		salary: "$ 4,000/мес",
		company: "Dese Crew Management",
	},
];

export default function VacanciesScreen() {
	return (
		<>
			<div className="outer-vacancies-container">
				<div className="vacancies-container">
					<div className="sorting-vacancies">
						<button className="sorting-button-hot enabled-dark">
							Горячие
						</button>
						<button className="sorting-button-search">Поиск</button>
					</div>
					<div className="vacancies-card-container">
						<h1 className="vacancies-title">Горячие вакансии</h1>
						<div className="vacancies-main-container">
							{vacancies.map((vacancy, key) => (
								<VacanciesCard
									key={key}
									title={vacancy.title}
									date={vacancy.date}
									term={vacancy.term}
									salary={vacancy.salary}
									company={vacancy.company}
								/>
							))}
						</div>
						<div className="show-all-container">
							<button className="show-all-button">
								Смотреть все
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
