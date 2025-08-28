import "./styles/VacanciesCard.scss";
import { formatDate } from "../utils/formatDate.ts";
import {NavLink} from "react-router";

interface CardsProps {
	id: string;
	title: string;
	date: Date;
	term: string;
	salary: string;
	company: string;
}

export default function VacanciesCard({
	id,
	title,
	date,
	term,
	salary,
	company,
}: CardsProps) {
	return (
		<>
			<NavLink to={`/exchange/${id}`} className="card-container">
				<h1 className="card-header">{title}</h1>
				<div className="card-date-wrapper">
					<div className="landing-date-container">
						<p className="card-dates">Дата посадки</p>
						<p className="landing-date">
							{formatDate(date, "DD. MM. YYYY")}
						</p>
					</div>
					<div className="contract-length-container">
						<p className="card-dates">Длина контракта</p>
						<p className="landing-date">{term}</p>
					</div>
				</div>
				<p className="card-salary">{salary}</p>
				<div className="company">
					<p className="company-title">{company}</p>
					<img
						className="verify-icon"
						src="/images/verify-icon.svg"
						alt=""
					/>
				</div>
                <img src="/images/dark-blue-arrow-right.svg" alt="" className="arrow-icon"/>
			</NavLink>
		</>
	);
}
