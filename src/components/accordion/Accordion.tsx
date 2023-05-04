import './Accordion.css'
import DownArrow from '../../assets/icons/down-arrow.png'
import UpArrow from '../../assets/icons/up-arrow.png'
import { useState } from 'react'

const Accordion = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (index:any) => {
        if (selected == index) {
            return setSelected(null)
        }

        setSelected(index)
    }

    return (
    <div className='wrapper'>
        <div className="accordion">
                {data.map((item, index) => (
                    <div className='item' onClick={() => toggle(index)}>
                        <div className="title noselect">
                            <h3>{item.topic}</h3>
                            {selected === index ? <img src={UpArrow} alt="" /> : <img src={DownArrow} alt="" />} 
                        </div>
                        <div className={selected === index ? 'content show' : 'content'}>{item.anwser}</div>
                    </div>
                ))}
        </div >
    </div>
    )
}

const data = [
    {
      topic: 'Understanding the problem',
      anwser: "The first thing I needed to do was to create a const variable that received 'createBrowserRouter'"
    },
    {
        topic: 'Finding the solution',
        anwser: "The first thing I needed to do was to create a const variable that received 'createBrowserRouter'"
      },
      {
        topic: 'Testing',
        anwser: "The first thing I needed to do was to create a const variable that received 'createBrowserRouter'"
      },
      {
        topic: 'Implementing the solution',
        anwser: "The first thing I needed to do was to create a const variable that received 'createBrowserRouter'"
      },
      {
        topic: 'Deploy',
        anwser: "The first thing I needed to do was to create a const variable that received 'createBrowserRouter'"
      },
  ]

export default Accordion