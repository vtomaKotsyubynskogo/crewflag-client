import "./Select.scss";
import {type RefObject, useEffect, useRef, useState} from "react";
import { COUNTRIES } from "./countries.tsx";
import type { SelectMenuOption } from "./types";
import cn from "classnames";
import { useOnClickOutside } from "../../hooks/useOnClickOutside.ts";

export interface SelectItem {
	label: string;
	value: string;
}

export interface CountrySelectorProps {
	id: string;
	open: boolean;
	disabled?: boolean;
	onToggle: () => void;
	onChange: (value: SelectMenuOption["value"]) => void;
	defaultValue: string | null;
	placeholder?: string;
	searchPlaceholder?: string;
	data: SelectItem[];
	className?: string;
}

export default function CountrySelector({
	id,
	open,
	disabled = false,
	onToggle,
	onChange,
	defaultValue,
	placeholder,
	// searchPlaceholder,
	data = [],
	className,
}: CountrySelectorProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const transitionDuration = 100;
	const [shouldRender, setShouldRender] = useState(open);
	const [query, setQuery] = useState("");
	const [selectedValue, setSelectedValue] = useState<SelectMenuOption | null>(
		null,
	);

	useEffect(() => {
		if (open) {
			setShouldRender(true);
		} else {
			const timeoutId = setTimeout(
				() => setShouldRender(false),
				transitionDuration,
			);
			return () => clearTimeout(timeoutId);
		}
	}, [open]);

	useEffect(() => {
		if (defaultValue) {
			const country = COUNTRIES.find((c) => c.value === defaultValue);
			if (country) {
				setSelectedValue(country);
			}
		}
	}, []);

	useOnClickOutside(containerRef as RefObject<HTMLDivElement>, () => {
		if (open) {
			onToggle();
			setQuery("");
		}
	});

	const filteredData = data.filter((country) =>
		country.label.toLowerCase().startsWith(query.toLowerCase()),
	);

	return (
		<div className="country-selector" ref={containerRef}>
			<div className="country-selector__control">
				<button
					type="button"
					className={cn(
						"country-selector__toggle",
						disabled && "country-selector__toggle--disabled",
						className,
					)}
					aria-haspopup="listbox"
					aria-expanded={open}
					onClick={onToggle}
					disabled={disabled}
				>
					{selectedValue ? (
						<span className="country-selector__selected">
							{selectedValue.label}
						</span>
					) : (
						<span className="country-selector__placeholder">
							{placeholder}
						</span>
					)}

					{!disabled && (
						<span className="country-selector__icon">
							<svg
								className="country-selector__icon-svg"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					)}
				</button>
				{shouldRender && (
					<ul
						className={`country-selector__list ${open ? "fade--in" : "fade--out"}`}
						role="listbox"
						tabIndex={0}
						aria-labelledby="listbox-label"
					>
						<li className="country-selector__search-container">
							<input
								type="search"
								name="search"
								autoComplete="off"
								className="country-selector__input"
								placeholder={placeholder}
								onChange={(e) => setQuery(e.target.value)}
							/>
						</li>
						<li className="country-selector__divider"></li>
						<div className="country-selector__options-container">
							{filteredData.length === 0 ? (
								<li className="country-selector__option country-selector__option--no-result">
									Not found
								</li>
							) : (
								filteredData.map((country, index) => (
									<li
										key={`${id}-${index}`}
										className="country-selector__option"
										role="option"
										tabIndex={0}
										onClick={() => {
											setSelectedValue(country);
											onChange(country.value);
											setQuery("");
											onToggle();
										}}
									>
										{/*<CountryFlag*/}
										{/*	countryCode={country.value}*/}
										{/*	className={"country-selector__flag"}*/}
										{/*/>*/}

										<span className="country-selector__option-text">
											{country.label}
										</span>
										{country.value ===
											selectedValue?.value && (
											<span className="country-selector__option-selected-icon">
												<svg
													className="country-selector__check-icon"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
														clipRule="evenodd"
													/>
												</svg>
											</span>
										)}
									</li>
								))
							)}
						</div>
					</ul>
				)}
			</div>
		</div>
	);
}
