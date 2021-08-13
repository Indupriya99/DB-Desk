import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import FirstFloor from '../../Pages/FirstFloor/FirstFloor';
import SecondFloor from '../../Pages/SecondFloor/SecondFloor';
import ThirdFloor from '../../Pages/ThirdFloor/ThirdFloor';
import FourthFloor from '../../Pages/FourthFloor/FourthFloor';
import FifthFloor from '../../Pages/FifthFloor/FifthFloor';

const Slider = () => {
    return (
        <div>
            <AwesomeSlider animation='cubeAnimation' buttons={true} fillParent={false}  >
                <div><FirstFloor/></div>
                <div><SecondFloor/></div>
                <div><ThirdFloor/></div>
                <div><FourthFloor/></div>
                <div><FifthFloor/></div>
            </AwesomeSlider>
        </div>
    )
}

export default Slider
