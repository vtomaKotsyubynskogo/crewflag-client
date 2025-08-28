import "./styles/SailorQuestionnaire.scss";
import { Accordion } from "./Accordion.tsx";
import { useState } from "react";
import { InputField } from "./InputField.tsx";

type FormKey =
	| "lastName"
	| "firstName"
	| "middleName"
	| "placeOfBirth"
	| "nationality"
	| "height"
	| "weight"
	| "colorOfEyes"
	| "phoneNumber"
	| "mobile"
	| "maritalStatus"
	| "country"
	| "city"
	| "email"
	| "address"
	| "name"
	| "relationship"
	| "telephone"
	| "number"
	| "placeOfIssue"
	| "issuedOn"
	| "validTill"
	| "seamanNumber"
	| "seamanPlaceOfIssue"
	| "seamanIssuedOn"
	| "seamanValidTill"
	| "intlNumber"
	| "intlPlaceOfIssue"
	| "intlIssuedOn"
	| "intlValidTill"
	| "visaIssuedOn"
	| "visaValidTill"
	| "usaIssuedOn"
	| "usaValidTill"
	| "shengenIssuedOn"
	| "shengenValidTill"
	| "testIssuedOn"
	| "testResult"
	| "marlinsIssuedOn"
	| "marlinsResult"
	| "cesIssuedOn"
	| "cesResult"
	| "basicSafetyTrainingIssuedOn"
	| "basicSafetyTrainingValidTill"
	| "proficiencySurvivalCraftIssuedOn"
	| "proficiencySurvivalCraftValidTill"
	| "advancedFireFightingIssuedOn"
	| "advancedFireFightingValidTill"
	| "medicalFirstAidIssuedOn"
	| "medicalFirstAidValidTill"
	| "dangerousCargoHazmatIssuedOn"
	| "dangerousCargoHazmatValidTill"
	| "securityTrainingVI61IssuedOn"
	| "securityTrainingVI61ValidTill"
	| "securityDutiesVI62IssuedOn"
	| "securityDutiesVI62ValidTill"
	| "tankerFamOilChemicalIssuedOn"
	| "tankerFamOilChemicalValidTill"
	| "tankerFamGazIssuedOn"
	| "tankerFamGazValidTill"
	| "advancedOilTankerIssuedOn"
	| "advancedOilTankerValidTill"
	| "advancedChemTankerIssuedOn"
	| "advancedChemTankerValidTill"
	| "advancedGazTankerIssuedOn"
	| "advancedGazTankerValidTill"
	| "radarArpaIssuedOn"
	| "radarArpaValidTill"
	| "bridgeResourceManagementIssuedOn"
	| "bridgeResourceManagementValidTill"
	| "shipsHandlingIssuedOn"
	| "shipsHandlingValidTill"
	| "ecdisIssuedOn"
	| "ecdisValidTill"
	| "medicalCareOnBoardIssuedOn"
	| "medicalCareOnBoardValidTill"
	| "shipSecurityOfficerIssuedOn"
	| "shipSecurityOfficerValidTill"
	| "shipSafetyOfficerIssuedOn"
	| "shipSafetyOfficerValidTill"
	| "engineResourceManagementIssuedOn"
	| "engineResourceManagementValidTill"
	| "inertGasSystemIssuedOn"
	| "inertGasSystemValidTill"
	| "crudeOilWashingIssuedOn"
	| "crudeOilWashingValidTill"
	| "fastRescueBoatIssuedOn"
	| "fastRescueBoatValidTill"
	| "highVoltageIssuedOn"
	| "highVoltageValidTill"
	| "certificateOfCompetencyCapacity"
	| "certificateOfCompetencyNumber"
	| "certificateOfCompetencyPlaceOfIssue"
	| "certificateOfCompetencyIssuedOn"
	| "certificateOfCompetencyValidTill"
	| "endorsementOfCocCapacity"
	| "endorsementOfCocNumber"
	| "endorsementOfCocPlaceOfIssue"
	| "endorsementOfCocIssuedOn"
	| "endorsementOfCocValidTill"
	| "gmdssCapacity"
	| "gmdssNumber"
	| "gmdssPlaceOfIssue"
	| "gmdssIssuedOn"
	| "gmdssValidTill"
	| "endorsementOfGmdssCapacity"
	| "endorsementOfGmdssNumber"
	| "endorsementOfGmdssPlaceOfIssue"
	| "endorsementOfGmdssIssuedOn"
	| "endorsementOfGmdssValidTill"
	| "tankerLicenseNumber"
	| "tankerLicensePlaceOfIssue"
	| "tankerLicenseIssuedOn"
	| "tankerLicenseValidTill"
	| "chemicalTankersNumber"
	| "chemicalTankersPlaceOfIssue"
	| "chemicalTankersIssuedOn"
	| "chemicalTankersValidTill"
	| "gasTankersNumber"
	| "gasTankersPlaceOfIssue"
	| "gasTankersIssuedOn"
	| "gasTankersValidTill"
	| "medicalExaminationNationalIssuedOn"
	| "medicalExaminationNationalResult"
	| "yellowFeverIssuedOn"
	| "yellowFeverResult"
	| "maltaEndorsement"
	| "maltaIssuedOn"
	| "maltaValidTill"
	| "maltaGrade"
	| "liberiaEndorsement"
	| "liberiaIssuedOn"
	| "liberiaValidTill"
	| "liberiaGrade"
	| "panamaEndorsement"
	| "panamaIssuedOn"
	| "panamaValidTill"
	| "panamaGrade";

type FormInputElements = {
	label: string;
	id: string;
	key: FormKey;
};

type FormInputElement = {
	title?: string;
	inputs: FormInputElements[];
};

const personalInformation: FormInputElements[] = [
	{ label: "Last Name", id: "lastName", key: "lastName" },
	{ label: "First Name", id: "firstName", key: "firstName" },
	{ label: "Middle Name", id: "middleName", key: "middleName" },
	{ label: "Place of Birth", id: "placeOfBirth", key: "placeOfBirth" },
	{ label: "Nationality", id: "nationality", key: "nationality" },
	{ label: "Height", id: "height", key: "height" },
	{ label: "Weight", id: "weight", key: "weight" },
	{ label: "Color of Eyes", id: "colorOfEyes", key: "colorOfEyes" },
	{ label: "Telephone Number", id: "phoneNumber", key: "phoneNumber" },
	{ label: "Mobile", id: "mobile", key: "mobile" },
	{ label: "Marital Status", id: "maritalStatus", key: "maritalStatus" },
	{ label: "Country", id: "country", key: "country" },
	{ label: "City", id: "city", key: "city" },
	{ label: "Email", id: "email", key: "email" },
	{ label: "Address", id: "address", key: "address" },
];

const nextOfKin: FormInputElements[] = [
	{ label: "Last Name", id: "lastName", key: "lastName" },
	{ label: "Name", id: "name", key: "name" },
	{ label: "Relationship", id: "relationship", key: "relationship" },
	{ label: "Telephone", id: "telephone", key: "telephone" },
	{ label: "City", id: "city", key: "city" },
	{ label: "Country", id: "country", key: "country" },
	{ label: "Address", id: "address", key: "address" },
];

const passports: FormInputElement[] = [
	{
		title: "National password",
		inputs: [
			{ label: "Number", id: "number", key: "number" },
			{
				label: "Place Of Issue",
				id: "placeOfIssue",
				key: "placeOfIssue",
			},
			{ label: "Issued On", id: "issuedOn", key: "issuedOn" },
			{ label: "Valid Till", id: "validTill", key: "validTill" },
		],
	},
	{
		title: "National Seamans password",
		inputs: [
			{ label: "Number", id: "seamanNumber", key: "seamanNumber" },
			{
				label: "Place Of Issue",
				id: "seamanPlaceOfIssue",
				key: "seamanPlaceOfIssue",
			},
			{ label: "Issued On", id: "seamanIssuedOn", key: "seamanIssuedOn" },
			{
				label: "Valid Till",
				id: "seamanValidTill",
				key: "seamanValidTill",
			},
		],
	},
	{
		title: "International Travel Passport",
		inputs: [
			{ label: "Number", id: "intlNumber", key: "intlNumber" },
			{
				label: "Place Of Issue",
				id: "intlPlaceOfIssue",
				key: "intlPlaceOfIssue",
			},
			{ label: "Issued On", id: "intlIssuedOn", key: "intlIssuedOn" },
			{ label: "Valid Till", id: "intlValidTill", key: "intlValidTill" },
		],
	},
];

const visas: FormInputElement[] = [
	{
		title: "VISA",
		inputs: [
			{ label: "Issued On", id: "visaIssuedOn", key: "visaIssuedOn" },
			{ label: "Valid Till", id: "visaValidTill", key: "visaValidTill" },
		],
	},
	{
		title: "USA",
		inputs: [
			{ label: "Issued On", id: "usaIssuedOn", key: "usaIssuedOn" },
			{ label: "Valid Till", id: "usaValidTill", key: "usaValidTill" },
		],
	},
	{
		title: "SHENGEN",
		inputs: [
			{
				label: "Issued On",
				id: "shengenIssuedOn",
				key: "shengenIssuedOn",
			},
			{
				label: "Valid Till",
				id: "shengenValidTill",
				key: "shengenValidTill",
			},
		],
	},
];

const englishSkills: FormInputElement[] = [
	{
		title: "Test",
		inputs: [
			{ label: "Issued On", id: "testIssuedOn", key: "testIssuedOn" },
			{ label: "Result", id: "testResult", key: "testResult" },
		],
	},
	{
		title: "Marlins Test",
		inputs: [
			{
				label: "Issued On",
				id: "marlinsIssuedOn",
				key: "marlinsIssuedOn",
			},
			{ label: "Result", id: "marlinsResult", key: "marlinsResult" },
		],
	},
	{
		title: "Ces Test",
		inputs: [
			{ label: "Issued On", id: "cesIssuedOn", key: "cesIssuedOn" },
			{ label: "Result", id: "cesResult", key: "cesResult" },
		],
	},
];

const nationalCertificates: FormInputElement[] = [
	{
		title: "Certificate of Competency",
		inputs: [
			{
				label: "Capacity (Regulation)",
				id: "certificateOfCompetencyCapacity",
				key: "certificateOfCompetencyCapacity",
			},
			{
				label: "Number",
				id: "certificateOfCompetencyNumber",
				key: "certificateOfCompetencyNumber",
			},
			{
				label: "Place of Issue",
				id: "certificateOfCompetencyPlaceOfIssue",
				key: "certificateOfCompetencyPlaceOfIssue",
			},
			{
				label: "Issued On",
				id: "certificateOfCompetencyIssuedOn",
				key: "certificateOfCompetencyIssuedOn",
			},
			{
				label: "Valid Till",
				id: "certificateOfCompetencyValidTill",
				key: "certificateOfCompetencyValidTill",
			},
		],
	},
	{
		title: "Endorsement of COC",
		inputs: [
			{
				label: "Capacity (Regulation)",
				id: "endorsementOfCocCapacity",
				key: "endorsementOfCocCapacity",
			},
			{
				label: "Number",
				id: "endorsementOfCocNumber",
				key: "endorsementOfCocNumber",
			},
			{
				label: "Place of Issue",
				id: "endorsementOfCocPlaceOfIssue",
				key: "endorsementOfCocPlaceOfIssue",
			},
			{
				label: "Issued On",
				id: "endorsementOfCocIssuedOn",
				key: "endorsementOfCocIssuedOn",
			},
			{
				label: "Valid Till",
				id: "endorsementOfCocValidTill",
				key: "endorsementOfCocValidTill",
			},
		],
	},
	{
		title: "GMDSS",
		inputs: [
			{
				label: "Capacity (Regulation)",
				id: "gmdssCapacity",
				key: "gmdssCapacity",
			},
			{ label: "Number", id: "gmdssNumber", key: "gmdssNumber" },
			{
				label: "Place of Issue",
				id: "gmdssPlaceOfIssue",
				key: "gmdssPlaceOfIssue",
			},
			{ label: "Issued On", id: "gmdssIssuedOn", key: "gmdssIssuedOn" },
			{
				label: "Valid Till",
				id: "gmdssValidTill",
				key: "gmdssValidTill",
			},
		],
	},
	{
		title: "Endorsement of GMDSS",
		inputs: [
			{
				label: "Capacity (Regulation)",
				id: "endorsementOfGmdssCapacity",
				key: "endorsementOfGmdssCapacity",
			},
			{
				label: "Number",
				id: "endorsementOfGmdssNumber",
				key: "endorsementOfGmdssNumber",
			},
			{
				label: "Place of Issue",
				id: "endorsementOfGmdssPlaceOfIssue",
				key: "endorsementOfGmdssPlaceOfIssue",
			},
			{
				label: "Issued On",
				id: "endorsementOfGmdssIssuedOn",
				key: "endorsementOfGmdssIssuedOn",
			},
			{
				label: "Valid Till",
				id: "endorsementOfGmdssValidTill",
				key: "endorsementOfGmdssValidTill",
			},
		],
	},
];

const certificates: FormInputElement[] = [
	{
		title: "Basic Safety Training",
		inputs: [
			{
				label: "Issued On",
				id: "basicSafetyTrainingIssuedOn",
				key: "basicSafetyTrainingIssuedOn",
			},
			{
				label: "Valid Till",
				id: "basicSafetyTrainingValidTill",
				key: "basicSafetyTrainingValidTill",
			},
		],
	},
	{
		title: "Proficiency in Survival Craft",
		inputs: [
			{
				label: "Issued On",
				id: "proficiencySurvivalCraftIssuedOn",
				key: "proficiencySurvivalCraftIssuedOn",
			},
			{
				label: "Valid Till",
				id: "proficiencySurvivalCraftValidTill",
				key: "proficiencySurvivalCraftValidTill",
			},
		],
	},
	{
		title: "Advanced Fire Fighting",
		inputs: [
			{
				label: "Issued On",
				id: "advancedFireFightingIssuedOn",
				key: "advancedFireFightingIssuedOn",
			},
			{
				label: "Valid Till",
				id: "advancedFireFightingValidTill",
				key: "advancedFireFightingValidTill",
			},
		],
	},
	{
		title: "Medical First Aid",
		inputs: [
			{
				label: "Issued On",
				id: "medicalFirstAidIssuedOn",
				key: "medicalFirstAidIssuedOn",
			},
			{
				label: "Valid Till",
				id: "medicalFirstAidValidTill",
				key: "medicalFirstAidValidTill",
			},
		],
	},
	{
		title: "Dangerous Cargo (HAZMAT)",
		inputs: [
			{
				label: "Issued On",
				id: "dangerousCargoHazmatIssuedOn",
				key: "dangerousCargoHazmatIssuedOn",
			},
			{
				label: "Valid Till",
				id: "dangerousCargoHazmatValidTill",
				key: "dangerousCargoHazmatValidTill",
			},
		],
	},
	{
		title: "Security-Related Training VI/6-1",
		inputs: [
			{
				label: "Issued On",
				id: "securityTrainingVI61IssuedOn",
				key: "securityTrainingVI61IssuedOn",
			},
			{
				label: "Valid Till",
				id: "securityTrainingVI61ValidTill",
				key: "securityTrainingVI61ValidTill",
			},
		],
	},
	{
		title: "Security-Related Training VI/6-2",
		inputs: [
			{
				label: "Issued On",
				id: "securityDutiesVI62IssuedOn",
				key: "securityDutiesVI62IssuedOn",
			},
			{
				label: "Valid Till",
				id: "securityDutiesVI62ValidTill",
				key: "securityDutiesVI62ValidTill",
			},
		],
	},
	{
		title: "Tanker Familiarization Oil/Chemical",
		inputs: [
			{
				label: "Issued On",
				id: "tankerFamOilChemicalIssuedOn",
				key: "tankerFamOilChemicalIssuedOn",
			},
			{
				label: "Valid Till",
				id: "tankerFamOilChemicalValidTill",
				key: "tankerFamOilChemicalValidTill",
			},
		],
	},
	{
		title: "Tanker Familiarization Gaz",
		inputs: [
			{
				label: "Issued On",
				id: "tankerFamGazIssuedOn",
				key: "tankerFamGazIssuedOn",
			},
			{
				label: "Valid Till",
				id: "tankerFamGazValidTill",
				key: "tankerFamGazValidTill",
			},
		],
	},
	{
		title: "Advanced Training in Oil Tanker",
		inputs: [
			{
				label: "Issued On",
				id: "advancedOilTankerIssuedOn",
				key: "advancedOilTankerIssuedOn",
			},
			{
				label: "Valid Till",
				id: "advancedOilTankerValidTill",
				key: "advancedOilTankerValidTill",
			},
		],
	},
	{
		title: "Advanced Training in Chem. Tanker",
		inputs: [
			{
				label: "Issued On",
				id: "advancedChemTankerIssuedOn",
				key: "advancedChemTankerIssuedOn",
			},
			{
				label: "Valid Till",
				id: "advancedChemTankerValidTill",
				key: "advancedChemTankerValidTill",
			},
		],
	},
	{
		title: "Advanced Training in Gaz Tanker",
		inputs: [
			{
				label: "Issued On",
				id: "advancedGazTankerIssuedOn",
				key: "advancedGazTankerIssuedOn",
			},
			{
				label: "Valid Till",
				id: "advancedGazTankerValidTill",
				key: "advancedGazTankerValidTill",
			},
		],
	},
	{
		title: "RADAR & ARPA",
		inputs: [
			{
				label: "Issued On",
				id: "radarArpaIssuedOn",
				key: "radarArpaIssuedOn",
			},
			{
				label: "Valid Till",
				id: "radarArpaValidTill",
				key: "radarArpaValidTill",
			},
		],
	},
	{
		title: "Bridge Resource Management",
		inputs: [
			{
				label: "Issued On",
				id: "bridgeResourceManagementIssuedOn",
				key: "bridgeResourceManagementIssuedOn",
			},
			{
				label: "Valid Till",
				id: "bridgeResourceManagementValidTill",
				key: "bridgeResourceManagementValidTill",
			},
		],
	},
	{
		title: "Ships Handling",
		inputs: [
			{
				label: "Issued On",
				id: "shipsHandlingIssuedOn",
				key: "shipsHandlingIssuedOn",
			},
			{
				label: "Valid Till",
				id: "shipsHandlingValidTill",
				key: "shipsHandlingValidTill",
			},
		],
	},
	{
		title: "ECDIS",
		inputs: [
			{ label: "Issued On", id: "ecdisIssuedOn", key: "ecdisIssuedOn" },
			{
				label: "Valid Till",
				id: "ecdisValidTill",
				key: "ecdisValidTill",
			},
		],
	},
	{
		title: "Medical Care on Board",
		inputs: [
			{
				label: "Issued On",
				id: "medicalCareOnBoardIssuedOn",
				key: "medicalCareOnBoardIssuedOn",
			},
			{
				label: "Valid Till",
				id: "medicalCareOnBoardValidTill",
				key: "medicalCareOnBoardValidTill",
			},
		],
	},
	{
		title: "Ship Security Officer (S.S.O.)",
		inputs: [
			{
				label: "Issued On",
				id: "shipSecurityOfficerIssuedOn",
				key: "shipSecurityOfficerIssuedOn",
			},
			{
				label: "Valid Till",
				id: "shipSecurityOfficerValidTill",
				key: "shipSecurityOfficerValidTill",
			},
		],
	},
	{
		title: "Ship Safety Officer",
		inputs: [
			{
				label: "Issued On",
				id: "shipSafetyOfficerIssuedOn",
				key: "shipSafetyOfficerIssuedOn",
			},
			{
				label: "Valid Till",
				id: "shipSafetyOfficerValidTill",
				key: "shipSafetyOfficerValidTill",
			},
		],
	},
	{
		title: "Engine Resource Management",
		inputs: [
			{
				label: "Issued On",
				id: "engineResourceManagementIssuedOn",
				key: "engineResourceManagementIssuedOn",
			},
			{
				label: "Valid Till",
				id: "engineResourceManagementValidTill",
				key: "engineResourceManagementValidTill",
			},
		],
	},
	{
		title: "Inert Gas System",
		inputs: [
			{
				label: "Issued On",
				id: "inertGasSystemIssuedOn",
				key: "inertGasSystemIssuedOn",
			},
			{
				label: "Valid Till",
				id: "inertGasSystemValidTill",
				key: "inertGasSystemValidTill",
			},
		],
	},
	{
		title: "Crude Oil Washing",
		inputs: [
			{
				label: "Issued On",
				id: "crudeOilWashingIssuedOn",
				key: "crudeOilWashingIssuedOn",
			},
			{
				label: "Valid Till",
				id: "crudeOilWashingValidTill",
				key: "crudeOilWashingValidTill",
			},
		],
	},
	{
		title: "Fast Rescue Boat",
		inputs: [
			{
				label: "Issued On",
				id: "fastRescueBoatIssuedOn",
				key: "fastRescueBoatIssuedOn",
			},
			{
				label: "Valid Till",
				id: "fastRescueBoatValidTill",
				key: "fastRescueBoatValidTill",
			},
		],
	},
	{
		title: "High Voltage",
		inputs: [
			{
				label: "Issued On",
				id: "highVoltageIssuedOn",
				key: "highVoltageIssuedOn",
			},
			{
				label: "Valid Till",
				id: "highVoltageValidTill",
				key: "highVoltageValidTill",
			},
		],
	},
];

const tankerCertificate: FormInputElement[] = [
	{
		title: "License",
		inputs: [
			{
				label: "Number",
				id: "tankerLicenseNumber",
				key: "tankerLicenseNumber",
			},
			{
				label: "Place Of Issue",
				id: "tankerLicensePlaceOfIssue",
				key: "tankerLicensePlaceOfIssue",
			},
			{
				label: "Issued On",
				id: "tankerLicenseIssuedOn",
				key: "tankerLicenseIssuedOn",
			},
			{
				label: "Valid Till",
				id: "tankerLicenseValidTill",
				key: "tankerLicenseValidTill",
			},
		],
	},
	{
		title: "Chemical Tankers",
		inputs: [
			{
				label: "Number",
				id: "chemicalTankersNumber",
				key: "chemicalTankersNumber",
			},
			{
				label: "Place Of Issue",
				id: "chemicalTankersPlaceOfIssue",
				key: "chemicalTankersPlaceOfIssue",
			},
			{
				label: "Issued On",
				id: "chemicalTankersIssuedOn",
				key: "chemicalTankersIssuedOn",
			},
			{
				label: "Valid Till",
				id: "chemicalTankersValidTill",
				key: "chemicalTankersValidTill",
			},
		],
	},
	{
		title: "Gas Tankers",
		inputs: [
			{
				label: "Number",
				id: "gasTankersNumber",
				key: "gasTankersNumber",
			},
			{
				label: "Place Of Issue",
				id: "gasTankersPlaceOfIssue",
				key: "gasTankersPlaceOfIssue",
			},
			{
				label: "Issued On",
				id: "gasTankersIssuedOn",
				key: "gasTankersIssuedOn",
			},
			{
				label: "Valid Till",
				id: "gasTankersValidTill",
				key: "gasTankersValidTill",
			},
		],
	},
];

const flagStateDocuments: FormInputElement[] = [
	{
		title: "Malta",
		inputs: [
			{
				label: "Endorsement",
				id: "maltaEndorsement",
				key: "maltaEndorsement",
			},
			{ label: "Issued On", id: "maltaIssuedOn", key: "maltaIssuedOn" },
			{
				label: "Valid Till",
				id: "maltaValidTill",
				key: "maltaValidTill",
			},
			{ label: "Grade", id: "maltaGrade", key: "maltaGrade" },
		],
	},
	{
		title: "Liberia",
		inputs: [
			{
				label: "Endorsement",
				id: "liberiaEndorsement",
				key: "liberiaEndorsement",
			},
			{
				label: "Issued On",
				id: "liberiaIssuedOn",
				key: "liberiaIssuedOn",
			},
			{
				label: "Valid Till",
				id: "liberiaValidTill",
				key: "liberiaValidTill",
			},
			{ label: "Grade", id: "liberiaGrade", key: "liberiaGrade" },
		],
	},
	{
		title: "Panama",
		inputs: [
			{
				label: "Endorsement",
				id: "panamaEndorsement",
				key: "panamaEndorsement",
			},
			{ label: "Issued On", id: "panamaIssuedOn", key: "panamaIssuedOn" },
			{
				label: "Valid Till",
				id: "panamaValidTill",
				key: "panamaValidTill",
			},
			{ label: "Grade", id: "panamaGrade", key: "panamaGrade" },
		],
	},
];

const medicalCertificates: FormInputElement[] = [
	{
		title: "Medical Examination (National)",
		inputs: [
			{
				label: "Issued On",
				id: "medicalExaminationNationalIssuedOn",
				key: "medicalExaminationNationalIssuedOn",
			},
			{
				label: "Result",
				id: "medicalExaminationNationalResult",
				key: "medicalExaminationNationalResult",
			},
		],
	},
	{
		title: "Yellow Fever",
		inputs: [
			{
				label: "Issued On",
				id: "yellowFeverIssuedOn",
				key: "yellowFeverIssuedOn",
			},
			{
				label: "Result",
				id: "yellowFeverResult",
				key: "yellowFeverResult",
			},
		],
	},
];

export default function SailorQuestionnaire() {
	const [form, setForm] = useState<Record<FormKey, string>>({
		lastName: "",
		firstName: "",
		middleName: "",
		placeOfBirth: "",
		nationality: "",
		height: "",
		weight: "",
		colorOfEyes: "",
		phoneNumber: "",
		mobile: "",
		maritalStatus: "",
		country: "",
		city: "",
		email: "",
		address: "",
		name: "",
		relationship: "",
		telephone: "",
		number: "",
		placeOfIssue: "",
		issuedOn: "",
		validTill: "",
		seamanNumber: "",
		seamanPlaceOfIssue: "",
		seamanIssuedOn: "",
		seamanValidTill: "",
		intlNumber: "",
		intlPlaceOfIssue: "",
		intlIssuedOn: "",
		intlValidTill: "",
		visaIssuedOn: "",
		visaValidTill: "",
		usaIssuedOn: "",
		usaValidTill: "",
		shengenIssuedOn: "",
		shengenValidTill: "",
		testIssuedOn: "",
		testResult: "",
		marlinsIssuedOn: "",
		marlinsResult: "",
		cesIssuedOn: "",
		cesResult: "",
		basicSafetyTrainingIssuedOn: "",
		basicSafetyTrainingValidTill: "",
		proficiencySurvivalCraftIssuedOn: "",
		proficiencySurvivalCraftValidTill: "",
		advancedFireFightingIssuedOn: "",
		advancedFireFightingValidTill: "",
		medicalFirstAidIssuedOn: "",
		medicalFirstAidValidTill: "",
		dangerousCargoHazmatIssuedOn: "",
		dangerousCargoHazmatValidTill: "",
		securityTrainingVI61IssuedOn: "",
		securityTrainingVI61ValidTill: "",
		securityDutiesVI62IssuedOn: "",
		securityDutiesVI62ValidTill: "",
		tankerFamOilChemicalIssuedOn: "",
		tankerFamOilChemicalValidTill: "",
		tankerFamGazIssuedOn: "",
		tankerFamGazValidTill: "",
		advancedOilTankerIssuedOn: "",
		advancedOilTankerValidTill: "",
		advancedChemTankerIssuedOn: "",
		advancedChemTankerValidTill: "",
		advancedGazTankerIssuedOn: "",
		advancedGazTankerValidTill: "",
		radarArpaIssuedOn: "",
		radarArpaValidTill: "",
		bridgeResourceManagementIssuedOn: "",
		bridgeResourceManagementValidTill: "",
		shipsHandlingIssuedOn: "",
		shipsHandlingValidTill: "",
		ecdisIssuedOn: "",
		ecdisValidTill: "",
		medicalCareOnBoardIssuedOn: "",
		medicalCareOnBoardValidTill: "",
		shipSecurityOfficerIssuedOn: "",
		shipSecurityOfficerValidTill: "",
		shipSafetyOfficerIssuedOn: "",
		shipSafetyOfficerValidTill: "",
		engineResourceManagementIssuedOn: "",
		engineResourceManagementValidTill: "",
		inertGasSystemIssuedOn: "",
		inertGasSystemValidTill: "",
		crudeOilWashingIssuedOn: "",
		crudeOilWashingValidTill: "",
		fastRescueBoatIssuedOn: "",
		fastRescueBoatValidTill: "",
		highVoltageIssuedOn: "",
		highVoltageValidTill: "",
		certificateOfCompetencyCapacity: "",
		certificateOfCompetencyNumber: "",
		certificateOfCompetencyPlaceOfIssue: "",
		certificateOfCompetencyIssuedOn: "",
		certificateOfCompetencyValidTill: "",
		endorsementOfCocCapacity: "",
		endorsementOfCocNumber: "",
		endorsementOfCocPlaceOfIssue: "",
		endorsementOfCocIssuedOn: "",
		endorsementOfCocValidTill: "",
		gmdssCapacity: "",
		gmdssNumber: "",
		gmdssPlaceOfIssue: "",
		gmdssIssuedOn: "",
		gmdssValidTill: "",
		endorsementOfGmdssCapacity: "",
		endorsementOfGmdssNumber: "",
		endorsementOfGmdssPlaceOfIssue: "",
		endorsementOfGmdssIssuedOn: "",
		endorsementOfGmdssValidTill: "",
		tankerLicenseNumber: "",
		tankerLicensePlaceOfIssue: "",
		tankerLicenseIssuedOn: "",
		tankerLicenseValidTill: "",
		chemicalTankersNumber: "",
		chemicalTankersPlaceOfIssue: "",
		chemicalTankersIssuedOn: "",
		chemicalTankersValidTill: "",
		gasTankersNumber: "",
		gasTankersPlaceOfIssue: "",
		gasTankersIssuedOn: "",
		gasTankersValidTill: "",
		medicalExaminationNationalIssuedOn: "",
		medicalExaminationNationalResult: "",
		yellowFeverIssuedOn: "",
		yellowFeverResult: "",
		maltaEndorsement: "",
		maltaIssuedOn: "",
		maltaValidTill: "",
		maltaGrade: "",
		liberiaEndorsement: "",
		liberiaIssuedOn: "",
		liberiaValidTill: "",
		liberiaGrade: "",
		panamaEndorsement: "",
		panamaIssuedOn: "",
		panamaValidTill: "",
		panamaGrade: "",
	});

	return (
		<>
			<div className="sailorQForm">
				<div className="sailorQForm__wrapper">
					<img
						src="/images/logo-icon.svg"
						alt="Crewflag"
						className="sailorQForm__logo-image"
					/>
					<div className="sailorQForm__title-block">
						<h1 className="sailorQForm__title">Анкета моряка</h1>
					</div>
					<p className="sailorQForm__description">
						Заполните все поля чтобы отправить форму на модерацию
					</p>

					<Accordion title={"1. Personal Information"}>
						<div className="sailorQForm__list">
							{personalInformation.map((item) => (
								<div
									className="sailorQForm__couple"
									key={item.key}
								>
									<label
										htmlFor={item.id}
										className="sailorQForm__label"
									>
										{item.label}
									</label>
									<hr className="sailorQForm__line"/>
									<InputField
										id={item.id}
										name={item.id}
										value={form[item.key]}
										onChange={(e) =>
											setForm({
												...form,
												[item.key]: e.target.value,
											})
										}
										required
									/>
								</div>
							))}
						</div>
					</Accordion>
					<Accordion title={"2. Next of Kin"}>
						<div className="sailorQForm__list">
							{nextOfKin.map((item) => (
								<div
									className="sailorQForm__couple"
									key={item.key}
								>
									<label
										htmlFor={item.id}
										className="sailorQForm__label"
									>
										{item.label}
									</label>
									<hr className="sailorQForm__line"/>
									<InputField
										id={item.id}
										name={item.id}
										value={form[item.key]}
										onChange={(e) =>
											setForm({
												...form,
												[item.key]: e.target.value,
											})
										}
										required
									/>
								</div>
							))}
						</div>
					</Accordion>
					<Accordion title={"3. Passports"}>
						{passports.map((item) => (
							<div className="sailorQForm__list" key={item.title}>
								<div className="sailorQForm__subtitle">
									<hr className="sailorQForm__line"/>
									<h3 className="sailorQForm__subtitle-text">
										{item.title}
									</h3>
									<hr className="sailorQForm__line"/>
								</div>
								{item.inputs.map((items) => (
									<div
										className="sailorQForm__couple"
										key={item.title}
									>
										<label
											htmlFor={items.id}
											className="sailorQForm__label"
										>
											{items.label}
										</label>
										<InputField
											id={items.id}
											name={items.id}
											value={form[items.key]}
											onChange={(e) =>
												setForm({
													...form,
													[items.key]: e.target.value,
												})
											}
											required
										/>
									</div>
								))}
							</div>
						))}
					</Accordion>
					<Accordion title={"4. Visas"}>
						{visas.map((item) => (
							<div className="sailorQForm__list" key={item.title}>
								<div className="sailorQForm__subtitle">
									<hr className="sailorQForm__line"/>
									<h3 className="sailorQForm__subtitle-text">
										{item.title}
									</h3>
									<hr className="sailorQForm__line"/>
								</div>
								{item.inputs.map((items) => (
									<div
										className="sailorQForm__couple"
										key={item.title}
									>
										<label
											htmlFor={items.id}
											className="sailorQForm__label"
										>
											{items.label}
										</label>
										<InputField
											id={items.id}
											name={items.id}
											value={form[items.key]}
											onChange={(e) =>
												setForm({
													...form,
													[items.key]: e.target.value,
												})
											}
											required
										/>
									</div>
								))}
							</div>
						))}
					</Accordion>
					<Accordion title={"5. English Skills"}>
						{englishSkills.map((item) => (
							<div className="sailorQForm__list" key={item.title}>
								<div className="sailorQForm__subtitle">
									<hr className="sailorQForm__line"/>
									<h3 className="sailorQForm__subtitle-text">
										{item.title}
									</h3>
									<hr className="sailorQForm__line"/>
								</div>
								{item.inputs.map((items) => (
									<div
										className="sailorQForm__couple"
										key={item.title}
									>
										<label
											htmlFor={items.id}
											className="sailorQForm__label"
										>
											{items.label}
										</label>
										<InputField
											id={items.id}
											name={items.id}
											value={form[items.key]}
											onChange={(e) =>
												setForm({
													...form,
													[items.key]: e.target.value,
												})
											}
											required
										/>
									</div>
								))}
							</div>
						))}
					</Accordion>
					<Accordion title={"6. National Certificates of Competency"}>
						{nationalCertificates.map((item) => (
							<div className="sailorQForm__list" key={item.title}>
								<div className="sailorQForm__subtitle">
									<hr className="sailorQForm__line"/>
									<h3 className="sailorQForm__subtitle-text">
										{item.title}
									</h3>
									<hr className="sailorQForm__line"/>
								</div>
								{item.inputs.map((items) => (
									<div
										className="sailorQForm__couple"
										key={item.title}
									>
										<label
											htmlFor={items.id}
											className="sailorQForm__label"
										>
											{items.label}
										</label>
										<InputField
											id={items.id}
											name={items.id}
											value={form[items.key]}
											onChange={(e) =>
												setForm({
													...form,
													[items.key]: e.target.value,
												})
											}
											required
										/>
									</div>
								))}
							</div>
						))}
					</Accordion>
					<Accordion title={"7. Certificates"}>
						{certificates.map((item) => (
							<div className="sailorQForm__list" key={item.title}>
								<div className="sailorQForm__subtitle">
									<hr className="sailorQForm__line"/>
									<h3 className="sailorQForm__subtitle-text">
										{item.title}
									</h3>
									<hr className="sailorQForm__line"/>
								</div>
								{item.inputs.map((items) => (
									<div
										className="sailorQForm__couple"
										key={item.title}
									>
										<label
											htmlFor={items.id}
											className="sailorQForm__label"
										>
											{items.label}
										</label>
										<InputField
											id={items.id}
											name={items.id}
											value={form[items.key]}
											onChange={(e) =>
												setForm({
													...form,
													[items.key]: e.target.value,
												})
											}
											required
										/>
									</div>
								))}
							</div>
						))}
					</Accordion>
					<Accordion title={"8. Tanker Certificate of Proficiency"}>
						{tankerCertificate.map((item) => (
							<div className="sailorQForm__list" key={item.title}>
								<div className="sailorQForm__subtitle">
									<hr className="sailorQForm__line"/>
									<h3 className="sailorQForm__subtitle-text">
										{item.title}
									</h3>
									<hr className="sailorQForm__line"/>
								</div>
								{item.inputs.map((items) => (
									<div
										className="sailorQForm__couple"
										key={item.title}
									>
										<label
											htmlFor={items.id}
											className="sailorQForm__label"
										>
											{items.label}
										</label>
										<InputField
											id={items.id}
											name={items.id}
											value={form[items.key]}
											onChange={(e) =>
												setForm({
													...form,
													[items.key]: e.target.value,
												})
											}
											required
										/>
									</div>
								))}
							</div>
						))}
					</Accordion>
					<Accordion title={"9. Medical Certificates"}>
						{medicalCertificates.map((item) => (
							<div className="sailorQForm__list" key={item.title}>
								<div className="sailorQForm__subtitle">
									<hr className="sailorQForm__line"/>
									<h3 className="sailorQForm__subtitle-text">
										{item.title}
									</h3>
									<hr className="sailorQForm__line"/>
								</div>
								{item.inputs.map((items) => (
									<div
										className="sailorQForm__couple"
										key={item.title}
									>
										<label
											htmlFor={items.id}
											className="sailorQForm__label"
										>
											{items.label}
										</label>
										<InputField
											id={items.id}
											name={items.id}
											value={form[items.key]}
											onChange={(e) =>
												setForm({
													...form,
													[items.key]: e.target.value,
												})
											}
											required
										/>
									</div>
								))}
							</div>
						))}
					</Accordion>
					<Accordion title={"10. Flag State Documents"}>
						{flagStateDocuments.map((item) => (
							<div className="sailorQForm__list" key={item.title}>
								<div className="sailorQForm__subtitle">
									<hr className="sailorQForm__line"/>
									<h3 className="sailorQForm__subtitle-text">
										{item.title}
									</h3>
									<hr className="sailorQForm__line"/>
								</div>
								{item.inputs.map((items) => (
									<div
										className="sailorQForm__couple"
										key={item.title}
									>
										<label
											htmlFor={items.id}
											className="sailorQForm__label"
										>
											{items.label}
										</label>
										<InputField
											id={items.id}
											name={items.id}
											value={form[items.key]}
											onChange={(e) =>
												setForm({
													...form,
													[items.key]: e.target.value,
												})
											}
											required
										/>
									</div>
								))}
							</div>
						))}
					</Accordion>
					<button className="sailorQForm__button save">Сохранить</button>
					<button className="sailorQForm__button createPdf"><img src="/images/pdf-icon.svg" alt="" className="pdf-icon"/>Скачать PDF</button>
				</div>
			</div>
		</>
	);
}
