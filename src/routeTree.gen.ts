/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as authRouteImport } from './routes/__auth/route'
import { Route as IndexImport } from './routes/index'
import { Route as publicLoginImport } from './routes/__public/login'
import { Route as publicHomeImport } from './routes/__public/home'
import { Route as publicFormImport } from './routes/__public/form'
import { Route as authProjectsImport } from './routes/__auth/projects'
import { Route as authDashboardImport } from './routes/__auth/dashboard'

// Create/Update Routes

const authRouteRoute = authRouteImport.update({
  id: '/__auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const publicLoginRoute = publicLoginImport.update({
  id: '/__public/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const publicHomeRoute = publicHomeImport.update({
  id: '/__public/home',
  path: '/home',
  getParentRoute: () => rootRoute,
} as any)

const publicFormRoute = publicFormImport.update({
  id: '/__public/form',
  path: '/form',
  getParentRoute: () => rootRoute,
} as any)

const authProjectsRoute = authProjectsImport.update({
  id: '/projects',
  path: '/projects',
  getParentRoute: () => authRouteRoute,
} as any)

const authDashboardRoute = authDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => authRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/__auth': {
      id: '/__auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof authRouteImport
      parentRoute: typeof rootRoute
    }
    '/__auth/dashboard': {
      id: '/__auth/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof authDashboardImport
      parentRoute: typeof authRouteImport
    }
    '/__auth/projects': {
      id: '/__auth/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof authProjectsImport
      parentRoute: typeof authRouteImport
    }
    '/__public/form': {
      id: '/__public/form'
      path: '/form'
      fullPath: '/form'
      preLoaderRoute: typeof publicFormImport
      parentRoute: typeof rootRoute
    }
    '/__public/home': {
      id: '/__public/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof publicHomeImport
      parentRoute: typeof rootRoute
    }
    '/__public/login': {
      id: '/__public/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof publicLoginImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface authRouteRouteChildren {
  authDashboardRoute: typeof authDashboardRoute
  authProjectsRoute: typeof authProjectsRoute
}

const authRouteRouteChildren: authRouteRouteChildren = {
  authDashboardRoute: authDashboardRoute,
  authProjectsRoute: authProjectsRoute,
}

const authRouteRouteWithChildren = authRouteRoute._addFileChildren(
  authRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof authRouteRouteWithChildren
  '/dashboard': typeof authDashboardRoute
  '/projects': typeof authProjectsRoute
  '/form': typeof publicFormRoute
  '/home': typeof publicHomeRoute
  '/login': typeof publicLoginRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof authRouteRouteWithChildren
  '/dashboard': typeof authDashboardRoute
  '/projects': typeof authProjectsRoute
  '/form': typeof publicFormRoute
  '/home': typeof publicHomeRoute
  '/login': typeof publicLoginRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/__auth': typeof authRouteRouteWithChildren
  '/__auth/dashboard': typeof authDashboardRoute
  '/__auth/projects': typeof authProjectsRoute
  '/__public/form': typeof publicFormRoute
  '/__public/home': typeof publicHomeRoute
  '/__public/login': typeof publicLoginRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/dashboard'
    | '/projects'
    | '/form'
    | '/home'
    | '/login'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/dashboard' | '/projects' | '/form' | '/home' | '/login'
  id:
    | '__root__'
    | '/'
    | '/__auth'
    | '/__auth/dashboard'
    | '/__auth/projects'
    | '/__public/form'
    | '/__public/home'
    | '/__public/login'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  authRouteRoute: typeof authRouteRouteWithChildren
  publicFormRoute: typeof publicFormRoute
  publicHomeRoute: typeof publicHomeRoute
  publicLoginRoute: typeof publicLoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  authRouteRoute: authRouteRouteWithChildren,
  publicFormRoute: publicFormRoute,
  publicHomeRoute: publicHomeRoute,
  publicLoginRoute: publicLoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/__auth",
        "/__public/form",
        "/__public/home",
        "/__public/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/__auth": {
      "filePath": "__auth/route.tsx",
      "children": [
        "/__auth/dashboard",
        "/__auth/projects"
      ]
    },
    "/__auth/dashboard": {
      "filePath": "__auth/dashboard.tsx",
      "parent": "/__auth"
    },
    "/__auth/projects": {
      "filePath": "__auth/projects.tsx",
      "parent": "/__auth"
    },
    "/__public/form": {
      "filePath": "__public/form.tsx"
    },
    "/__public/home": {
      "filePath": "__public/home.tsx"
    },
    "/__public/login": {
      "filePath": "__public/login.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
