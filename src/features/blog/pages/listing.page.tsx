import { availableTags } from "@/content/config";
import { ArticleCard, TagBadge } from "@/features/blog/components";
import { articlesListService } from "@/features/blog/services";

export async function ListingPage() {
  const articles = await articlesListService.getAll();

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-350 grid grid-cols-[repeat(auto-fill,minmax(320px,400px))] justify-center gap-8 md:gap-6 lg:gap-7 xl:gap-9">
        <div className="col-span-full flex flex-col items-center mb-7">
          <h2 className="text-5xl font-extrabold">Przeglądaj wpisy</h2>
          <div className="flex flex-wrap gap-5 mt-20">
            {availableTags.map((tag) => (
              <TagBadge key={tag.slug} tag={tag} className="" />
            ))}
          </div>
        </div>
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
