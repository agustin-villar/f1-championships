import StyledHeader from './Header.styles';
import Logo from './Logo';

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <div>
        <h1>Formula 1</h1>
        <p>2005 - 2015</p>
      </div>
    </StyledHeader>
  );
}
