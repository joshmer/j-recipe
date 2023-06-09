import { getServerSession } from "next-auth";

import SessionProvider from "./components/SessionProvider";
import { authOptions } from "./api/auth/[...nextauth]/route";
import "./globals.css";
import Login from "./components/Login";

export const metadata = {
  title: "J-Recipe",
  description: "An app that enables you to search for recipes",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? <Login /> : children}
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
