import Link from 'next/link';

interface MenuItemProps {
  text: string;
  icon: any;
  url?: string;
  className?: string;
  onClick?: (e: any) => void;
}

export default function MenuItem(props: MenuItemProps) {
  function renderLink() {
    return (
      <a
        className={`flex flex-col justify-center items-center h-20 w-20 text-gray-600 ${props.className}`}
      >
        {props.icon}
        <span className={`text-xs font-light`}>{props.text}</span>
      </a>
    );
  }

  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer`}>
      {props.url ? <Link href={props.url}>{renderLink()}</Link> : renderLink()}
    </li>
  );
}
