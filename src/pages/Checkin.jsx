import { Helmet } from 'react-helmet-async'
import CheckinBooking from '../features/check-in-out/CheckinBooking'

const Checkin = () => {
  return (
    <>
      <Helmet>
        <title>The Wild Oasis | Checkin</title>
      </Helmet>
      <CheckinBooking />;
    </>
  )
}

export default Checkin
