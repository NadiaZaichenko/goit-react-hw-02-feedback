import PropTypes from 'prop-types'

const Notification = ({messege}) => {
return (
    <>{messege}</>
)
};

Notification.propTypes ={
    messege: PropTypes.string
}

export default Notification;