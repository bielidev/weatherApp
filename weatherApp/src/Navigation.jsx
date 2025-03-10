import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <section id="navbar" className="p-2 shadow-sm flex justify-between">
      <nav role="navigation">
        <ul className="flex gap-2">
          <NavLink
            className={({ isActive }) =>
              buttonVariants({ variant: `${isActive ? "default" : "outline"}` })
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              buttonVariants({ variant: `${isActive ? "default" : "outline"}` })
            }
            to="/weather"
          >
            Weather
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              buttonVariants({ variant: `${isActive ? "default" : "outline"}` })
            }
            to="/map"
          >
            Map
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              buttonVariants({ variant: `${isActive ? "default" : "outline"}` })
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              buttonVariants({ variant: `${isActive ? "default" : "outline"}` })
            }
            to="/favorites"
          >
            Favorites
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              buttonVariants({ variant: `${isActive ? "default" : "outline"}` })
            }
            to="/compare"
          >
            Compare
          </NavLink>
        </ul>
      </nav>
      <ModeToggle />
    </section>
  );
}
