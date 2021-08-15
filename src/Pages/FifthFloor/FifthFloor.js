import React, {useState,useEffect} from 'react';
import AOS from 'aos';
import Utils from '../../components/Utils/Utils';

import getWordFromNumber from '../../helpers/NumberToWord';
import MapColorToTeam from '../../helpers/TeamToColors';

import './fifthfloor.css';
import 'aos/dist/aos.css';


const FifthFloor = () => {

    useEffect(() => {
        AOS.init({
            duration: 3000
        })
    })

    const [myseat, setSelectedSeat] = useState('');
    const [previousSeatID, setPreviousSeatID] = useState('');

    const splitID = (selectedSeatID) => {
        const floorNumber = selectedSeatID[1] + selectedSeatID[2];
        console.log(`Floor Number ${floorNumber}`);
        const seatNumber = selectedSeatID[4] + selectedSeatID[5];
        console.log(`Seat Number ${seatNumber}`);
        setSelectedSeat(`You have chosen Floor ${getWordFromNumber(floorNumber)} and Seat ${getWordFromNumber(seatNumber)}`);
    }

    const handleSeatClick = (e) => {
        console.log(e.target.id);
        const selectedSeatID = String(e.target.id);
        //Set the previous seat display to default and change new seat color
        // document.getElementById(previousSeatID).style.backgroundColor = '#b0c4de';
        if (previousSeatID.length > 1) {
            console.log(`Previous Seat Id ${previousSeatID}`);
            document.getElementById(previousSeatID).style.background = '#45a9ec';
            document.getElementById(previousSeatID).style.borderRadius = '0px'
            document.getElementById(previousSeatID).style.borderTopLeftRadius = '25px'
            document.getElementById(previousSeatID).style.borderTopRightRadius = '25px'
        }
        document.getElementById(e.target.id).style.backgroundColor = MapColorToTeam(3);
        document.getElementById(e.target.id).style.borderRadius = '50%';
        document.getElementById(e.target.id).style.border = '2px solid black'

        setPreviousSeatID(e.target.id);
        // alert(selectedSeatID);
        // setSelectedSeat(selectedSeatID);
        splitID(selectedSeatID);
    }

    return (
        <div className='fifth'>
            <div className='fifth-navbar'>
                DB Social Desking
            </div>
            <div className='fifth-utils'>
                <Utils seat={myseat} finalSeatID={previousSeatID} color={'#45a9ec'} />
            </div>
            <div className='fifth-seat-container'>
                <div data-aos={'fade-up'} className='fifth-left-side'>
                    <div className='fifth-seat' id='f05s01' onClick={handleSeatClick}>F0501</div>
                    <div className='fifth-seat' id='f05s02' onClick={handleSeatClick}>F0502</div>
                    <div className='fifth-seat' id='f05s03' onClick={handleSeatClick}>F0503</div>
                    <div className='fifth-seat' id='f05s04' onClick={handleSeatClick}>F0504</div>
                    <div className='fifth-seat' id='f05s05' onClick={handleSeatClick}>F0505</div>
                    <div className='fifth-seat' id='f05s06' onClick={handleSeatClick}>F0506</div>
                    <div className='fifth-seat' id='f05s07' onClick={handleSeatClick}>F0507</div>
                    <div className='fifth-seat' id='f05s08' onClick={handleSeatClick}>F0508</div>
                    <div className='fifth-seat' id='f05s09' onClick={handleSeatClick}>F0509</div>
                    <div className='fifth-seat' id='f05s10' onClick={handleSeatClick}>F0510</div>
                </div>
                <div data-aos={'fade-down'} className='fifth-right-side'>
                    <div className='fifth-seat' id='f05s11' onClick={handleSeatClick}>F0511</div>
                    <div className='fifth-seat' id='f05s12' onClick={handleSeatClick}>F0512</div>
                    <div className='fifth-seat' id='f05s13' onClick={handleSeatClick}>F0513</div>
                    <div className='fifth-seat' id='f05s14' onClick={handleSeatClick}>F0514</div>
                    <div className='fifth-seat' id='f05s15' onClick={handleSeatClick}>F0515</div>
                    <div className='fifth-seat' id='f05s16' onClick={handleSeatClick}>F0516</div>
                    <div className='fifth-seat' id='f05s17' onClick={handleSeatClick}>F0517</div>
                    <div className='fifth-seat' id='f05s18' onClick={handleSeatClick}>F0518</div>
                    <div className='fifth-seat' id='f05s19' onClick={handleSeatClick}>F0519</div>
                    <div className='fifth-seat' id='f05s20' onClick={handleSeatClick}>F0520</div>
                </div>
            </div>
        </div>
    )
}

export default FifthFloor
