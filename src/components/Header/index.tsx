import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logoIgnite from "../../assets/logo.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer" end>
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
