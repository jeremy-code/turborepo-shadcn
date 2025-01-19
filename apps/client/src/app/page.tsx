import { Switch } from "@repo/ui/components/ui/switch";
import { Heading } from "@repo/ui/components/ui/heading";
import { Label } from "@repo/ui/components/ui/label";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import { Checkbox } from "@repo/ui/components/ui/checkbox";
import { Link } from "@repo/ui/components/ui/link";

import { Navbar } from "#components/layout/Navbar";
import { Footer } from "#components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container flex flex-col gap-2 py-4">
        <Heading size="3xl">Home</Heading>
        <Heading as="h2" size="3xl">
          H2 to u 2
        </Heading>
        <Link
          isExternal
          href="https://en.wikipedia.org/wiki/Link_(The_Legend_of_Zelda)"
          className="text-blue-500 hover:text-blue-600 hover:dark:text-blue-400"
        >
          Actually, Zelda is the name of the scientist
        </Link>
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
      </main>
      <Footer />
    </>
  );
};

export default Home;
