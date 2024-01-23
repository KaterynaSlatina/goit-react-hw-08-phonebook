import { MyHeader, MenuListItem, MenuList } from '../Header/Header.styled';

const Header = () => {
  return (
    <MyHeader>
      <nav>
        <MenuList>
          <li>
            <MenuListItem to="/">Home</MenuListItem>
          </li>
          <li>
            <MenuListItem to="/contacts">Contacts</MenuListItem>
          </li>
          <li>
            <MenuListItem to="/login">Login</MenuListItem>
          </li>
          {/* <li>
            <MenuListItem to="/registration">Registration</MenuListItem>
          </li> */}
        </MenuList>
      </nav>
    </MyHeader>
  );
};

export default Header;
