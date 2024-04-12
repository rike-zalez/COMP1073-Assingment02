// defining the Smoothie class that is holding the properties for a smoothie
class Smoothie {
    constructor(base, fruits, addins, size) {
        this.base = base; 
        this.fruits = fruits; 
        this.addins = addins; 
        this.size = size; 
    }

    // preparing a description of the smoothie that is being prepared
    getDescription() {
        return `Your ${this.size} smoothie with ${this.base}, ${this.fruits.join(", ")}, and ${this.addins.join(", ")} is ready!`;
    }
}

// adding an event listener to the form listening for the submit event
document.getElementById('smoothieForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const base = formData.get('base');
    const fruits = formData.getAll('fruit');
    const addins = formData.getAll('addins');
    const size = formData.get('size');

    const smoothie = new Smoothie(base, fruits, addins, size); // creating a new Smoothie object 
    const resultBox = document.getElementById('result'); // finding the result display area 
    resultBox.textContent = smoothie.getDescription(); // result box being updated with the smoothie description
    resultBox.style.display = 'block'; // result being visible 
});
