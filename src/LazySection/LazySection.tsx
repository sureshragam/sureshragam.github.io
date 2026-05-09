import { useInView } from "react-intersection-observer";

const LazySection = ({ children, threshold = 0.05, triggerOnce = true }) => {
	const { ref, inView } = useInView({
		triggerOnce,
		threshold,
		rootMargin: "200px 0px",
	});

	return (
		<div ref={ref}>
			{inView ? children : <div style={{ minHeight: "200px" }} />}
		</div>
	);
};

export default LazySection;
