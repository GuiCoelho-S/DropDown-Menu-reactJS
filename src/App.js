
import NavBar from './components/NavBar';
import NavItem from './components/NavBar/NavItem';

import { ReactComponent as BellIcon } from './icons/bell_icon.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger_icon.svg';
import { ReactComponent as PlusIcon } from './icons/plus_icon.svg';
import { ReactComponent as CaretIcon } from './icons/caret-down_icon.svg';
import DropDownMenu from './components/NavBar/NavItem/Dropdown';

function App() {



  return (
    <NavBar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      
      <NavItem icon={<CaretIcon />}>

        <DropDownMenu />

      </NavItem>
    </NavBar>
  );
}

export default App;
