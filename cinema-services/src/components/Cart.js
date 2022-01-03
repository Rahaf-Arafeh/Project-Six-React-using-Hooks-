import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Cart.css'
function Cart() {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(JSON.parse(localStorage.getItem("total")));
    const [coupon, setCoupon] = useState("");
    const [discounted, setDisounted] = useState(JSON.parse(localStorage.getItem("discount")));
    useEffect(() => {
        // let data = JSON.parse(localStorage.getItem("usersReservations"));
        // let user = JSON.parse(localStorage.getItem("loggedAccount"))
        // let filteredData = data.filter((e) => e.user == user.email)
        // setData(filteredData);

        totalPrice();
        localStorage.setItem("coupon", "coupon");
        if (!discounted)
            localStorage.setItem("discount", JSON.stringify(false));
        if (!localStorage.getItem("total")) {
            localStorage.setItem("total", JSON.stringify(total));
            setTotal(JSON.parse(localStorage.getItem("total")));
        }

    }, []);

    const totalPrice = () => {

        let sum = 0;
        if (JSON.parse(localStorage.getItem("usersReservations")))
            JSON.parse(localStorage.getItem("usersReservations")).forEach(
                (data) => (sum = sum + data.price)
            );
        localStorage.setItem("total", JSON.stringify(sum));
        setTotal(sum);
        // localStorage.setItem("total", JSON.stringify(total));
    };
    const couponDiscount = () => {
        if (coupon === localStorage.getItem("coupon")) {
            let newTotal = total - total * 0.2;
            localStorage.setItem("total", JSON.stringify(newTotal));
            console.log(newTotal)
            setTotal(newTotal);
            setDisounted(true);
            localStorage.setItem("discount", JSON.stringify(discounted));
        }
    };
    return JSON.parse(localStorage.getItem("usersReservations"))?.length ? (
        <section className='cart-section'>
            <table className="reservationLeft">
                <thead className="reservationTable">
                    <th>Booking Date</th>
                    <th>Booking Time</th>
                    <th>Subtotal</th>
                </thead>
                <tbody>
                    {JSON.parse(localStorage.getItem("usersReservations")).map((reservation) => (
                        <tr className="reservationTable2">
                            <td>{reservation.date}</td>
                            <td>{reservation.time}</td>
                            <td>{reservation.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='coupon-div'>
                <input type='text' name='text' value={coupon} onChange={(e) => setCoupon(e.target.value)} />
                <button onClick={couponDiscount}>Apply Coupon</button></div>
            <table className='total-table'>
                <thead>
                    <th>Total : </th>
                </thead>
                <tbody>
                    <tr>
                        <td>JOD {Math.round(total * 100) / 100}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    ) : (
        <div className="reservationBack">
            <h5>You don't have any reservations</h5>
            <Link to="/cinemaservices">
                <button className="backBtn">Back to book</button>
            </Link>
        </div>
    );
};

export default Cart
