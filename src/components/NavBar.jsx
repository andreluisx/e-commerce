import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faSackDollar, faStar, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

export default function NavBar() {
  const location = useLocation();
  const hiddenRoutes = ["/address", "/payment", "/finalizing"];

  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  }

  const [openCollapse, setOpenCollapse] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenCollapse(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapse = () => setOpenCollapse((prev) => !prev);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="flex items-center gap-x-2 p-1 font-medium text-gray-300">
        <FontAwesomeIcon icon={faBoxOpen} className="w-5 h-5 text-gray-300" />
        <Link to="/" className="flex items-center text-gray-300 hover:text-gray-100">
          Produtos
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="flex items-center gap-x-2 p-1 font-medium text-gray-300">
        <FontAwesomeIcon icon={faSackDollar} className="w-5 h-5 text-gray-300" />
        <a href="#" className="flex items-center text-gray-300 hover:text-gray-100">
          Vender
        </a>
      </Typography>
      <Typography as="li" variant="small" className="flex items-center gap-x-2 p-1 font-medium text-gray-300">
        <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-gray-300" />
        <a href="#" className="flex items-center text-gray-300 hover:text-gray-100">
          Premium
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50 mx-auto w-full px-4 py-2 lg:px-8 lg:py-4 bg-slate-950 border-none">
      <div className="container mx-auto flex items-center justify-between">
        <Typography as="a" href="/" className="mr-4 cursor-pointer py-1.5 pr-9 font-medium text-gray-300">
          Clenus Store
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block text-white">
            <span>Log In</span>
          </Button>
          <Button variant="gradient" size="sm" className="hidden lg:inline-block bg-white text-slate-700 rounded-md">
            <span>Sign in</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-gray-300 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={toggleCollapse}
        >
          {openCollapse ? (
            <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={openCollapse} className="lg:hidden">
        <div className="container mx-auto bg-slate-950">
          {navList}
          <div className="flex flex-col items-center gap-2 mt-4">
            <Link to="/login" className="w-full">
              <Button fullWidth variant="text" size="sm" className="text-white hover:text-gray-100">
                <span>Log In</span>
              </Button>
            </Link>
            <Link to="/login" className="w-full">
              <Button fullWidth variant="filled" size="sm" className="rounded-md bg-white text-gray-700 hover:bg-gray-200">
                <span>Sign in</span>
              </Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
