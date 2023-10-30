



import { NavLink, useLocation } from "react-router-dom";




export default function Navigation() {

const location = useLocation();
const allowedPaths = ["/front", "/findfilm"];
const shouldShowNavigation = allowedPaths.includes(location.pathname);

  if (!shouldShowNavigation) {
    return null;
  }

    return (
        <nav>
            
            
        </nav>

    )

}