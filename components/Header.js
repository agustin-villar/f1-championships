import StyledHeader from './Header.styles';

export default function Header() {
  return (
    <StyledHeader>
      <img src="/img/f1_logo.svg" width="80" alt="Formula 1 logo" />
      <div>
        <h1>Formula 1</h1>
        <p>2005 - 2015</p>
      </div>
    </StyledHeader>
  );
}
