import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/ACTIONS/user.actions";
import { redirect } from "next/navigation"; // Update the import
import Image from "next/image";

export default async function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) {
    redirect("/sign-in"); // This should work now
  }

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout flex items-center p-4">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="menu icon"
          />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
