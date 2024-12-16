import React from "react";
import "./Header.css";
import Netflixlogo from "../../assets/image/Netflix-logo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
function Header() {
  return (
    <div class="header_outer_container">
      <div class="header_container">
        <div className="header_left">
          <ul>
            <li><img src={Netflixlogo} width="100"/></li>
            <li>Netflix</li>
            <li>Home</li>
            <li>Tvshow</li>
            <li>Movies</li>
            <li>Leatest</li>
            <li>Myliste</li>
            <li>Browser by languge</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li><SearchIcon/></li>
            <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownCircleIcon/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
