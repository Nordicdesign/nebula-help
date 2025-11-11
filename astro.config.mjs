import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://help.nebulafs.com",
  integrations: [
    starlight({
      title: "NebulaFS help",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Nordicdesign/nebula-help",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/M49bQVz6j2",
        },
      ],

      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting started", link: "/guides/getting-started/" },
          ],
        },
        { label: "Assignments", autogenerate: { directory: "assignments" } },
        { label: "Flights", autogenerate: { directory: "flying" } },
        { label: "Companies", autogenerate: { directory: "companies" } },
        { label: "Planes", autogenerate: { directory: "planes" } },
        { label: "Client", autogenerate: { directory: "client" } },
      ],
    }),
    sitemap(),
  ],
});
