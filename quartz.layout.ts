import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const sidebarGraphConfig = {
  localGraph: {
    depth: 3,
    showTags: true,
    scale: 1.1,
    repelForce: 0.5,
    centerForce: 0.3,
    linkDistance: 30,
  },
  globalGraph: {
    depth: -1,
    showTags: true,
    focusOnHover: true,
  },
}

const landingGraphConfig = {
  localGraph: {
    depth: 3,
    showTags: true,
    scale: 0.6,
    repelForce: 0.8,
    centerForce: 0.5,
    linkDistance: 60,
  },
  globalGraph: {
    depth: -1,
    showTags: true,
    focusOnHover: true,
  },
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.ConditionalRender({
      component: Component.Graph(landingGraphConfig),
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jecalles/food",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.Graph(sidebarGraphConfig),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
