let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",

    buildSentence: function() {
        const subject = this.subject ? this.subject : '';
        const verb = this.verb ? this.verb : '';
        const object = this.object ? this.object : '';
        return (subject && verb && object) ? `${subject} ${verb} ${object}` : "Incomplete sentence"; // Changed to backticks
    },

    updateProperty: function (property, value) {
        if(property in this) {
            this[property] = value;
        } else {
            return "Invalid property";
        }
    }
};

console.log(sentenceBuilder.buildSentence()); // Output: I am coding

sentenceBuilder.updateProperty("verb", "am learning");
console.log(sentenceBuilder.buildSentence()); // Output: I am learning coding

sentenceBuilder.updateProperty("subject", "The cat");
console.log(sentenceBuilder.buildSentence()); // Output: The cat am learning coding

sentenceBuilder.updateProperty("mood", "happy");
console.log(sentenceBuilder.updateProperty("mood", "happy")); // Output: Invalid property

sentenceBuilder.updateProperty("verb", "");
console.log(sentenceBuilder.buildSentence()); // Output: Incomplete sentence
