import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn, formateDate } from "@/lib/utils";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

const PostCard = ({ slug, title, description, date }: PostItemProps) => {
  return (
    <article className="flex flex-col gap-2 border-border border-b bg-card px-4 py-3">
      <div>
        <h2 className="text-2xl font-geistMono">
          <Link href={"/" + slug}>{title}</Link>
        </h2>
        <div className="max-w-none text-muted-foreground max-sm:text-sm">
          {description}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm flex items-center gap-1">
            <time dateTime={date}>{formateDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={"/" + slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
