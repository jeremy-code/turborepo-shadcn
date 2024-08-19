import { Switch } from "@repo/ui/components/ui/switch";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        Home page
        <Switch size="lg" />
      </main>
      <Footer />
    </>
  );
};

export default Home;
