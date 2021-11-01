import MenuItem from './MenuItem';
import { IconHome, IconSettings, IconNotification } from '../icons/index';

export default function LateralMenu() {
  return (
    <aside>
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
