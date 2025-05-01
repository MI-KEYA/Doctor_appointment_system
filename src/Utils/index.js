export const getBookings=()=>{
    const bookings = localStorage.getItem('bookings')
    if(bookings){
        return JSON.parse(bookings)
    }else{
        return [];
    }
}
export const addBooking = doctor=>{
    const bookings = getBookings()
    const isExist = bookings.find(d=> d.registration_number === doctor.registration_number)
    if(isExist) return alert('Doctor already Booked');
    bookings.push(doctor)

    localStorage.setItem('bookings', JSON.stringify(bookings))
}

export const removeBooking = reg =>{
    const bookings = getBookings()
    const remainingBookings = bookings.filter(doctor=>doctor.registration_number !== reg)
    localStorage.setItem('bookings', JSON.stringify(remainingBookings))
}