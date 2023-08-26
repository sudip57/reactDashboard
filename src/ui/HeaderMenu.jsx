import { styled } from 'styled-components';
import ButtonIocn from './ButtonIcon';
import { HiOutlineUser } from 'react-icons/hi2';
import Logout from '../features/authentication/Logout';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIocn onClick={() => navigate('/account')}>
          <HiOutlineUser />
        </ButtonIocn>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
