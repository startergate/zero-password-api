import {NextApiRequest, NextApiResponse} from "next";
import getRuleFrom0PasswordDB from "zero-password";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const domain = req.query.domain;
    if (!domain || Array.isArray(domain)) {
        res.status(404).send('Not Found')
        return
    }
    const rule = getRuleFrom0PasswordDB(domain)
    console.log(domain, rule)
    if (!rule) {
        res.status(404).send('Not Found')
        return
    }

    res.status(200).send(rule);
}

export default handler
