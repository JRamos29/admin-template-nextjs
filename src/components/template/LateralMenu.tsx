import MenuItem from './MenuItem';
import Logo from './Logo';
import { IconHome, IconSettings, IconNotification } from '../icons/index';

export default function LateralMenu() {
  return (
    <aside>
      <div
        className={`
        flex flex-col items-center justify-center
      bg-gradient-to-r from-indigo-500 to-purple-800
      h-20 w-20`}
      >
        <Logo />
      </div>
      <ul>
        <MenuItem url="/" text="Home" icon={IconHome} />
        <MenuItem url="/settings" text="Settigns" icon={IconSettings} />
        <MenuItem
          url="/notifications"
          text="Notifications"
          icon={IconNotification}
        />
      </ul>
    </aside>
  );
}
