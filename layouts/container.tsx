import PropTypes from "prop-types"

export default function Container({ size, children }) {
	return (
		<div
			className={`${
				size != undefined ? size : "max-w-screen-xl"
			} mx-auto px-2 sm:px-8`}
		>
			{children}
		</div>
	)
}

Container.propTypes = {
	size: PropTypes.any,
}
