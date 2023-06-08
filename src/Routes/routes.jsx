import React, { lazy } from "react";
import Utils from '../Utils'
const SignUpScreen = lazy(() => import("../Components/signUp"));
const Pages_details = lazy(() =>
  import("../Components/Administration/Pages/pages_details")
);

const PAGES = lazy(() => import("../Components/Administration/Pages/Pages"));

const content_details = lazy(() =>
  import("../Components/Administration/Content_block/content_block")
);

const Content_Block = lazy(() =>
  import("../Components/Administration/Content_block/content_block")
);

const AGENTS = lazy(() => import("../Components/Administration/Agents/Agents"));

const Agent_Details = lazy(() =>
  import("../Components/Administration/Agents/Agents_details")
);

const ROUTES = [
  {
    name: "Pages",
    path: Utils.Pathname.pages,
    id: 8,
    Component: PAGES,
    isPrivate: false,
  },
  {
    name: "Edit Page",
    path: Utils.Pathname.pageInfo,
    id: 9,
    Component: Pages_details,
    isPrivate: false,
  },
  {
    name: "Content Block",
    path: Utils.Pathname.content,
    id: 10,
    Component: Content_Block,
    isPrivate: false,
  },
  {
    name: "Edit Content Block",
    path: Utils.Pathname.contentInfo,
    id: 11,
    Component: content_details,
    isPrivate: false,
  },
  {
    name: "Agent",
    path: Utils.Pathname.agents,
    id: 12,
    Component: AGENTS,
    isPrivate: false,
  },
  {
    name: "Agent Details",
    path: Utils.Pathname.agentInfo,
    id: 13,
    Component: Agent_Details,
    isPrivate: false,
  },
];
