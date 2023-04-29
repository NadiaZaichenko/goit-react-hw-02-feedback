import {Component} from 'react'
import css from 'components/Feedback/App.module.css'
import { FeedbackOptions } from './Feedback/FeedbackOptions'
import { Statistics } from './Feedback/Statistics'
import Section from './Feedback/Section'
import Notification from './Feedback/Notification'

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }

  LeaveFeedBack = (name) => {
       this.setState(prevState => ({
        [name] : prevState[name] + 1,
       })
     )
   }

   countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    const totalLeave = good + neutral + bad;
    return totalLeave;
   }

   countPositiveFeedbackPercentage() {
    if(this.countTotalFeedback()) {
       const percent = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100)
        return percent
    }
   }

      render() {
        return (
            <div className={css.container}>
              <Section title='Please leave feedback'>
                 <FeedbackOptions 
                options = {Object.keys(this.state)} 
                onLeaveFeedBack = {this.LeaveFeedBack}/>
              </Section>
                 {this.countTotalFeedback() > 0 ? (
                  <Section title = 'Statistics'>
                    <Statistics
                good = {this.state.good} 
                neutral = {this.state.neutral} 
                bad = {this.state.bad} 
                total = {this.countTotalFeedback()}
                positivePercentage ={this.countPositiveFeedbackPercentage()}
                />
                  </Section>
                 ) : (
                  <Notification message="There is no feedback"></Notification>
                 )}          
            </div>
        )
      }
}
