import { Request, Response, NextFunction } from 'express';

class IndexController {
    show(req: Request, res: Response, next: NextFunction) {
      res.render("index");
    }
}

export default new IndexController();
