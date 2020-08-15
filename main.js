//quote array
const quotes = [
    {
        quote: "I'm not a great programmer; I'm just a good programmer with great habits.",
        author: "Kent Beck",
    },
    {
        quote: "Truth can only be found in one place: the code.",
        author: "Robert C. Martin",
    },
    {
        quote: "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
        author: "Muhammad Waseem",
    },
    {
        quote: "A language that doesn't affect the way you think about programming is not worth knowing.",
        author: "Alan J. Perils",
    },
    {
        quote: "The most disastrous thing that you can ever learn is your first programming language.",
        author: "Alan Kay",
    },
    {
        quote: "At forty, I was too old to work as a programmer myself anymore; writing code is a young person’s job.",
        author: "Michael Crichton",
    },
    {
        quote: "All problems in computer science can be solved by another level of indirection.",
        author: "David Wheeler",
    },
    {
        quote: "Simplicity is prerequisite for reliability.",
        author: "Edsger Dijkstra",
    },
    {
        quote: "It’s harder to read code than to write it.",
        author: "Joel Spolsky",
    },
    {
        quote: "Code never lies; comments sometimes do.",
        author: "Ron Jeffries",
    }

]

//generate button
const btn = document.querySelector('.generate');

//add event generator
btn.addEventListener('click', () => {
    //ger quote array index from array
    let random = Math.floor(Math.random() * quotes.length);

    //generate quote on screen
    document.querySelector('.quote').innerText = quotes[random].quote;
    document.querySelector('.author').innerText = quotes[random].author;
});