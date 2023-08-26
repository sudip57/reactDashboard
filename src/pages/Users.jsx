import { Helmet } from 'react-helmet-async'
import SignupForm from '../features/authentication/SignupForm'
import Heading from '../ui/Heading'

function NewUsers() {
  return (
    <>
      <Helmet>
        <title>The Wild Oasis | Users</title>
      </Helmet>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  )
}

export default NewUsers
