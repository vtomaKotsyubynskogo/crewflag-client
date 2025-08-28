import './styles/Accordion.scss'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Accordion = ({
	title,
	children,
}: { title: string; children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="accordion">
			<button
				className="accordion__button"
				onClick={() => setIsOpen(!isOpen)}
			>
				{title} <img
				src="/images/arrow-icon.svg"
				alt="toggle"
				className={`accordion__title ${isOpen ? 'open':''}`}
			/>
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						className="accordion__list"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="accordion__item">{children}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
