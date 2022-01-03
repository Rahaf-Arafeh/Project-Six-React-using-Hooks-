import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Bookin.css'
function Booking() {
    const history = useHistory();
    const [date, setDate] = useState('empty');
    const [time, setTime] = useState('01:00-04:00');
    const [price, setPrice] = useState(20);
    const [id, setId] = useState(Date.now());
    const [loggedUser, setLoggedUser] = useState({});
    const [usersBookedDetails, setUsersBookedDetails] = useState([]);
    const [usersReservations, setUsersReservations] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0)
        localStorage.getItem("usersBookedDetails")
            ? setUsersBookedDetails(
                JSON.parse(localStorage.getItem("usersBookedDetails"))
            )
            : localStorage.setItem("usersBookedDetails", JSON.stringify([]));

        localStorage.getItem("loggedAccount")
            ? setLoggedUser(JSON.parse(localStorage.getItem("loggedAccount")))
            : setLoggedUser({ email: "guest" });
    }, []);
    const handleBooking = () => {

        if (loggedUser.email == "guest") {
            history.push("/login");
            return;
        }
        let exist = false;
        let existIndex = null;
        let existDateIndex = null;
        let existTimeIndex = null;


        for (let i = 0; i < usersBookedDetails.length; i++) {
            if (usersBookedDetails[i].price === price) {
                exist = true;
                existIndex = i;
            }
        }
        if (exist) {
            let existDate = false;
            usersBookedDetails[existIndex].bookedDates.forEach((item, index) => {
                if (item.date == date) {
                    existDate = true;
                    existDateIndex = index;
                }
            });
            if (existDate) {
                let existTime = false;
                let dateObject =
                    usersBookedDetails[existIndex].bookedDates[existDateIndex];
                dateObject.times.forEach((item, index) => {
                    if (item == time) {
                        existTime = true;
                        existTimeIndex = index;
                    }
                });
                if (!existTime) {
                    dateObject.times.push(time);
                    dateObject.clients.push(loggedUser.email);
                    setUsersBookedDetails(usersBookedDetails);
                    let testStorageData = localStorage.getItem("usersReservations")
                        ? JSON.parse(localStorage.getItem("usersReservations"))
                        : [];
                    localStorage.setItem(
                        "usersBookedDetails",
                        JSON.stringify(usersBookedDetails)
                    );
                    let newUsersReservationsArr = [...testStorageData];
                    newUsersReservationsArr.push({
                        user: loggedUser.email,
                        price: price,
                        date: date,
                        time: time,
                    });
                    setUsersReservations(newUsersReservationsArr);

                    localStorage.setItem(
                        "usersReservations",
                        JSON.stringify(newUsersReservationsArr)
                    );

                    alert("Booked Successfully!");
                } else {
                    alert("Not available at this time!!");
                }
            }
            if (!existDate) {
                let newStateArr = usersBookedDetails;
                newStateArr[existIndex].bookedDates.push({
                    date: date,
                    times: [time],
                    clients: [loggedUser.email],
                });

                setUsersBookedDetails(newStateArr);
                localStorage.setItem(
                    "usersBookedDetails",
                    JSON.stringify(newStateArr)
                );
                let testStorageData = localStorage.getItem("usersReservations")
                    ? JSON.parse(localStorage.getItem("usersReservations"))
                    : [];
                let newUsersReservationsArr = [...testStorageData];
                newUsersReservationsArr.push({
                    user: loggedUser.email,
                    price: price,
                    date: date,
                    time: time,
                });
                setUsersReservations(newUsersReservationsArr);

                localStorage.setItem(
                    "usersReservations",
                    JSON.stringify(newUsersReservationsArr)
                );

                alert("Booked Successfully!")
            }
        }
        if (!exist) {
            setUsersBookedDetails([
                ...usersBookedDetails,
                {
                    id: id,
                    price: price,
                    bookedDates: [
                        { date: date, times: [time], clients: [loggedUser.email] },
                    ],
                },
            ]);

            let newArrr;
            if (localStorage.getItem("tutorsBookedDetails")) {
                let storageData = JSON.parse(
                    localStorage.getItem("tutorsBookedDetails")
                );
                newArrr = [
                    ...storageData,
                    {
                        id: id,
                        price: price,
                        bookedDates: [
                            { date: date, times: [time], clients: [loggedUser.email] },
                        ],
                    },
                ];

                localStorage.setItem("usersBookedDetails", JSON.stringify(newArrr));
                let testStorageData = localStorage.getItem("usersReservations")
                    ? JSON.parse(localStorage.getItem("usersReservations"))
                    : [];
                let newUsersReservationsArr = [...testStorageData];
                newUsersReservationsArr.push({
                    user: loggedUser.email,
                    price: price,
                    date: date,
                    time: time,
                });
                setUsersReservations(newUsersReservationsArr);

                localStorage.setItem(
                    "usersReservations",
                    JSON.stringify(newUsersReservationsArr)
                );
            } else {
                newArrr = [
                    {
                        id: id,
                        price: price,
                        bookedDates: [
                            { date: date, times: [time], clients: [loggedUser.email] },
                        ],
                    },
                ];
                localStorage.setItem("usersBookedDetails", JSON.stringify(newArrr));
                let testStorageData = localStorage.getItem("usersReservations")
                    ? JSON.parse(localStorage.getItem("usersReservations"))
                    : [];
                let newUsersReservationsArr = [...testStorageData];
                newUsersReservationsArr.push({
                    user: loggedUser.email,
                    price: price,
                    date: date,
                    time: time,
                });
                setUsersReservations(newUsersReservationsArr);

                localStorage.setItem(
                    "usersReservations",
                    JSON.stringify(newUsersReservationsArr)
                );
            }

            alert("Booked Successfully!");
        }


    };


    return (
        <div className='booking'>
            <div className='booking-container'>
                <div className='booking-container-img'><img src='cinema.jpg' alt='cinema' /></div>
                <form className='form'>
                    <div className='form-group-booking'>
                        <label htmlFor='date'>Pick a Date:</label>
                        <input type='date' name='date' id='date' value={date} onChange={(e) => setDate(e.target.value)} required />
                    </div>
                    <div className='form-group-booking'>
                        <label htmlFor='time'>Pick a Time:</label>
                        <select id='time' value={time} onChange={(e) => setTime(e.target.value)} required>
                            <option value='01:00-04:00'>01:00-04:00</option>
                            <option value='04:00-07:00'>04:00-07:00</option>
                            <option value='07:00-10:00'>07:00-10:00</option>
                        </select>
                    </div>
                    <button onClick={handleBooking} disabled={date == "empty"}>
                        {localStorage.getItem("loggedAccount")
                            ? "Book"
                            : "Login To Book"}</button>
                </form>
                <p>{price}JOD</p>
            </div>
        </div>
    )
}

export default Booking
