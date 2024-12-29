import { connect } from "react-redux";
import { PostList } from "../components/posts/postList/PostList";
import { getPostsThunk, RootState, setCurentPostsThunk } from "../redux/reducers";

const mapStateToProps = (state: RootState) => ({
    posts: state.posts.curentPosts,
    isFetching: state.isFetching,
    mountPages: Math.round(state.posts.allposts.length / 10),
    postPage: state.posts.postPage,
});
export default connect(mapStateToProps, { getPostsThunk, setCurentPostsThunk })(PostList);
