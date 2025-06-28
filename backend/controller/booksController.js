const book = require("../model/book");
exports.getAllBook = (req, res) => {
    book.getBooks((err,result)=>{
        if (err) {
            console.error("Error get book", err);
            return res.status(500).json({ error: true, message: "Error get book" });
        }
        res.status(201).json({ success: true, stories: result});
    })

};
exports.getBookChapter = (req, res) => {
    id = req.body.storyId;
    book.getBookChapter(id, (err,result)=>{
        if (err) {
            console.error("Error get book", err);
            return res.status(500).json({ error: true, message: "Error get book" });
        }
        res.status(201).json({ success: true, chapter: result});
    })

};
