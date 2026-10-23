import {NextApiRequest, NextApiResponse} from "next";
import {findRule, type RuleMatch} from "zero-password";

// Contract with zero-password/lite. `domain` is the database entry that matched the requested domain,
// which can be a parent domain of the request (login.coupang.com -> www.coupang.com).
export type RuleResponse = RuleMatch
export type ErrorResponse = { error: "not_found" }

const handler = async (req: NextApiRequest, res: NextApiResponse<RuleResponse | ErrorResponse>) => {
    const domain = req.query.domain;
    if (!domain || Array.isArray(domain)) {
        res.status(404).json({error: "not_found"})
        return
    }
    const match = findRule(domain)
    if (!match) {
        res.status(404).json({error: "not_found"})
        return
    }

    res.status(200).json(match);
}

export default handler
