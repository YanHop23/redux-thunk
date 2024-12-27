import { connect } from "react-redux";
import { UsersList } from "../components/UsersList";
import { getUsersThunk } from "../redux/reducers";
import { RootState } from "../redux/reducers";

const mapStateToProps = (state: RootState) => ({
  users: state.users,
});

const mapDispatchToProps = {
  getUsersThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
