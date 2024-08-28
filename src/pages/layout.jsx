/* eslint-disable no-unused-vars */
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  // ArrowRightIcon,
  // PlusIcon,
} from "@heroicons/react/20/solid";
import { Divider, Button } from "@tremor/react";
import { Outlet } from "react-router";

import { useAuth } from "@/hooks/useAuth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout() {
  return (
    <>
      <header className="bg-stone-900">
        <nav aria-label="Global" className="max-w-7xl p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <span className="sr-only">Lance Rural</span>
            <img
              alt="Lance Rural"
              src="https://cavalocrioulo.org.br/assets/img/logo_branco.png"
              className="h-8 sm:h-10 mx-auto w-auto drop-shadow-xl"
            />
          </div>
        </nav>
      </header>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Divider className="opacity-60" />
    </>
  );
}
