import './Learn.css'
import Accordion from '../../components/accordion/Accordion'

const Learn = () => {
  return (
  <div>
    <div className='learn'>
        <div className='diagonal-line'></div>
        <div className='steps'>
          <h2>My steps to learn</h2>
          <Accordion/>
        </div>
        <div className='learnWithMe'>
          <h2>Learn from my mistakes</h2>
        </div>
    </div>
    <div>
      <h1>Continue...</h1>
    </div>
  </div>
  )
}

export default Learn