import { Footer } from "#components/layout/Footer";
import { Navbar } from "#components/layout/Navbar";
import { Heading } from "@repo/ui/components/ui/heading";
import { Separator } from "@repo/ui/components/ui/separator";

const LoremPage = () => {
  return (
    <>
      <Navbar className="sticky top-0 z-50 border-b-border/80 bg-background/80 backdrop-blur-sm" />
      <main className="container py-4">
        <article className="mx-auto max-w-prose">
          <header>
            <Heading as="h1" size="3xl">
              De finibus bonorum et malorum
            </Heading>
            <div className="flex gap-4">
              <address>M. Tullii Ciceronis</address>
              <Separator
                className="radix-orientation-vertical:h-auto"
                orientation="vertical"
              />
              <time dateTime="0045-06">August 45 BCE</time>
            </div>
          </header>

          <section className="space-y-2">
            <Heading
              as="h2"
              size="xl"
              className="mt-4 before:content-[counter(section,upper-roman)_'._'] before:[counter-increment:section]"
            >
              Liber Primus
            </Heading>
            <p className="relative before:absolute before:-left-4 before:-translate-x-full before:text-muted-foreground before:content-[counter(paragraph)] before:[counter-increment:paragraph] before:[counter-reset:paragraph_31]">
              Neque porro quisquam est qui do<mark>lorem ipsum</mark> quia{" "}
              <mark>dolor sit amet, consectetur, adipisci velit, sed</mark> quia
              nonnumquam eiusmodi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <p className="relative before:absolute before:-left-4 before:-translate-x-full before:text-muted-foreground before:content-[counter(paragraph)] before:[counter-increment:paragraph_1]">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio, cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
            <p className="relative before:absolute before:-left-4 before:-translate-x-full before:text-muted-foreground before:content-[counter(paragraph)] before:[counter-increment:paragraph_1]">
              "Hanc ego cum teneam sententiam, quid est cur verear ne ad eam non
              possim accommodare Torquatos nostros? Quos tu paulo ante et
              memoriter tum etiam erga nos amice et benevole collegisti; nec me
              tamen laudandis maioribus meis corrupisti, nec segniorem ad
              respondendum reddidisti. Quorum facta quemadmodum, quaeso,
              interpretaris? Sicine eos censes aut in armatum hostem impetum
              fecisse, aut in liberos atque in sanguinem suum tam crudeles
              fuisse, nihil ut de utilitatibus, nihil ut de commodis suis
              cogitarent? At id ne ferae quidem faciunt, ut ita ruant itaque
              turbent ut earum motus et impetus quo pertineant non intellegamus;
              tu tam egregios viros censes tantas res gessisse sine causa?"
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default LoremPage;
