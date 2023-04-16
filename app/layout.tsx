import Link from "next/link";

import Title from "@/components/website/title";
import Frens from "@/components/website/frens";

import "@/components/website/win98.css";
import "./globals.css"; 
import Providers from "@/components/redux/provider";
import Session from "@/components/website/session";
import Views from "@/components/website/views";
import Loading from "@/components/website/loading";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <Session/>
      </head>

      <body>
          <Providers>
            <Title/>
          </Providers>

          <div className="container">
            <div className="containerLhs">
              <nav className="win98-window navigation">
                <div className="title"><p>Navigation</p></div>
                  <ul>
                    <li><Link href="/">Homepage</Link></li>
                    <li><Link href="/games">Movies / Games</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                      <ul>
                        <li>Friends
                          <ul>
                            <li>
                              <li><Link href="/project/friends/casmier">Casmier</Link></li>
                              <li><Link href="/project/friends/cookie">Cookie</Link></li>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    <li><Link href="/contact">Contact / Socials</Link></li>
                  </ul>
              </nav>

              <br/>
              <br/>

              <div className="frens win98-window">
                <div className="title no-after"><p>Frens and hobbies</p></div>
                <Frens/>
              </div>

              <br/>
              <br/>

              <div className="views win98-window">
                <div className="title no-after"><p>Total Views</p></div>
                <Views/>
              </div>
            </div>

            <div className="content win98-window flex-grow-1 " style={{background:"none"}}>
              <div className="title"><p>Content</p></div>
                <div className="body">
                  <Suspense fallback={<Loading/>}>
                    {children}
                  </Suspense>
                </div>
            </div>
          </div>

          <footer className="footerc win98-window">
            <p>Not really Copyright 2023 M4cgyver © Creative Commons CC0, Just credit I really fucking hate the copyright system. </p>
          </footer>
      </body>
    </html>
  )
}
