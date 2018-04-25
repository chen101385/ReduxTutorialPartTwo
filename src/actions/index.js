//action creators

function selectBook(book) {
     //selectBook is an action creator; it needs to return an action ( object /w (1) type property & (2) payload )
     return {
         //type is either a string or a variable;
         type: 'BOOK_SELECTED',
         payload: book
     };
}

module.exports = { selectBook };
