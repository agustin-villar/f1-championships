import StyledFooter from './Footer.styles';
import Logo from './Logo';

export default function Footer() {
  return (
    <StyledFooter>
      <button type="button" onClick={() => global.scrollTo(0, 0)}>
        <Logo color="#c1c1c1" />
      </button>
    </StyledFooter>
  );
}
