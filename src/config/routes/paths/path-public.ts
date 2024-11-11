export const publicRoutes = {
  HOME: '/',
  ABOUT: 'about',
  WORK: 'projects',
  CONTACT: 'contact',
  BLOG: 'blog'
}

export type PublicRoute = keyof typeof publicRoutes
