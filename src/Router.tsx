import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "./layouts/AuthLayout.tsx";
import LoginForm from "./components/LoginForm.tsx";
import AccountCreation from "./components/AccountCreation.tsx";
import EmailVerification from "./components/EmailVerification.tsx";
import EmailAccepted from "./components/EmailAccepted.tsx";
import SailorRegistrationForm from "./components/SailorRegistrationForm.tsx";
import SailorQuestionnaire from "./components/SailorQuestionnaire.tsx";
import AccountTypePicker from "./components/AccountTypePicker.tsx";
import DefaultLayout from "./layouts/DefaultLayout.tsx";
import MainPage from "./pages/MainPage.tsx";
import ExchangePage from "./pages/ExchangePage.tsx";
import CardPage from "./pages/CardPage.tsx";
import ChatPage from "./pages/ChatPage.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import VacancyPage from "./components/VacancyPage.tsx";
import ArticlePage from "./components/ArticlePage.tsx";
import ProfileLayout from "./layouts/ProfileLayout.tsx";
import ProfileData from "./components/ProfileData.tsx";
import ProfileSecurity from "./components/ProfileSecurity.tsx";
import ProfileEmailEdit from "./components/ProfileEmailEdit.tsx";
import ProfilePasswordEdit from "./components/ProfilePasswordEdit.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout />,
		children: [
			{
				path: "",
				element: <MainPage />,
			},
			{
				path: "card",
				element: <CardPage />,
			},
			{
				path: "chat",
				element: <ChatPage />,
			},
			{
				path: "exchange",
				element: <ExchangePage />,
			},
			{
				path: "exchange/:id",
				element: <VacancyPage />,
			},
			{
				path: "events",
				element: <EventsPage />,
			},
			{
				path: "events/:id",
				element: <ArticlePage />,
			},
		],
	},
	{
		path: "/profile",
		element: <ProfileLayout />,
		children: [
			{
				path: "data",
				element: <ProfileData />,
			},
			{
				path: "security",
				element: <ProfileSecurity />,
			},
			{
				path: "questionnaire",
				element: <SailorQuestionnaire />,
			},
			{
				path: "emailEdit",
				element: <ProfileEmailEdit />,
			},
		],
	},
	{
		path: "emailEdit",
		element: <ProfileEmailEdit />,
	},
	{
		path: "passwordEdit",
		element: <ProfilePasswordEdit />,
	},
	{
		path: "/auth",
		element: <AuthLayout />,
		children: [
			{
				path: "accountTypePicker",
				element: <AccountTypePicker />,
			},
			{
				path: "login",
				element: <LoginForm />,
			},
			{
				path: "signup",
				element: <AccountCreation />,
			},
			{
				path: "signup/verification",
				element: <EmailVerification />,
			},
			{
				path: "signup/success",
				element: <EmailAccepted />,
			},
			{
				path: "registration",
				element: <SailorRegistrationForm />,
			},
			{
				path: "sailorQForm",
				element: <SailorQuestionnaire />,
			},
		],
	},

	// {
	//     path: 'registration',
	//     element: <SailorRegistrationForm/>
	// },
	{
		path: "*",
		element: <h1>Page not found</h1>,
	},
]);

export default function AppRouter() {
	return <>
		<RouterProvider router={router} />
		{/*<ScrollToTop />*/}
	</>
}
