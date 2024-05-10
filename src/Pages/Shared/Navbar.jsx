import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  return (
    <div className="navbar bg-base-100 shadow-sm   mx-auto">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img className="w-auto h-7" src="" alt="" />
          <span className="font-bold">Bengali Delights</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allFood">All Food</Link>
          </li>

          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/myAddedFood" className="justify-between">
                  My Added Food
                </Link>
              </li>
              <li>
                <Link to="/addFood">Add a Food</Link>
              </li>
              <li>
                <Link to="/myOrderedFood">My Ordered Food</Link>
              </li>

              <li className="mt-2">
                <button
                  onClick={handleLogOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
// <div className="navbar bg-base-100 mt-6 mb-6">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16"
//           />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//       >
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         {user && (
//           <li>
//             <Link to="/allFood">All Food</Link>
//           </li>
//         )}
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/register">Register</Link>
//         </li>
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">Bengali Delights</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       {user && (
//         <li>
//           <Link to="/allFood">All Food</Link>
//         </li>
//       )}
//       <li>
//         <Link to="/login">Login</Link>
//       </li>
//       <li>
//         <Link to="/register">Register</Link>
//       </li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     {user ? (
//       <>
//         <img
//           title={user?.displayName}
//           src={user?.photoURL}
//           alt="img"
//           className="w-10 mx-2 hidden lg:block h-10 rounded-full object-cover"
//         />
//         <button className="btn btn-sm text-xl" onClick={handleLogOut}>
//           logOut
//         </button>
//       </>
//     ) : (
//       <Link to="/login" className="btn text-xl text-green-700 btn-sm">
//         Login
//       </Link>
//     )}
//   </div>
// </div>
//
//
//
