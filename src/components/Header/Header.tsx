import React, {useState} from 'react';
import {getCurrentTheme, loadTheme} from 'utils/getCurrentTheme';
import {Dialog, DialogPanel} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import {MoonIcon, SunIcon} from '@heroicons/react/20/solid';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<string>(getCurrentTheme());
  const toggleDarkMode = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    loadTheme(newTheme);
  };
  return (
    <header className="relative isolate z-10 bg-[color:var(--title)] w-full">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 items-center gap-3 text-[color:var(--background)]">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
          Ready To Read
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[color:var(--text-subtitle)]">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="/"
            className="text-sm font-semibold leading-6 text-[color:var(--background)]">
            Trending
          </a>
          <a
            href="/"
            className="text-sm font-semibold leading-6 text-[color:var(--background)]">
            Most viewed
          </a>
          <a
            href="/"
            className="text-sm font-semibold leading-6 text-[color:var(--background)]">
            Marketplace
          </a>
          <a
            href="/"
            className="text-sm font-semibold leading-6 text-[color:var(--background)]">
            Company
          </a>
        </div>
        <button
          onClick={toggleDarkMode}
          className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/"
            className="text-sm font-semibold leading-6 text-[color:var(--background)]">
            <div className="flex flex-wrap items-center gap-3 relative flex-1 grow rounded-[8px] text-left">
              <div className="inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[var(--spacing-radius-8)] ">
                {theme === 'dark' ? (
                  <MoonIcon className="!relative !w-[24px] !h-[24px] text-[color:var(--themes-black-100)]" />
                ) : (
                  <SunIcon className="!relative !w-[24px] !h-[24px] text-[color:var(--themes-black-100)]" />
                )}
              </div>
              <span className="!flex-1  !grow">
                {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </span>
            </div>
          </a>
        </button>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[color:var(--title)] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[color:var(--background)]/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-[color:var(--text-subtitle)]">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[color:var(--background)] hover:bg-gray-50">
                  Trending
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[color:var(--background)] hover:bg-gray-50">
                  Most viewed
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[color:var(--background)] hover:bg-gray-50">
                  Marketplace
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[color:var(--background)] hover:bg-gray-50">
                  Company
                </a>
              </div>
              <div className="py-6">
                <button
                  onClick={toggleDarkMode}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[color:var(--background)] hover:bg-gray-50">
                  <a
                    href="/"
                    className="text-sm font-semibold leading-6 text-[color:var(--background)]">
                    <div className="flex flex-wrap items-center gap-[var(--spacing-12)] relative flex-1 grow rounded-[8px] text-left">
                      <div className="inline-flex items-center justify-center relative flex-[0_0_auto] rounded-[var(--spacing-radius-8)]">
                        {theme === 'dark' ? (
                          <SunIcon className="!relative !w-[24px] !h-[24px] text-[color:var(--themes-black-100)]" />
                        ) : (
                          <MoonIcon className="!relative !w-[24px] !h-[24px] text-[color:var(--themes-black-100)]" />
                        )}
                      </div>
                      <span className="!flex-1  !grow">
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                      </span>
                    </div>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
export default Header;
