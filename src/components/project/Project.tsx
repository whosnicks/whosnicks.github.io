import { FaFolder} from 'react-icons/fa'
import './Project.css'

const Project = () => {
    
    return (
        <section className='wrapperProject'>
            <div className='titleProjects'>
                    <span>
                        <FaFolder/>
                        <p>My Projects</p>
                    </span>
            </div>
        </section>
    )
}

export default Project