import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    // <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
    //   <div className="container p-12 flex justify-between">
    //   <img className="rounded-full w-16 h-16" src="/images/hero.png" alt="hero image" />
    //     <p className="text-slate-600">All rights reserved.</p>
    //   </div>
    // </footer>

    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
  <div
    class="relative mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-4 lg:pt-10"
  >
    <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
      <Link
        class="inline-block rounded-full bg-primary-500 p-2 text-white shadow transition hover:bg-primary-600 sm:p-3 lg:p-4"
        href={"/"}
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </Link>
    </div>

    <div class="sm:flex lg:items-end lg:justify-between">
      <div>
        <div class="flex justify-center text-primary-600 lg:justify-start">
        <img className="rounded-full w-16 h-16" src="/images/hero.png" alt="hero image" />
        <p class="mt-6">Thank for Visit</p>
        </div>

        <p
          class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
        >
          Thanks for checking out my website! I appreciate your visit. If you have any questions or need more info, just let me know. Hope to see you back soon!
        </p>
      </div>

      <ul
        class="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-6"
      >
        <li>
          <Link class="text-gray-700 transition hover:text-gray-700/75" href="/#about">
            About
          </Link>
        </li>

        <li>
          <Link class="text-gray-700 transition hover:text-gray-700/75" href="/#projects">
          Projects
          </Link>
        </li>

        <li>
          <Link class="text-gray-700 transition hover:text-gray-700/75" href="/#contact">
            Contact
          </Link>
        </li>

      </ul>
    </div>

    <p class="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Copyright &copy; 2023. All rights reserved.
    </p>
  </div>
</footer>
  );
};

export default Footer;


