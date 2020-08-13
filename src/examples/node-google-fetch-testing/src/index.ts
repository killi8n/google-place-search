import Koa, { Context } from "koa"
import Router from "koa-router"
import { autoComplete } from "google-place-search"

const app = new Koa()
const router = new Router()

router.get("/", async (ctx: Context, next) => {
    try {
        const result = await autoComplete({ input: "1600", key: '' })
        ctx.body = {
            ...result
        }
        ctx.status = 200
    } catch (e) {
        // tslint:disable-next-line: no-console
        console.error(e)
    }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    // tslint:disable-next-line: no-console
    console.log("app is running on port 3000")
})