import Heading from '../ui/Heading'
import Row from '../ui/Row'
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm'
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm'
import { Helmet } from 'react-helmet-async'

function Account() {
  return (
    <>
      <Helmet>
        <title>The Wild Oasis | Account</title>
      </Helmet>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  )
}

export default Account
