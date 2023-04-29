import PropTypes from 'prop-types'
import css from 'components/Feedback/Statistics.module.css'
export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
          <h2>Statistics</h2>
                <div className={css.p__container}>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad} </p>
                <p>Total:{total}</p>
                <p>Positive feedback:{positivePercentage}%</p>
                </div>
        </>
    )
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total:  PropTypes.number,
    positivePercentage: PropTypes.number
}