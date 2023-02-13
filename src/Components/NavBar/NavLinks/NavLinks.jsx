import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks({LinkName,LinkPath}) {
  return (
    <li className="nav-item">
      <Link className="nav-link js-scroll-trigger" to={LinkPath}>
        {LinkName}
      </Link>
    </li>
  );
}

export default NavLinks