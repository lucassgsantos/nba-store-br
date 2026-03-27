import { AboutTeaser } from "@/components/sections/about-teaser";
import { CollectionsSection } from "@/components/sections/collections-section";
import { FranchiseSpotlights } from "@/components/sections/franchise-spotlights";
import { HomeHero } from "@/components/sections/home-hero";
import { TrustBar } from "@/components/sections/trust-bar";
import {
  collections,
  franchiseHighlights,
  getFeaturedProducts,
  getProductBySlug,
} from "@/data/store";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const heroSpotlight =
    getProductBySlug("oklahoma-city-thunder-shai-gilgeous-alexander-icon") ?? featuredProducts[0];

  return (
    <main className="pb-10">
      <HomeHero spotlight={heroSpotlight} />
      <TrustBar />
      <CollectionsSection collections={collections} />
      <FranchiseSpotlights franchises={franchiseHighlights} />
      <AboutTeaser />
    </main>
  );
}
