import MenuItem from './MenuItem';
import Logo from './Logo';
import {
  IconHome,
  IconSettings,
  IconNotification,
  IconLogout,
} from '../icons/index';

export default function LateralMenu() {
  return (
    <aside className={`flex flex-col`}>
      <div
        className={`
        flex flex-col items-center justify-center
      bg-gradient-to-r from-indigo-500 to-purple-800
      h-20 w-20`}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" text="Home" icon={IconHome} />
        <MenuItem url="/settings" text="Settigns" icon={IconSettings} />
        <MenuItem
          url="/notifications"
          text="Notifications"
          icon={IconNotification}
        />
      </ul>
      <ul>
        <MenuItem
          text="Logout"
          icon={IconLogout}
          onClick={() => console.log('Logout')}
          className={`text-red-600 hover:bg-red-400 hover:text-white`}
        />
      </ul>
    </aside>
  );
}
