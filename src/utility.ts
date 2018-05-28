import { Observable, Observer } from 'rxjs';
import * as fs from "fs";
import {Book} from "./models/book.model";

function getBooksJSON(path: string): Observable<Book[]>
{
    const asyncBooksList: Observable<Book[]> = Observable.create( (observer: Observer<Book[]>) => {
        fs.readFile(path, 'utf8',  (err: NodeJS.ErrnoException, data: string) => {
            if (err){
                observer.error(err);
                return;
            }
            const obj = JSON.parse(data);
            observer.next(obj);
        });
    });
    return asyncBooksList;
}
export default getBooksJSON;