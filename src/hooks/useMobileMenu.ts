import { useContext } from "react";
import { MobileMenuContext } from "../contexts/MobileMenuContext";

const useMobileMenu = () => useContext(MobileMenuContext);

export default useMobileMenu;
