import {NextApiRequest, NextApiResponse} from "next";
import getRuleFrom0PasswordDB from "zero-password";

type Rule = NonNullable<ReturnType<typeof getRuleFrom0PasswordDB>>

// Contract with zero-password/lite. `domain` is the database entry that matched the requested domain.
export type RuleResponse = { domain: string, rule: Rule }
export type ErrorResponse = { error: "not_found" }

const handler = async (req: NextApiRequest, res: NextApiResponse<RuleResponse | ErrorResponse>) => {
    const domain = req.query.domain;
    if (!domain || Array.isArray(domain)) {
        res.status(404).json({error: "not_found"})
        return
    }
    const rule = getRuleFrom0PasswordDB(domain)
    if (!rule) {
        res.status(404).json({error: "not_found"})
        return
    }

    res.status(200).json({domain, rule});
}

export default handler
