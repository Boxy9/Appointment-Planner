import React, { useState, useEffect } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  addAppointment,
  contacts
}) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [overlap, setOverlap] = useState(false);

  useEffect(() => {
    const found = appointments.find((appointment) => appointment.date === date && appointment.time === time);
    if (found !== undefined) {
      setOverlap(true);
    }
    else {
      setOverlap(false);
    };
  }, [date, time, appointments, overlap]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!overlap) {
      addAppointment(name, contact, date, time);
      setName("");
      setContact("");
      setDate("");
      setTime("");
    };
  };

  return (
    <>
      <section>
        <h2>Add Appointment
          {overlap ? " - Appointment overlaps" : ""}
        </h2>
        <AppointmentForm
          contacts={contacts}
          name={name}
          setTitle={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </>
  );
};
