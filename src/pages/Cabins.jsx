import CabinTable from '../features/cabins/CabinTable'
import Heading from '../ui/Heading'
import Row from '../ui/Row'
import AddCabin from '../features/cabins/AddCabin'
import CabinTableOperations from '../features/cabins/CabinTableOperations'
import { Helmet } from 'react-helmet-async'

const Cabins = () => {
  return (
    <>
      <Helmet>
        <title>The Wild Oasis | Cabins</title>
      </Helmet>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  )
}

export default Cabins
