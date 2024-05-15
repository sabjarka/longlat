import { Book } from "../interfaces/Book";

  describe("Books Api", () => {
    it("all properties should exist for all books", function () {
      cy.request("GET", "https://demoqa.com/BookStore/v1/Books").then(
        (response) => {
          expect(response.status).to.eq(200);
          response.body.books.forEach((book: Book) => {
            expect(book.isbn).to.exist;
            expect(book.title).to.exist;
            expect(book.subTitle).to.exist;
            expect(book.author).to.exist;
            expect(book.publish_date).to.exist;
            expect(book.publisher).to.exist;
            expect(book.pages).to.exist;
            expect(book.description).to.exist;
            expect(book.website).to.exist;
          });
        }
      );
    });
  
    it("should get book by isbn", function () {
      cy.request(
        "GET",
        "https://demoqa.com/BookStore/v1/Book?ISBN=9781449325862"
      ).then((response) => {
        expect(response.status).to.eq(200);
        const book: Book = response.body;
        expect(book.isbn).to.eq("9781449325862");
        expect(book.title).to.eq("Git Pocket Guide");
        expect(book.subTitle).to.exist;
        expect(book.author).to.exist;
        expect(book.publish_date).to.exist;
        expect(book.publisher).to.exist;
        expect(book.pages).to.exist;
        expect(book.description).to.exist;
        expect(book.website).to.exist;
      });
    });
  });