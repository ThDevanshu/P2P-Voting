import {
  HomeIcon,
  PlusCircleIcon,
  ChartBarIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import HeaderItem from "./HeaderItem";

export default function Header() {
  let loggedIn;
  if (typeof window !== "undefined") {
    loggedIn = window.localStorage.getItem(process.env.NEXT_PUBLIC_LOGIN_KEY);
  }
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto 3xl:m-12">
      <div className="flex flex-grow justify-evenly max-w-md 3xl:max-w-3xl order-2 sm:order-1">
        <Link href="/">
          <a>
            <HeaderItem Icon={HomeIcon} title={"Home"} />
          </a>
        </Link>
        <Link href="/new">
          <a>
            <HeaderItem Icon={PlusCircleIcon} title={"New"} />
          </a>
        </Link>
        <Link href="/leaderboards">
          <a>
            <HeaderItem Icon={ChartBarIcon} title={"Leaderboards"} />
          </a>
        </Link>

        <Link href={loggedIn ? "/admin" : "/admin/login"}>
          <a>
            <HeaderItem Icon={UserIcon} title={"Admin"} />
          </a>
        </Link>
      </div>
      <div className="order-1 sm:order-2 hover:animate-spin">
        <Image src="/logo.svg" height={50} width={50} />
      </div>
    </header>
  );
}
