import PropTypes from 'prop-types'

const Section = ({title, children}) => {
    return <>{title}
   {children}
    </>
}

Section.propTypes = {
    title: PropTypes.string
}

export default Section

