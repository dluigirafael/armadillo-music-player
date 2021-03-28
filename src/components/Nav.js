import { connect } from "react-redux";

import { switchLibraryStatus } from "../redux/LibraryStatus/libraryStatus.actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav(reduxProps) {
  return (
    <nav>
      <h1>Waves {reduxProps.libraryStatus}</h1>

      <button
        onClick={() =>
          reduxProps.switchLibraryStatus(!reduxProps.libraryStatus)
        }
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    libraryStatus: state.libraryStatus.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchLibraryStatus: (status) => dispatch(switchLibraryStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
