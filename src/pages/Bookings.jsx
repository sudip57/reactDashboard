import Heading from '../ui/Heading'
import Row from '../ui/Row'
import BookingTable from '../features/bookings/BookingTable'
import BookingTableOperations from '../features/bookings/BookingTableOperations'
import { Helmet } from 'react-helmet-async'

function Bookings() {
  return (
    <>
      <Helmet>
        <title>The Wild Oasis | Bookings</title>
      </Helmet>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>
      <BookingTable />
    </>
  )
}

export default Bookings
