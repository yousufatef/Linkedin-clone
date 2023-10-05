// import { useEffect } from "react";
// import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const RequireAuth = ({ user, children }) => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!user) {
//       navigate("/", { replace: true });
//       return;
//     }
//   }, [user]);
//   return children;
// };
// const mapStateToProps = (state) => {
//   return {
//     user: state.userState.user,
//   };
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export default connect(mapStateToProps)(RequireAuth);
