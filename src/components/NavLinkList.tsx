interface NavLinkListProps {
  href: string;
  title: string;
}

export default function NavLinkList({ href, title }: NavLinkListProps) {
  return (
    <a
      href={href}
      className="text-black hover:text-blue-600 mb-4 px-4 py-2 font-semibold transition duration-200 align-top text-left mr-auto ml-auto no-underline block relative"
    >
      {title}
    </a>
  );
}
