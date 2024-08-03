import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation/Navigation";

export default function Home() {
  const channelParent = { name: "locus" };
  const channelsChildren = [
    { name: "general 1" },
    { name: "general 2" },
    { name: "general 3" },
    { name: "general 4" },
  ];

  return (
    <main>
      {/* 'flex min-h-screen flex-col items-center justify-between p-24' */}
      <Container maxWidth='lg'>
        <div className='flex'>
          <div>
            <div>menu</div>
            <Navigation />
          </div>
          <div className='grow flex justify-center items-center'>main</div>
        </div>
      </Container>
      {/* <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        hello
        <Link href={"/dev"}>jwt token</Link>
      </div> */}
    </main>
  );
}
