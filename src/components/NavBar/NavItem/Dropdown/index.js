import { ReactComponent as CogIcon } from "../../../../icons/cog_icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../../../icons/arrow-right_icon.svg";

/*
Icons from material-ui/icons
*/
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import '../../style.css'

import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";
import SecurityIcon from "@material-ui/icons/Security";
import FaceIcon from "@material-ui/icons/Face";
import InfoIcon from "@material-ui/icons/Info";
import BackupIcon from "@material-ui/icons/Backup";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import LocationOnIcon from "@material-ui/icons/LocationOn";


import { useState } from "react";

import { CSSTransition } from "react-transition-group";

export default function DropDownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el){
    const height = el.offsetHeight;
    setMenuHeight(height);
  }



  function DropDownItem(props) {
    return (
      <button
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-left ">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </button>
    );
  }

  return (
    <div className="dropdown" style={{ hieght: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeOut={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem leftIcon={<FaceIcon />}>My Profile</DropDownItem>
          <DropDownItem
            leftIcon={<CogIcon />}
            rightIcon={<ArrowRightIcon />}
            goToMenu="settings"
          >
            Settings
          </DropDownItem>
          <DropDownItem
            leftIcon={<InfoIcon />}
            rightIcon={<ArrowRightIcon />}
            goToMenu="others"
          >
            Info
          </DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeOut={500}
        classNames="menu-secundary"
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowBackIcon />}
            goToMenu="main"
          ></DropDownItem>
          <DropDownItem leftIcon={<AccountCircleIcon />}>
            My account
          </DropDownItem>
          <DropDownItem leftIcon={<NotificationsOffIcon />}>
            Notifications
          </DropDownItem>
          <DropDownItem leftIcon={<SecurityIcon />}>Privacy</DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "others"}
        unmountOnExit
        timeOut={500}
        className="menu-secundary"
      >
        <div className="menu">
          <DropDownItem
            leftIcon={<ArrowBackIcon />}
            goToMenu="main"
          ></DropDownItem>
          <DropDownItem leftIcon={<LocationOnIcon />}>Location</DropDownItem>
          <DropDownItem leftIcon={<AccessibilityNewIcon />}>
            Acessibility
          </DropDownItem>
          <DropDownItem leftIcon={<BackupIcon />}>BackUp</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
