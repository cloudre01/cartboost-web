interface NavLinkProps {
  href: string;
  title: string;
}
export default function NavLink({ href, title }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-white hover:text-blue-600 px-4 py-2 font-bold transition duration-200 align-top text-left mr-auto ml-auto no-underline inline-block relative"
    >
      {title}
    </a>
  );
}
