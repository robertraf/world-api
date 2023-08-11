import { Hono } from "hono"
// import { cache } from 'hono/cache'
// import { compress } from 'hono/compress'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { findCountryByCode } from "./utils"

const app = new Hono()

// middleware
app.use('/api/*', cors())
// app.get(
//   '*',
//   cache({
//     cacheName: 'my-app',
//     cacheControl: 'max-age=3600',
//   })
// )
// app.use('*', compress())
app.use('*', logger())

// routes
app.get("/api", (c) => {
  return c.json({ message: "Hello World From 🌍 API!" })
})

app.get("/api/countries/:code/:resource?", (c) => {
  const { code, resource } = c.req.param();
  const country = findCountryByCode(code);
  if (!country) return c.notFound();
  if (resource === "states") c.json(country.states);
  return c.json(country);
});

export default app

