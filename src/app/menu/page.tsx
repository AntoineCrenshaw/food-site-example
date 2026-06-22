import MenuItemCard from "@/components/MenuItemCard";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const MENU_QUERY = `*[
  _type == "foodItem" && defined(slug.current)
] | {_id, name, slug, description, price, category, image, available}`;

const options = { next: { revalidate: 30 } };

export default async function MenuPage() {
  const menuItems = await client.fetch<SanityDocument[]>(
    MENU_QUERY,
    {},
    options,
  );

  return (
    <main className="w-full px-6 py-12">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest text-[#b45e2a] mb-2">
          What we're serving
        </p>
        <h1 className="text-4xl font-bold text-gray-900">Our Menu</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {menuItems.map((menuItem) => (
          <MenuItemCard key={menuItem._id} item={menuItem} />
        ))}
      </div>
    </main>
  );
}
