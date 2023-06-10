import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrainSeatBooking = () => {
  const [seatData, setSeatData] = useState([]);
  const [numSeats, setNumSeats] = useState(1);

  useEffect(() => {
    const fetchSeatData = async () => {
      try {
        const response = await axios.get('http://localhost:6000/seats');
        setSeatData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSeatData();
  }, []);

  const handleSeatBooking = async () => {
    try {
      const response = await axios.post('http://localhost:5000//api/bookings', { numSeats });
      console.log(response.data.message);
      // Refresh seat data after successful booking
      const updatedResponse = await axios.get('http://localhost:5000//api/coaches');
      setSeatData(updatedResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        Number of seats: <input type="number" value={numSeats} onChange={(e) => setNumSeats(parseInt(e.target.value))} />
        <button onClick={handleSeatBooking}>Book Seats</button>
      </div>
      {seatData.map((coach, coachIndex) => (
        <div key={coachIndex}>
          <h3>Coach {coachIndex + 1}</h3>
          {coach.seats.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.map((seat, seatIndex) => (
                <span
                  key={seatIndex}
                  style={{
                    padding: '4px',
                    margin: '2px',
                    border: '1px solid',
                    backgroundColor: seat.status ? 'red' : 'green',
                  }}
                >
                  {seat.seatNo}
                </span>
              ))}
              <br />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TrainSeatBooking;
