import { TagList } from "../components";

interface ListingLayoutProps {
  children: React.ReactNode;
}

export function ListingLayout({ children }: ListingLayoutProps) {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full max-w-350 grid grid-cols-[repeat(auto-fill,350px)] monitor:grid-cols-[repeat(auto-fill,400px)] justify-center gap-8 tablet:gap-6 laptop:gap-7 monitor:gap-9">
        <div className="col-span-full flex flex-col items-center mb-7 gap-20">
          <h1 className="text-3xl laptop:text-5xl font-extrabold">
            Przeglądaj wpisy
          </h1>
          <TagList />
        </div>
        {children}
      </section>
    </div>
  );
}
