import React, {useState,useEffect} from 'react';
import AOS from 'aos';
import Utils from '../../components/Utils/Utils';

import getWordFromNumber from '../../helpers/NumberToWord';
import MapColorToTeam from '../../helpers/TeamToColors';

import './fourthfloor.css';
import 'aos/dist/aos.css';


const FourthFloor = () => {

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
        document.getElementById(e.target.id).style.backgroundColor = MapColorToTeam(2);
        document.getElementById(e.target.id).style.borderRadius = '50%';
        document.getElementById(e.target.id).style.border = '2px solid black'

        setPreviousSeatID(e.target.id);
        // alert(selectedSeatID);
        // setSelectedSeat(selectedSeatID);
        splitID(selectedSeatID);
    }

    return (
        <div className='fourth'>
            <div className='fourth-navbar'>
                DB Social Desking
            </div>
            <div className='fourth-utils'>
                <Utils seat={myseat} finalSeatID={previousSeatID} color={'#45a9ec'} />
            </div>
            <div className='fourth-seat-container'>
                <div data-aos={'fade-up-right'} className='fourth-left-side'>
                    <div className='fourth-seat' id='f04s01' onClick={handleSeatClick}>F0401</div>
                    <div className='fourth-seat' id='f04s02' onClick={handleSeatClick}>F0402</div>
                    <div className='fourth-seat' id='f04s03' onClick={handleSeatClick}>F0403</div>
                    <div className='fourth-seat' id='f04s04' onClick={handleSeatClick}>F0404</div>
                    <div className='fourth-seat' id='f04s04' onClick={handleSeatClick}>F0405</div>
                    <div className='fourth-seat' id='f04s06' onClick={handleSeatClick}>F0406</div>
                    <div className='fourth-seat' id='f04s07' onClick={handleSeatClick}>F0407</div>
                    <div className='fourth-seat' id='f04s08' onClick={handleSeatClick}>F0408</div>
                    <div className='fourth-seat' id='f04s09' onClick={handleSeatClick}>F0409</div>
                    <div className='fourth-seat' id='f04s10' onClick={handleSeatClick}>F0410</div>
                </div>
                <div data-aos={'fade-up-left'} className='fourth-right-side'>
                    <div className='fourth-seat' id='f04s11' onClick={handleSeatClick}>F0411</div>
                    <div className='fourth-seat' id='f04s12' onClick={handleSeatClick}>F0412</div>
                    <div className='fourth-seat' id='f04s13' onClick={handleSeatClick}>F0413</div>
                    <div className='fourth-seat' id='f04s14' onClick={handleSeatClick}>F0414</div>
                    <div className='fourth-seat' id='f04s15' onClick={handleSeatClick}>F0415</div>
                    <div className='fourth-seat' id='f04s16' onClick={handleSeatClick}>F0416</div>
                    <div className='fourth-seat' id='f04s17' onClick={handleSeatClick}>F0417</div>
                    <div className='fourth-seat' id='f04s18' onClick={handleSeatClick}>F0418</div>
                    <div className='fourth-seat' id='f04s19' onClick={handleSeatClick}>F0419</div>
                    <div className='fourth-seat' id='f04s20' onClick={handleSeatClick}>F0420</div>
                </div>
            </div>
        </div>
    )
}

export default FourthFloor
