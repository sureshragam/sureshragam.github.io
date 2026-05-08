import { useInView } from "react-intersection-observer";

const LazySection = ({ children, threshold = 0.1, triggerOnce = true }) => {
	const { ref, inView } = useInView({
		triggerOnce,
		threshold,
	});

	return <div ref={ref}>{inView ? children : null}</div>;
};

export default LazySection;
