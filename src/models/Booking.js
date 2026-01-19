const db = require('../config/db')

const createBooking = async (eventId, spaceId, UserId, quantity, totalPrice, paymentStatus) => {
  const result = await db.query(
    `INSERT INTO bookings (event_id, space_id, user_id, quantity, total_price, payment_status) 
     VALUES ($1, $2, $3, $4, $5, $6) 
     RETURNING *`,
    [eventId, spaceId, userId, quantity, totalPrice, paymentStatus],
  )
  return result.rows[0]
}
