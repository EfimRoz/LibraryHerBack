import express, {Express, NextFunction, Request, Response} from 'express'
import {Book} from "./models/book.model";
import getBooksJSON from "./utility";
import {Observable} from "rxjs/internal/Observable";

class App {
    public express: Express;

    constructor () {
        this.express = express();
        this.enableCors();
        this.mountRoutes();
    }

    private enableCors(): void {
        this.express.use(function(req: Request, res: Response, next: NextFunction) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }

    private mountRoutes (): void {
        const router = express.Router();

        router.get('/books', (req: Request, res: Response) => {
            const getJsonObservable: Observable<Book[]> = getBooksJSON('./assets/booksList.json');
            getJsonObservable.subscribe( (booksList: Book[]) =>{
                res.json(booksList);
            },
            (err) => {
                res.status(500).send(err);
            });
        });
        this.express.use('/', router)
    }
}

export default new App().express;