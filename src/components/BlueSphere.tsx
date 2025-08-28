import "./styles/BlueSphere.scss";
import { useEffect, useRef} from "react";

interface BlueSphereProps {
	width: number;
	height: number;
}

export default function BlueSphere({width, height} : BlueSphereProps) {
	const ballRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let targetX = window.innerWidth / 2;
		let targetY = window.innerHeight / 2;
		let currentX = targetX;
		let currentY = targetY;

		let floatAngle = 0;

		const handleTouchMove = (e: TouchEvent) => {
			const touch = e.touches[0];
			targetX = touch.clientX;
			targetY = touch.clientY;
		};

		const animate = () => {
			floatAngle += 0.1;

			const floatOffsetX = Math.cos(floatAngle * 1.5) * 15;
			const floatOffsetY = Math.sin(floatAngle) * 10;

			currentX += (targetX - currentX) * 0.12;
			currentY += (targetY - currentY) * 0.12;

			const ball = ballRef.current;

			if (ball) {
				const rect = ball.getBoundingClientRect();
				const offsetX = rect.width / 2;
				const offsetY = rect.height / 2;

				const finalX = currentX + floatOffsetX - offsetX;
				const finalY = currentY + floatOffsetY - offsetY;

				ball.style.setProperty('--tx', `${finalX}px`);
				ball.style.setProperty('--ty', `${finalY}px`);
			}

			requestAnimationFrame(animate);
		};

		window.addEventListener("touchmove", handleTouchMove);
		animate();

		return () => {
			window.removeEventListener("touchmove", handleTouchMove);
		};
	}, []);

	return <div className="blue-sphere" style={{width: `${width}px`, height: `${height}px`}} ref={ballRef}></div>;
}
