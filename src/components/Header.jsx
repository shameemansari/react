import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { useAuth } from "../context/AuthProvider";
import { X, Menu as Bars3Icon } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { authLogout } from "../services/authService";

export default function Header() {
  const { token } = useAuth();

  return (
    <Disclosure
      as="nav"
      className="bg-gray-800 absolute top-0 right-0 left-0 z-[1200]"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <X
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {!token && (
                  <>
                    <NavbarLink to="/" name="Login" />
                    <NavbarLink to="/register" name="Register" />
                  </>
                )}
                {token && (
                  <>
                    <NavbarLink to="/task" name="Task" />
                    <NavbarLink to="/user" name="User" />
                  </>
                )}
              </div>
            </div>
          </div>

          {token && <NavMenu />}
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton
            as="a"
            href="/"
            className={(isActive) =>
              "block rounded-md px-3 py-2 text-base font-medium " +
              (!isActive
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white")
            }
          >
            Login
          </DisclosureButton>

          <DisclosureButton
            as="a"
            href="/register"
            className={(isActive) =>
              "block rounded-md px-3 py-2 text-base font-medium " +
              (!isActive
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white")
            }
          >
            Register
          </DisclosureButton>

          {token && (
            <>
              <DisclosureButton
                as="a"
                href="/task"
                className={(isActive) =>
                  "block rounded-md px-3 py-2 text-base font-medium " +
                  (!isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white")
                }
              >
                Tasks
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/user"
                className={(isActive) =>
                  "block rounded-md px-3 py-2 text-base font-medium " +
                  (!isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white")
                }
              >
                Profile
              </DisclosureButton>
            </>
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export const NavbarLink = ({ to, name }) => {
  return (
    <>
      <NavLink
        to={to}
        className={(isActive) =>
          "rounded-md px-3 py-2 text-sm font-medium " +
          (!isActive
            ? "bg-gray-900 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white")
        }
      >
        {name}
      </NavLink>
    </>
  );
};

export const NavMenu = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const logoutHandler = async () => {
    const response = await authLogout();
    if (response.data?.status) {
      logout();
      navigate("/");
    }
  };

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <Menu as="div" className="relative ml-3">
          <div>
            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-8 rounded-full"
              />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <button
                onClick={logoutHandler}
                className="block px-4 py-2 text-sm text-gray-700 w-full"
              >
                Sign Out
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </>
  );
};
