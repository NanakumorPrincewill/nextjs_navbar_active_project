import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center h-screen items-center">
        <div>
          <h1 className="  text-4xl text-center">Home Page</h1>
          <h2 className="mt-3">
            This Project is about Nextjs Navbar link items Active class and it`s
            color. I built this to understand how the active page links works.
          </h2>
          <p>This project also include a notFound page</p>
        </div>
      </div>
    </main>
  );
}
