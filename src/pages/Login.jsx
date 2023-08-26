import styled from 'styled-components'
import LoginForm from '../features/authentication/LoginForm'
import Heading from '../ui/Heading'
import Logo from '../ui/Logo'
import { Helmet } from 'react-helmet-async'
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`

function Login() {
  return (
    <>
      <Helmet>
        <title>The Wild Oasis | Login</title>
      </Helmet>
      <LoginLayout>
        <Logo />
        <Heading as="h4">Log in to your account</Heading>
        <LoginForm />
      </LoginLayout>
    </>
  )
}

export default Login
