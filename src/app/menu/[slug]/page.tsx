import { PortableText, type SanityDocument } from "next-sanity";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";

const MENU_QUERY = `*[_type == "foodItem" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function MenuItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const menuItem = await client.fetch<SanityDocument>(
    MENU_QUERY,
    await params,
    options,
  );
  const menuImageUrl = menuItem.image
    ? urlFor(menuItem.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto text-left min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/menu" className="hover:underline">
        ← Back to menu
      </Link>
      {menuImageUrl && (
        <img
          src={menuImageUrl}
          alt={menuItem.name}
          className="aspect-video rounded-xl"
          width="550"
          height="310"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{menuItem.name}</h1>
      <div className="flex flex-col">
        <p>{menuItem.price}</p>
        <p className="pt-4">{menuItem.description}</p>
      </div>
    </main>
  );
}
