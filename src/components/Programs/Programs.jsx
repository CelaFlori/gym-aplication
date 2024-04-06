import './Programs.css'
import { programsData } from "./src/data/programsData";

export const Programs = () => {
    return(
        <div className='Programs' id='programs'>
            <div className='programs-header'>
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            <div className='progam-category'>
                {programsData.map((program) => (
                    <div className='category'>
                        {program.image}
                    </div>
                ))}
            </div>
        </div>
    )
}