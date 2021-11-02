import useAppData from '../../data/hook/useAppData';
import SwitchThemeButton from './SwitchThemeButton';
import Title from './Title';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header(props: HeaderProps) {
  const { theme, switchTheme } = useAppData();

  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end`}>
        <SwitchThemeButton theme={theme} switchTheme={switchTheme} />
      </div>
    </div>
  );
}
