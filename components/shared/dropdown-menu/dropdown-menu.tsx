'use client';
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import React, { Fragment, ReactElement } from 'react';
import DropdownMenuGroup from './dropdown-menu-group';
import DropdownMenuItem from './dropdown-menu-item';
import DropdownMenuList from './dropdown-menu-list';

interface DropdownMenuProps {
    items: ReactElement<typeof DropdownMenuList> | ReactElement<typeof DropdownMenuGroup> | ReactElement<typeof DropdownMenuItem>[];
    className?: string;
    innerClassName?: string;
    children: React.ReactNode[] | React.ReactNode;
}

const DropdownMenu = ({ items, className, innerClassName, children }: DropdownMenuProps) => {
    return (
        <HeadlessMenu as='div' className={`${className} relative inline-block text-left`}>
            <HeadlessMenu.Button className={`${innerClassName} flex flex-row items-center gap-2 cursor-pointer select-none z-10`}>
                {children}
            </HeadlessMenu.Button>
            <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
            >
                <HeadlessMenu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
                    {items}
                </HeadlessMenu.Items>
            </Transition>
        </HeadlessMenu>
    );
};

export default DropdownMenu;
