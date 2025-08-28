import "./styles/Footer.scss";

export default function Footer() {
	return (
		<>
			<div className="footer-section">
				<div className="content-container">
					<div className="links-for-users">
						<div className="for-user-sections">
							<h1 className="footer-titles">Моряку</h1>
							<a href="/" className="footer-links">
								Найти вакансию
							</a>
							<a href="/" className="footer-links">
								Разместить CV
							</a>
							<a href="/" className="footer-links">
								Правила размещения
							</a>
						</div>
						<div className="for-user-sections">
							<h1 className="footer-titles">Судовладелецу</h1>
							<a href="/" className="footer-links">
								Добавить
							</a>
							<a href="/" className="footer-links">
								Найти резюме
							</a>
						</div>
						<div className="for-user-sections">
							<h1 className="footer-titles">Партнеру</h1>
							<a href="/" className="footer-links">
								Наши услуги
							</a>
							<a href="/" className="footer-links">
								Реклама на сайте
							</a>
							<a href="/" className="footer-links">
								О партнерстве
							</a>
						</div>
					</div>
					<div className="about-company">
						<h1 className="footer-titles">Crewflag</h1>
						<a href="/" className="footer-links">
							О компании
						</a>
						<a href="/" className="footer-links">
							Тех поддержка
						</a>
						<a href="/" className="footer-links">
							Готовое резюме
						</a>
						<a href="/" className="footer-links">
							Все сервисы
						</a>
						<a href="/" className="footer-links">
							Профориентация
						</a>
						<a href="/" className="footer-links">
							Продвижение резюме
						</a>
						<a href="/" className="footer-links">
							Календарь
						</a>
					</div>
					<div className="footer-logo-lang">
						<a href="/" className="footer-logo">
							{" "}
							<img
								src="/images/footer-logo.svg"
								className="footer-logo-img"
								alt="Logo"
							/>
						</a>
						<select className="lang-selector">
							<option className="language" value="ru">
								Русский
							</option>
							<option className="language" value="en">
								English
							</option>
						</select>
					</div>
				</div>
				<div className="footer-end">
					<div className="footer-end-text">
						<p className="copyright">© 2024 ООО «Флагкрю»</p>
						<div className="footer-social-media">
							<a href="/" className="VK-icon">
								{" "}
								<img
									src="/images/VK-icon.svg"
									className="VK-icon-img"
									alt="Logo"
								/>
							</a>
							<a href="/" className="youtube-icon">
								{" "}
								<img
									src="/images/youtube-icon.svg"
									className="youtube-icon-img"
									alt="Logo"
								/>
							</a>
							<a href="/" className="OK-icon">
								{" "}
								<img
									src="/images/OK-icon.svg"
									className="OK-icon-img"
									alt="Logo"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
