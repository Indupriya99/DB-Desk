import React, { useState } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Slide from '@material-ui/core/Slide';

import ReactiveButton from 'reactive-button';

// Import Font Awesome Svg Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faThumbsUp, faBomb, faTimes } from '@fortawesome/free-solid-svg-icons';

import DateTimePicker from 'react-datetime-picker';

import './util.css';

const Utils = ({seat}) => {

    const [bookingDate, setBookingDate] = useState(new Date());
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [bookingButtonState, setBookingButtonState] = useState('idle');
    const [bookingopen, setBookingOpen] = useState(false);

    const [cancelButtonState, setCancelButtonState] = useState('idle');
    const [cancelopen, setCancelOpen] = useState(false);



    const bookingConfirmHandler = () => {
        setBookingButtonState('loading');
        setBookingOpen(true);
        setTimeout(() => {
            setBookingButtonState('success');
        }, 1000);
    }

    const handleBookingAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setBookingOpen(false);
    };

    const cancelButtonHandler = () => {
        setCancelButtonState('loading');
        setCancelOpen(true);
        setTimeout(() => {
            setCancelButtonState('success');
        }, 1000);
    }

    const handleCancelAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setCancelOpen(false);
    }


    return (
        <div className='utility-container'>
            <div className='dateTimePicker'>
            <DateTimePicker
            onChange = {setBookingDate}
            value={bookingDate}
            />
            {/* <p>
                {` Booking Date ${bookingDate.toString()}`} <br />
                {` Year : ${bookingDate.getFullYear()}`} <br />
                {`Month : ${bookingDate.getMonth()+1}`} <br />
                {`Date : ${bookingDate.getDate()}`} <br />
                {`Day : ${weekdays[bookingDate.getDay()]}`} <br />
                {` Hours : ${bookingDate.getHours()}`} <br />
                {`Minutes : ${bookingDate.getMinutes()}`} <br />
            </p> */}
        </div>
            <div className='btn-container'>
                <div className='confirmBtn'>
                    <ReactiveButton
                        buttonState={bookingButtonState}
                        onClick={bookingConfirmHandler}
                        color={'green'}
                        idleText={'Confirm'}
                        loadingText={
                            <React.Fragment>
                                <FontAwesomeIcon icon={faCheck} /> Booking..
                            </React.Fragment>
                        }
                        successText={
                            <React.Fragment>
                                <FontAwesomeIcon icon={faThumbsUp} /> Success
                            </React.Fragment>
                        }
                        errorText={
                            <React.Fragment>
                                <FontAwesomeIcon icon={faBomb} /> Error
                            </React.Fragment>
                        }
                        type={'button'}
                        style={{
                            borderRadius: '5px'
                        }}
                        outline={true}
                        shadow={false}
                        rounded={true}
                        size={'normal'}
                        block={false}
                        messageDuration={2000}
                        disabled={false}
                        buttonRef={null}
                        width={null}
                        height={null}
                        animation={true}
                    />

                </div>
                <div className='cancelBtn'>
                    <ReactiveButton
                        buttonState={cancelButtonState}
                        onClick={cancelButtonHandler}
                        color={'red'}
                        idleText={'Cancel'}
                        loadingText={
                            <React.Fragment>
                                <FontAwesomeIcon icon={faTimes} spin /> Cancelling
                            </React.Fragment>
                        }
                        successText={
                            <React.Fragment>
                                <FontAwesomeIcon icon={faThumbsUp} /> Done
                            </React.Fragment>
                        }
                        errorText={
                            <React.Fragment>
                                <FontAwesomeIcon icon={faBomb} /> Error
                            </React.Fragment>
                        }
                        type={'button'}
                        className={'class1 class2'}
                        style={{
                            borderRadius: '5px'
                        }}
                        outline={true}
                        shadow={false}
                        rounded={true}
                        size={'normal'}
                        block={false}
                        messageDuration={2000}
                        disabled={false}
                        buttonRef={null}
                        width={null}
                        height={null}
                        animation={true}
                    />
                </div>
                <Snackbar
                    open={bookingopen}
                    autoHideDuration={6000}
                    onClose={handleBookingAlertClose}
                    TransitionComponent={Slide}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }} >
                    <Alert onClose={handleBookingAlertClose} severity="success">
                        {seat || 'No seat'} has been confimed on {bookingDate.getDate()}/{bookingDate.getMonth()+1} and time {bookingDate.getHours()} hours
                    </Alert>
                </Snackbar>

                <Snackbar
                    open={cancelopen}
                    autoHideDuration={6000}
                    onClose={handleCancelAlertClose}
                    TransitionComponent={Slide}
                    anchorOrigin={{ horizontal: 'left', vertical: 'top' }} >
                    <Alert onClose={handleCancelAlertClose} severity="error">
                        Seat Has been Cancelled
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}

export default Utils
