import {Component} from 'react'
import css from 'components/Feedback/Feedback.module.css'

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,

      }

    onLeaveFeedback=() => {
        this.setState( (prevState) => ({
           {state}: prevState.state + 1,
        }))
    }

    onGoodFeedback = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }))
    }
    onNeutraleFeedback = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
    }
    onBadFeedback = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
    }

      render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <h1>Please leave feedback</h1>
                <button className={css.button} onClick={this.onGoodFeedback}>Good</button>
                <button className={css.button} onClick={this.onLeaveFeedback}>Neutral</button>
                <button className={css.button} onClick={this.onLeaveFeedback}>Bad</button>
                <h2>Statistics</h2>
                <p value={good}>Good: {good}</p>
                <p value={neutral}>Neutral: {neutral}</p>
                <p value={bad}>Bad: {bad} </p>
            </div>
        )
      }

}

export default Feedback