import React, { useState } from "react";
import styles from "../styles/NavHeader.module.css";

const NavHeader = () => {
  const [user, setuser] = useState(null);
  return (
    <div className={styles.navHeader}>
      <div className={styles.navItems}>
        <p>logo</p>
        {user ? <p>logout</p> : null}
      </div>
    </div>
  );
};

export default NavHeader;
