import { Helmet } from 'react-helmet-async'
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm'
import Heading from '../ui/Heading'
import Row from '../ui/Row'

function Settings() {
  return (
    <>
      <Helmet>
        <title>The Wild Oasis | Settings</title>
      </Helmet>
      <Row>
        <Heading as="h1">Update hotel settings</Heading>
        <UpdateSettingsForm />
      </Row>
    </>
  )
}

export default Settings
