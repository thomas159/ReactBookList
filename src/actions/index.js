export function selectBook(book) {
	// console.log("A book has been selected", book.title);
	//SelectBook is an ActionCreator, it needs otgg return an action,
	// an object with a type porperty.
	return {
		type: "BOOK_SELECTED",
		payload:book
	};

}