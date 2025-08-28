import "./scss/HomePage.scss"
import NavBar from "../components/NavBar.tsx";
import FirstScreen from "../components/FirstScreen.tsx";
import VacanciesScreen from "../components/VacanciesScreen.tsx";
import AdvantagesScreen from "../components/AdvantagesScreen.tsx";
import ArticlesScreen from "../components/ArticlesScreen.tsx";
import Footer from "../components/Footer.tsx";


export default function HomePage() {
	return <>
		<NavBar/>
		<FirstScreen/>
		<VacanciesScreen/>
		<AdvantagesScreen/>
		<ArticlesScreen/>
		<Footer/>
	</>;
}
