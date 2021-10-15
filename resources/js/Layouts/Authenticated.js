import React from 'react';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import Breadcrumbs from '@/Components/Breadcrumbs';
import FlashMessage from '@/Components/FlashMessage';

export default function Authenticated({ breadcrumbs, children }) {
    const { auth } = usePage().props

    return (
        <>
        <Head title="Dashboard"/>
        <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
            <div className="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
                <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
                    <Link
                        href={route('index')}
                        className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                    >
                        inertiajs
                    </Link>
                    {/* x button */}
                </div>

                <nav className="flex-grow px-4 pb-4 md:pb-0 md:overflow-y-auto">
                    <ul className="menu py-3 bg-base-100 rounded">
                        <li>
                            <Link href={route('dashboard')}>Dashboard</Link>
                        </li>
                        <li className="menu-title">
                            <span>Title</span>
                        </li>
                        <li>
                            <Link href={route('contacts.index')}>Contacts</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* content */}
            <div className="w-full bg-gray-100 p-8">
                <div className="flex justify-between">
                    <Breadcrumbs menus={breadcrumbs} />

                    <div className="dropdown dropdown-end">
                        {/* avatar user */}
                        <div tabIndex="0" className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-11 h-11">
                                <span className="text-base">
                                    {auth.user.name
                                        .split(' ', 2)
                                        .map((i) => i[0])
                                        .join('')}
                                </span>
                            </div>
                        </div>
                        <ul
                            tabIndex="0"
                            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a href="#">{auth.user.name}</a>
                            </li>
                            <li>
                                <Link
                                    className="btn btn-ghost"
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <FlashMessage />
                {children}
            </div>
        </div>
        </>
    )
}
