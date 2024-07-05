import styled from "styled-components";

const NavBar = styled.nav`
  background-color: white;
  display: flex;
  margin-bottom: 8.4rem;
`;

const Logo = styled.img`
  padding: 1.6rem 3.36rem 1.7rem 2rem;
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding-right: 4.63rem;
`;
const Search = styled.input`
  margin: 2.4rem 6rem;
  padding: 1.3rem 7.5rem 1.1rem 5.3rem;
  font-size: 1.4rem;
  border: 1px solid #cdcfd4;
  border-radius: 0.7rem;
  color: #4f5867;
  background: transparent url("/Shape.svg") no-repeat 2.1rem center;
`;
const Profile = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: center;
`;
const PictureName = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
function Nav() {
  return (
    <NavBar>
      <Logo src="/Group 1000004245.svg" alt="Logo" />
      <Right>
        <Search type="search" placeholder="Search by patients..." />
        <Profile>
          <img src="/Group 1000004246.svg" alt="notification icon" />
          <PictureName>
            <img src="Mask group.svg" alt="profile picture" />
            <span>Deko</span>
          </PictureName>
          <img src="Vector.svg" alt="arrow down icon" />
        </Profile>
      </Right>
    </NavBar>
  );
}

export default Nav;
