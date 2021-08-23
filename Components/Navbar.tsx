import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/outline";
import { Avatar } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const Navbar = () => {
  return (
    <nav className="w-screen z-10 h-40 bg-white flex flex-col-reverse justify-around items-center shadow-md fixed top-0 md:h-24 md:flex-row">
      <div className="flex justify-center items-center  flex-1">
        <div className="flex-1 flex justify-around items-center">
          <Link href="/about">
            <p className="mx-2 cursor-pointer hover:text-blue-500 transition text-md">
              Buy
            </p>
          </Link>
          <Link href="/about">
            <p className="mx-2 cursor-pointer hover:text-blue-500 transition text-md">
              Rent
            </p>
          </Link>
          <Link href="/about">
            <p className="mx-2 cursor-pointer hover:text-blue-500 transition text-md">
              Find Agents
            </p>
          </Link>
          <Link href="help">
            <p className="mx-2 cursor-pointer hover:text-blue-500 transition text-md">
              Help
            </p>
          </Link>
        </div>
      </div>

      {/* <form className="flex justify-center items-center flex-1">
        <input
          placeholder="Enter Keywords"
          className="h-10 px-2 text-gray-700 border border-gray-300 outline-none rounded-l w-full sm:w-3/5"
          type="text"
          name=""
          id=""
        />
        <SearchIcon className="text-white  bg-gray-800 h-10 w-12 py-2 mr-3 rounded-r cursor-pointer" />
      </form> */}
      <div className="flex-1 flex justify-center items-center">
        <Link href="/">
          <p className="text-gray-700 text-3xl text-center font-bold text-blue-500  px-1 cursor-pointer">
            Delala
          </p>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-around">
        <div className="divide-x divide-gray-400 flex items-center justify-around w-2/5">
          <Link href="/login">
            <p className="mx-2 cursor-pointer hover:text-blue-500 transition text-md">
              Login
            </p>
          </Link>
          <Link href="/register">
            <p className="mx-2 cursor-pointer hover:text-blue-500 transition text-md pl-3">
              Register
            </p>
          </Link>

          {/* {true && (
          <Link href="/cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        )} */}
        </div>
        <div className="flex justify-center items-center">
          <Link href="help">
            <p className="mx-2 cursor-pointer hover:text-blue-500 transition text-md">
              Manage Rental
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
