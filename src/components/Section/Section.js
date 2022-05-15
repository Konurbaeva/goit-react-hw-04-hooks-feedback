import PropTypes from 'prop-types';

function Section({ title, children }) {
    return <div>{title} {children}</div>;
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section;