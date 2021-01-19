import Home from './routes/Home.svelte'
import Dashboard from './routes/Dashboard.svelte'
import NotFound from './routes/NotFound.svelte'

export const routes = {
    // Exact path
    '/': Home,

    '/dashboard': Dashboard,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
}