import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const navItems = [
    { href: "/framework", label: "Framework Conceitual" },
    { href: "/modulos", label: "Módulos de Treinamento" },
    { href: "/funcionalidades", label: "Funcionalidades Adicionais" },
    { href: "/trilha", label: "Trilha de Capacitação" },
  ];

  return (
    <nav className="amar-header sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold mb-2 md:mb-0 flex items-center">
          <span className="text-accent mr-2">Amar</span>
          <span className="text-white">Assist Agent</span>
        </Link>
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-white hover:text-accent px-2 py-1 rounded transition-colors duration-200">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
