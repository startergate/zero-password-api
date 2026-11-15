import {findRule, type RuleMatch} from "zero-password";

// Contract with zero-password/lite. `domain` is the database entry that matched the requested domain,
// which can be a parent domain of the request (login.coupang.com -> www.coupang.com).
export type RuleResponse = RuleMatch
export type ErrorResponse = { error: "not_found" }

export async function GET(_request: Request, ctx: RouteContext<"/api/[domain]">) {
    const {domain} = await ctx.params
    const match = findRule(domain)
    if (!match) {
        return Response.json({error: "not_found"} satisfies ErrorResponse, {status: 404})
    }
    return Response.json(match satisfies RuleResponse)
}

// Next.js answers OPTIONS on its own with 204. Only GET and HEAD are part of the API.
export function OPTIONS() {
    return new Response(null, {status: 405, headers: {Allow: "GET, HEAD"}})
}
