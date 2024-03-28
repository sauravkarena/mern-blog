import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook,BsInstagram,BsTwitter } from "react-icons/bs"
export default function FooterCom() {
  return (
    <Footer
      container
      className="w-full p-6 bg-white border border-t-8 border-teal-500 rounded-lg shadow dark:bg-gray-800 md:flex md:items-center md:justify-between"
    >
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid justify-between w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mb-5">
            <Link
              to="/"
              className="self-center text-lg font-semibold whitespace-nowrap sm:text-xl dark:text-white"
            >
              <span className="px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Saurav's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup className="flex flex-col flex-wrap space-y-4 text-sm text-gray-500 dark:text-white">
                <Footer.Link
                  href="https://www.briskbraintech.com/"
                  target="_blank"
                >
                  Briskbraintech
                </Footer.Link>
                <Footer.Link href="/about">About</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="FOLLOW US" />
              <Footer.LinkGroup className="flex flex-col flex-wrap space-y-4 text-sm text-gray-500 dark:text-white">
                <Footer.Link
                  href="https://www.briskbraintech.com/"
                  target="_blank"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="/about">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="LEGAL" />
              <Footer.LinkGroup className="flex flex-col flex-wrap space-y-4 text-sm text-gray-500 dark:text-white">
                <Footer.Link
                  href="https://www.briskbraintech.com/"
                  target="_blank"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="/about">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Saurav's Blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 mt-4 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-gray-500 hover:text-black dark:hover:text-white" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-gray-500 hover:text-black dark:hover:text-white" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-gray-500 hover:text-black dark:hover:text-white" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
