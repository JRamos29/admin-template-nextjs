import useAuth from '../../data/hook/useAuth';
import MenuItem from './MenuItem';
import Logo from './Logo';
import {
  IconHome,
  IconSettings,
  IconNotification,
  IconLogout,
} from '../icons/index';

export default function LateralMenu() {
  const { logout } = useAuth();

  return (
    <aside
      className={`
    flex flex-col
   bg-gray-200 text-gray-700
    dark:bg-gray-900
    `}
    >
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
          onClick={logout}
          className={`
          text-red-600 dark:text-red-400
          hover:bg-red-400 hover:text-white
          dark:hover:text-white`}
        />
      </ul>
    </aside>
  );
}
