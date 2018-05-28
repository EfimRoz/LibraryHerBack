
export class Book {
  private author: string;
  private date: Date;
  private title: string;

  constructor(author: string, date: Date, title: string) {
    this.author = author;
    this.date = date;
    this.title = title;
  }
}
