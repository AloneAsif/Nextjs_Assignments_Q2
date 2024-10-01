import { Button } from "@/components/ui/button";
import Link from "next/link";
// import NavbarComponent from "@/components/navbar/navbar";
// import Footer from "@/components/footer/footer";

const backgroundImageStyle = {
  backgroundImage:
    "url(https://cdn.pixabay.com/photo/2024/05/16/20/21/digital-8766933_1280.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "35vh",
  margin: 0,
  padding: 0,
};

export default async function Home() {
  return (
    <main>
      {/* <NavbarComponent /> */}
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="shadow-xl bg-blue-400 text-white px-8 py-3 rounded">
          <h1 className="text-4xl font-semibold ">Routing In Next Js</h1>
        </div>

        <div className="mt-10 grid md:grid-cols-2">
          <div className="mx-8 max-w-md order-2 sm:order-1">
            <h1 className="text-2xl font-medium ">About:</h1>
            <h1 className="text-2xl">My name is muhammad Asif</h1>
            <p>
              Hi, I’m Muhammad Asif, a graphic designer and web developer. I’m
              currently learning Next.js at GIAIC, an initiative at the Governor
              House. With skills in HTML, CSS, Bootstrap, Tailwind CSS,
              JavaScript, and TypeScript, I create user-friendly web
              experiences. My expertise in Photoshop and Adobe Illustrator helps
              me design visually appealing content. Recently, I created my first
              “Hello World” in Next.js, marking the start of my journey with
              this powerful framework.
            </p>
            <Link href={"/pages/about"}>
              <Button variant={"destructive"}>About Us</Button>
            </Link>
          </div>
          <div className="mx-6 my-4 order-1 sm:order-2">
            <div
              className="rounded shadow-2xl"
              style={backgroundImageStyle}
            ></div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
