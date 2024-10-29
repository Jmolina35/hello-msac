function getQuote() {

    quotes = new Array(9);

    sources = new Array(9);

    blockquote = document.getElementById("quotes");

    source = document.getElementById("sources");


    // Quotes

    quotes[0] = "The greatest trick the Devil ever pulled was convincing the world he didn’t exist.";

    sources[0] = "The Usual Suspect";


    quotes[1] = "People change, even Satan used to be an angel.";

    sources[1] = "NF, Remember This.";


    quotes[2] = "The only way to escape the abyss is to face it.";

    sources[2] = "Friedrich Nietzsche";


    quotes[3] = "You either die a hero or live long enough to see yourself become the villain.";

    sources[3] = "The Dark Knight (Joker).";


    quotes[4] = "The only thing we have to fear is fear itself... and the darkness that follows.";

    sources[4] = "It (Stephen King).";


    quotes[5] = "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.";

    sources[5] = "John Milton, Paradise Lost.";


    quotes[6] = "We are all in the gutter, but some of us are looking at the stars.";

    sources[6] = "Oscar Wilde.";


    quotes[7] = "Life can only be understood backwards; but it must be lived forwards.";

    sources[7] = "Søren Kierkegaard.";


    quotes[8] = "We do not remember days; we remember moments.";

    sources[8] = "Cesare Pavese.";

    
    // Formula

    i = Math.floor(Math.random() * quotes.length);


    blockquote.innerHTML = quotes[i];

    source.innerHTML = sources[i];

}

getQuote();