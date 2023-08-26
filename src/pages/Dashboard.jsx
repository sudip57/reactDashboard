import { Helmet } from 'react-helmet-async'
import DashboardFilter from '../features/dashboard/DashboardFilter'
import DashboardLayout from '../features/dashboard/DashboardLayout'
import Heading from '../ui/Heading'
import Row from '../ui/Row'

function Dashboard() {
  return (
    <>
      <Helmet>
        <title>The Wild Oasis | Dashboard</title>
      </Helmet>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  )
}

export default Dashboard
