import { useState, useRef } from 'react'
import './Accordion.css';
import Chevron from './Chevron';

const Accordion = (props) => {

    const [setActive, setActiveState] = useState('');
    const [setHeight, setHeightState] = useState('0px');
    const [setRotate, setRotateState] = useState('accordion_icon');

    const refContent = useRef(null);

    const toggleAccordion = () => {
        setActiveState(setActive === '' ? 'active' : '');
        setHeightState(setActive === 'active' ? '0px' : `${refContent.current.scrollHeight}px`);
        setRotateState(setActive === 'active' ? 'accordion_icon' : 'accordion_icon rotate')
    }

    return (
        <div className="accordion_section">
            <button
                className={`accordion ${setActive}`}
                onClick={toggleAccordion}
            >
                <p className="accordion_title">{props?.title}</p>
                <Chevron width={10} fill="#777" className={`${setRotate}`} />
            </button>
            <div ref={refContent} style={{ maxHeight: `${setHeight}` }} className="accordion_content">
                <div className="accordion_text">
                    {props?.content}
                </div>
            </div>
        </div>
    )
}

export default Accordion