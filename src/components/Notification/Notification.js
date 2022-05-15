import PropTypes from 'prop-types';

function Notification({ message }) {
    return (
        <>
            <div>{message}</div>
        </>
    );
}

Notification.propTypes = {
    title: PropTypes.string,
};


export default Notification;