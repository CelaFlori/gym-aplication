import './Testimonials.css';
import {testimonialsData} from "../../data/testimonialsData";
import leftArrows from '../../assets/leftArrow.png';
import RightArrows from '../../assets/rightArrow.png';
import {useState} from "react";

export const Testimonials = () => {

    const [selected, setSelected] = useState(0);
    const tLengeth = testimonialsData.length;
    return(
        <div className='Testimonials'>
            <div className='left-t'>
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>

                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{ color: 'var(--orange)' }}>
                    {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                    </span>
            </div>
            <div className='right-t'>
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt=""/>

                <div className='arrows'>
                    <img onClick={() => {
                        selected === 0 ? setSelected(tLengeth - 1) : setSelected(((prev) => prev - 1)) }}
                         src={leftArrows} alt=""/>
                    <img onClick={() => {
                        selected === tLengeth - 1
                            ? setSelected(0)
                            : setSelected((prev) => prev + 1);
                    }} src={RightArrows} alt=""/>
                </div>
            </div>
        </div>
    )
}