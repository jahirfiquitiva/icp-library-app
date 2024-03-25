/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as NewImport } from './routes/new'
import { Route as IndexImport } from './routes/index'
import { Route as EditIndexImport } from './routes/edit/index'
import { Route as BooksIndexImport } from './routes/books/index'
import { Route as EditBookIdImport } from './routes/edit/$bookId'
import { Route as BooksBookIdImport } from './routes/books/$bookId'

// Create/Update Routes

const NewRoute = NewImport.update({
  path: '/new',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const EditIndexRoute = EditIndexImport.update({
  path: '/edit/',
  getParentRoute: () => rootRoute,
} as any)

const BooksIndexRoute = BooksIndexImport.update({
  path: '/books/',
  getParentRoute: () => rootRoute,
} as any)

const EditBookIdRoute = EditBookIdImport.update({
  path: '/edit/$bookId',
  getParentRoute: () => rootRoute,
} as any)

const BooksBookIdRoute = BooksBookIdImport.update({
  path: '/books/$bookId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/new': {
      preLoaderRoute: typeof NewImport
      parentRoute: typeof rootRoute
    }
    '/books/$bookId': {
      preLoaderRoute: typeof BooksBookIdImport
      parentRoute: typeof rootRoute
    }
    '/edit/$bookId': {
      preLoaderRoute: typeof EditBookIdImport
      parentRoute: typeof rootRoute
    }
    '/books/': {
      preLoaderRoute: typeof BooksIndexImport
      parentRoute: typeof rootRoute
    }
    '/edit/': {
      preLoaderRoute: typeof EditIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  NewRoute,
  BooksBookIdRoute,
  EditBookIdRoute,
  BooksIndexRoute,
  EditIndexRoute,
])

/* prettier-ignore-end */
