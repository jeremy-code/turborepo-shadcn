import { Footer } from "#components/layout/Footer";
import { Navbar } from "#components/layout/Navbar";
import { Button } from "@repo/ui/components/ui/button";
import { Checkbox } from "@repo/ui/components/ui/checkbox";
import { Heading } from "@repo/ui/components/ui/heading";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Link } from "@repo/ui/components/ui/link";
import { Switch } from "@repo/ui/components/ui/switch";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="container flex flex-col gap-2 py-4">
        <Heading size="3xl">Home</Heading>
        <Heading as="h2" size="3xl">
          H2 to u 2
        </Heading>
        <ul className="list-inside list-disc">
          <li>
            <Link
              isExternal
              href="https://en.wikipedia.org/wiki/Link_(The_Legend_of_Zelda)"
              color="link"
              underline="hover"
            >
              Actually, Zelda is the name of the scientist
            </Link>
          </li>
          <li>
            <Link href="#" underline>
              Another link
            </Link>
          </li>
          <li>
            <Link
              href="/please-do-not-go-here-or-the-link-becomes-purple"
              underline
              color="link"
            >
              A non-external blue link
            </Link>
          </li>
        </ul>
        <p className="mb-4">Home page</p>
        <div className="flex flex-col gap-3">
          <Label className="mt-2" required>
            Input
          </Label>
          <Input
            className="max-w-lg"
            placeholder="main(int argc, char *argv[])"
          />
          <Label className="mt-2" required>
            Switch
          </Label>
          <Switch size="lg" />
          <Label className="mt-2">Check, please</Label>
          <Checkbox />
          <Button className="mt-2 self-start">Beat to submission</Button>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current stroke-2 transition-[stroke-dashoffset] [stroke-dasharray:1] [stroke-dashoffset:-1] hover:[stroke-dashoffset:0]"
        >
          <path
            d="M20 6L9 17L4 12"
            pathLength={1}
            className=""

            // className="transition-[stroke-dashoffset] [stroke-dasharray:16] [stroke-dashoffset:-16] hover:[stroke-dashoffset:16]"
          />

          {/* <path strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17L4 12" />
            <animate
              attributeName="d"
              // from="M4 12L5 13"
              from="M4 12L5 13L6 14"
              to="M20 6L9 17L4 12"
              dur="4s"
              calcMode="linear"
              // dur="indefinite"
              fill="linear"
            />
          </path> */}
        </svg>
      </main>
      <Footer />
    </>
  );
};

export default Home;
