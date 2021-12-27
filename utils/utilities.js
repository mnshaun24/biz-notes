function deleteById(id, notesArray) {
    const result = notesArray.filter(note => note.id !== id);
    console.log(result);
    return result;
}

module.exports = deleteById;