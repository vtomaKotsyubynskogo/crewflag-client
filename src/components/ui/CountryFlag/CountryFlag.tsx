import type {FC} from "react";

interface CountryFlagProps {
	countryCode: string;
	className?: string;
}

const CountryFlag: FC<CountryFlagProps> = ({ countryCode, className = "" }) => (
	<svg className={className} aria-hidden="true">
		<use
			xlinkHref={`/images/flags.svg#flag-${countryCode.toLowerCase()}`}
		/>
	</svg>
);

export default CountryFlag;