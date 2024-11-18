import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between max-container items-center">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
                <a href={navLink.href} className="font-montserrat text-lg leading-normal text-slate-gray transition ease-in-out delay-75 hover:text-black duration-75">{navLink.label}</a>
            </li>
          ))}
        </ul>
        <div>
            <img src={hamburger} alt="hamburger" width={25} height={25} className="hidden max-lg:block"/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
