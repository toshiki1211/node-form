import express from 'express';


export const regist = (req: express.Request, res: express.Response): void => {
    const data = req.body || null;
    res.render('register', { id: data.id, password: data.password });
}

export const registConfirm = (req: express.Request, res: express.Response): void => {
    res.render('regist-confirm', { id: req.body.id, password: req.body.password });
}
