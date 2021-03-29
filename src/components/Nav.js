import { useDispatch, useSelector } from "react-redux";

import { switchLibraryStatus } from "../redux/LibraryStatus/libraryStatus.actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav(reduxProps) {
  const libraryStatus = useSelector((state) => state.libraryStatus.status);
  const dispatch = useDispatch();
  return (
    <nav>
      <h1>Waves {libraryStatus}</h1>

      <button onClick={() => dispatch(switchLibraryStatus(!libraryStatus))}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

export default Nav;
