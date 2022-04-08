import { Disclosure, Menu } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, useLocation, NavLink } from 'react-router-dom';
import CartWidget from '../Cart/CartWidget';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
    const { pathname } = useLocation();

    const navigation = [
        { name: 'Productos', href: '/productos', current: pathname === '/productos' ? true : false },
        { name: 'Cafés', href: '/productos/cafes', current: pathname === '/productos/cafes' ? true : false },
        { name: 'Chocolates', href: '/productos/chocolates', current: pathname === '/productos/chocolates' ? true : false },
        {
            name: 'Buscar orden',
            href: '/buscar-orden',
            current: pathname === '/buscar-orden' ? true : false,
        },
    ];

    return (
        <header className={`${pathname !== '/' ? '' : 'absolute inset-x-0 mt-6'} flex-wrap sm:flex-nowrap flex items-center justify-between`}>
            <Disclosure as="nav" className="w-full my-4">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-red-300 focus:outline-none">
                                        <span className="sr-only">Abrir menu</span>
                                        {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className={`${pathname === '/' ? 'text-white' : 'text-[#4a3933]'} block h-6 w-6`} aria-hidden="true" />}
                                    </Disclosure.Button>
                                </div>

                                <div className="flex-1 flex items-center justify-center sm:justify-start">
                                    <div className="flex items-center">
                                        <Link to="/">
                                            <img className={`${pathname !== '/' ? 'mt-4 mx-4 w-20' : 'text-gray-100'} w-28`} src={pathname !== '/' ? '/assets/images/logo-1-bg.png' : '/assets/images/logo-white.png'} alt="logo" />
                                        </Link>
                                    </div>

                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4">
                                            {navigation.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.href}
                                                    className={`${
                                                        pathname === '/'
                                                            ? 'text-gray-100 hover:bg-red-100 hover:text-gray-800 px-3 py-2 rounded-md text-md font-semibold'
                                                            : item.current
                                                            ? 'bg-red-100 px-3 py-2 rounded-md text-md font-semibold'
                                                            : 'hover:bg-red-100 hover:text-gray-800 px-3 py-2 rounded-md text-md font-semibold'
                                                    }`}>
                                                    {item.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <CartWidget url={pathname} />
                                        </div>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className={pathname === '/' ? 'bg-white sm:hidden opacity-80' : 'sm:hidden opacity-80'}>
                            <div className={window.innerHeight > 500 ? 'px-2 pt-3.5 mt-6 pb-3 space-y-1' : 'px-2 pb-3 space-y-1'}>
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        className={classNames(
                                            item.current
                                                ? 'bg-red-500 text-white'
                                                : `${
                                                      pathname === '/'
                                                          ? 'text-gray-800 border-b-2 border-red-200 hover:bg-red-100 hover:text-red-800 px-3 py-2 rounded-md text-md font-semibold'
                                                          : item.current
                                                          ? 'bg-red-100 px-3 py-2 rounded-md text-md font-semibold'
                                                          : 'hover:bg-red-100 hover:text-red-800 px-3 py-2 rounded-md text-md font-semibold'
                                                  }`,
                                            'block px-3 py-2 rounded-md text-base font-medium w-full focus:border-none'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}>
                                        <Link className="" to={item.href}>
                                            {item.name}
                                        </Link>
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </header>
    );
};

export default NavBar;
