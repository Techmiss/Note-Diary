function NoteApplication (author) {
	this.author = author;
	this.notes_array = new Array;

// Adds new note content
	this.create = function (note_content) {};
// Lists all the notes that have been stored in the array	
	this.listNotes = function() {};
	    this.note_content = function() {};
	    

};	this.get = function (note_id) {
	   if (this.validate(note_id) == true)
{
	return this.notes_array[note_id]; 
}	   	
};
    this.search = function (search_text) {};
    this.delete = function (note_id) {
    	if (this.validate(note_id) == true){
    		this.notes_array.splice (note_id, 1);
    		return "index number" + note_id +"was deleted";
    	}
    	else {
    		return this.validate(note_id, " to delete")
    	}
    };
    this.edit = function (note_id, new_content){
    	if (this.validate(note_id) ==true) {
    		this.notes_array[note_id] = change_made;
    		return "index number" + note_id "was edited";
    	}
    };
