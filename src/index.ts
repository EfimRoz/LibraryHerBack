import app from './App'
import {Errback} from "express";

export const port = process.env.PORT || 3000;

app.listen(port, (err: Errback) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
});