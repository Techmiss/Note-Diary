
function NotesApplication (author, notes_array) {
	this.author = author;
	this.notes_array = [];

    // Adds new note content
	this.create = function (note_content) {
		notes_array.push(note_content)
	};
	
    // Lists all the notes that have been stored in the array	
	this.listNotes = function () {
		console.log("List of notes stored in array: \n")
		for (var i in notes_array) {
			console.log("Note ID: " + i)
			console.log(notes_array[i] + "\n")
			console.log("By Author " + author + "\n\n")
		}
	};
	
	this.get = function (note_id) {
	    return notes_array[note_id] + "\n"
	};
	
	this.search = function (search_text) {
		console.log("Showing results for search '" + search_text + "'" )
		
		var counter = 0
		for (var i in notes_array) {
			if (notes_array[i].indexOf(search_text) > -1) {
				console.log("Note ID: " +  i)
				console.log(notes_array[i] + "\n")
				console.log("By Author " + author + "\n\n")
				
				counter += 1
			}
		}
		if (counter === 0) {
			console.log("Content not found. Please try a different search string.\n");
		}
	};
	
	this.delete = function (note_id) {
		notes_array.splice(note_id, 1)
		return "The note has been deleted!"
	};
	
	this.edit = function (note_id, new_content) {
		notes_array.splice(note_id, 1, new_content)
	};
}