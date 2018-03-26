import { Injectable } from "@angular/core";
import { Couchbase } from 'nativescript-couchbase';

@Injectable()
export class CouchbaseInstance {

    private database: any;
    private pull: any;
    private push: any;

    public constructor() {
        this.database = new Couchbase("test-database");
        this.database.createView("people", "1", (document, emitter) => {
            emitter.emit(document._id, document);
        });
    }

    public getDatabase() {
        return this.database;
    }

}