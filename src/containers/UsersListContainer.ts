import { connect } from "react-redux";
import { UsersList } from "../components/users/userList/UsersList";
import { getUsersThunk } from "../redux/reducers";
import { RootState } from "../redux/reducers";

const mapStateToProps = (state: RootState) => ({
    users: state.users,
    isFetching: state.isFetching,
});

const mapDispatchToProps = {
    getUsersThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
