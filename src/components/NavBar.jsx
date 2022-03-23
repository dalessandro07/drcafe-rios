/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link, useLocation, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const NavBar = ({ url }) => {
    const { pathname } = useLocation();

    const navigation = [
        { name: 'Productos', href: '/productos', current: pathname === '/productos' ? true : false },
        { name: 'Cafés', href: '/productos/cafes', current: pathname === '/productos/cafes' ? true : false },
        { name: 'Chocolates', href: '/productos/chocolates', current: pathname === '/productos/chocolates' ? true : false },
    ];

    return (
        <Disclosure as="nav" className="w-full my-4">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                                        <CartWidget url={url} />
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-red-500 text-white'
                                            : `${
                                                  pathname === '/'
                                                      ? 'text-gray-100 hover:bg-red-100 hover:text-gray-800 px-3 py-2 rounded-md text-md font-semibold'
                                                      : item.current
                                                      ? 'bg-red-100 px-3 py-2 rounded-md text-md font-semibold'
                                                      : 'hover:bg-red-100 hover:text-gray-800 px-3 py-2 rounded-md text-md font-semibold'
                                              }`,
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}>
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default NavBar;
