
// Surprise button
document.addEventListener("DOMContentLoaded", function() {

    const surpriseButton = document.getElementById("surpriseButton");
    const surpriseBubble = document.getElementById("surpriseBubble");
    const surpriseText = document.getElementById("surpriseText");

    const surpriseMessages = [
        "It tastes like pink. IT TASTES LIKE PINK -Rachel Berry",
        "Stop the violence🧍‍♀️-Brittany S. Pierce",
        "There was a mouse in mine -Brittany S. Pierce",
        "I got a rock -Charlie Brown",
        "Well hello there, Charlie Brown, you blockhead!! -Charlie Brown",
        "I've developed a new philosophy. I only dread one day at a time. -Charlie Brown",
        "Sometimes I lie awake at night, and I ask, 'Why me?' Then a voice answers, 'Nothing personal... your name just happened to come up.' -Charlie Brown",
        "Yesterday I was a dog. Today I'm a dog. Tomorrow I'll probably still be a dog. *sigh!* There's so little hope for advancement -Snoopy",
        "Curse you, Red Baron! -Snoopy",
        "Why Dogs Are Superior to Cats: They just are, and that's all there is to it! -Snoopy",
        "Oh, please! She has a family! She's a mother! -Santana Lopez",
        "Well, congratulations. Normally you dress like a fantasy of a perverted Japanese business man with a very dark specific fetish but I actually dig this look. Yay. -Santana Lopez",
        "I'm like a lizard. I need something warm beneath me or else I can't digest my food. -Santana Lopez",
        "How can you do a duet by yourself? That's like vocal masturbation. -Santana Lopez",
        "Wanky. -Santana Lopez",
        "I just try to be really, really honest with people when I think that they suck! You know? No one gets it. -Santana Lopez",
        "That's how we do it in Lima Heights! -Santana Lopez",
        "I've been dry heaving all weekend. When my mother asked what the sound was, I said I was practicing bird calls. -Santana Lopez",
        "I've gotta gay. Go - go, I've gotta go. -Santana Lopez",
        "The only straight I am is straight-up bitch. -Santana Lopez",
        "I'm Hispanic. Wait... was that supposed to say lesbian? -Santana Lopez",
        "Holy crap. I'm a closet lesbian and a judgmental bitch, which means one thing. I have awesome gay-dar. -Santana Lopez",
        "As soon as we get to New York I'm bailing to live in a lesbian colony, or Tribeca. -Santana Lopez",
        "I'm about to go ALL Lima Heights! -Santana Lopez",
        "¡Escucha! ¡Soy de Lima Heights Adjacent y yo tengo orgullo! ¿Sabes lo que pasa en Lima Heights Adjacent? ¡Cosas malas! -Santana Lopez",
        "Wait, isn't this a date? Aren't you were paying. I ordered shrimp! Wasn't it last week we were taking a bath together-wasn't that a date? Are you crying? -Brittany S. Pierce",
        "Here's the deal, pixie boy. You've got a crush on my girl, Brittany. I understand. She's beautiful, she's innocent, she's everything that's good in this miserable, stinking world. -Santana Lopez",
        "When I get really pissed off, Santana gets taken over by my other evil personality. I call her Snix. Her wrath of words is called Snix Juice. I'm kind of like the Incredible Hulk. You can't blame me for anything Snix does -Santana Lopez",
        " When I'm with Brittany, I finally understand what people are talking about when they talk about love. -Santana Lopez",
        "In that case, I would like to send one to my girlfriend, Brittany. And by that, I don't mean my friend who's a girl. I mean my girlfriend girlfriend. How does that sound? -Santan Lopez",
        "Brit and I are gay and Mercedes is black, so kicking us out would be a hate crime -Santana Lopez",
        "I'm sorry. I always go to the yelling place. I have rage. -Santana Lopez",
        "Sophomore year, I used to sit in this back row and secretly watch you. I counted the number of times you'd smile at me, and I'd die on days that you didn't. -Santana Lopez",
        "I can sense it thanks to my psychic Mexican third eye. -Santana Lopez",
        "I like yeast in my bagel but not in my muffin. -Santana Lopez",
        "Whoa, stop right there. You look a little Jewish, right Rachel?...bye. -Santana Lopez",
        "Did you know that dolphins are just gay sharks? -Brittany S. Pierce",
        "When I pulled my hamstring, I went to a misogynist. -Brittany S. Pierce",
        "People think I went on vacation, but actually, I spent all summer lost in the sewers. -Brittany S. Pierce",
        "My middle name is Susan, my last name is Pierce. That makes me Brittany S. Pierce. Brittany Spierce. -Brittany S. Pierce",
        "I'm more talented than all of you. I see that clearly now. It's Brittany... bitch. -Brittany S. Pierce",
        "He may be the dumbest person on Earth, and that's coming from me. -Brittany S. Pierce",
        "I'm mad at you, but you're still so hot. -Brittany S. Pierce",
        "Mr. Schue taught me the second half of the alphabet. I stopped after M and N. I felt they sounded too similar and got frustrated. -Brittany S. Pierce",
        "I don't want to die yet. At least not until One Tree Hill gets cancelled. -Brittany S. Pierce",
        "I love you Santana. I love you more than I've ever loved anyone else in this world. All i know about you and I is that because of that, I think anything's possible. -Brittany S. Pierce",
        "I'm also a unicorn. Maybe a bi-corn. Either way, I'm starting to believe in my own magic. -Brittany S. Pierce",
        "I have to bail Lord Tubbington out of jail. He tried to sell my iPhone for drugs -Brittany S. Pierce",
        "That's a great haircut, Mercedes, I thought you graduated. -Brittany S. Pierce",
        "It's hard to make out over Skype. You can't really scissor a webcam. -Brittany S. Pierce",
        
    ];

    let previousMessage = -1;

    surpriseButton.addEventListener("click", function() {

        let randomMessage;
        do {
            randomMessage = Math.floor(
                Math.random() * surpriseMessages.length
            );
        } while (
            randomMessage === previousMessage &&
            surpriseMessages.length > 1
        );

        previousMessage = randomMessage;

        surpriseText.textContent = surpriseMessages[randomMessage];

        surpriseBubble.classList.remove("show");

        void surpriseBubble.offsetWidth;

        surpriseBubble.classList.add("show");

    });

});


// Music button


document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");

    if (!music || !musicButton) {
        console.error("Music button or audio element was not found!");
        return;
    }

    music.volume = 0.35;

    musicButton.addEventListener("click", async function () {

        if (music.paused) {
            try {
                await music.play();

                musicButton.textContent = "♫ Pause Music";
                console.log("Music is playing!");

            } catch (error) {
                console.error("Music playback failed:", error);

                musicButton.textContent = "♫ Unable to Play";
                alert("Unable to play music. Please check your audio file and file path.");
            }

        } else {
            music.pause();
            musicButton.textContent = "♫ Play a Tune";
        }

    });

    music.addEventListener("ended", function () {
        musicButton.textContent = "♫ Play a Tune";
    });

    music.addEventListener("error", function () {
        console.error("Audio file could not be loaded:", music.error);
    });

    const albumToggle = document.getElementById("albumToggle");
    const favGallery = document.getElementById("favGallery");

    if (albumToggle && favGallery) {
        albumToggle.addEventListener("click", function () {

            const isOpening = favGallery.hidden;

            favGallery.hidden = !isOpening;

            albumToggle.setAttribute("aria-expanded", String(isOpening));

            albumToggle.textContent = isOpening
                ? "♡ Close My Favorites Album"
                : "♡ Open My Favorites Album";
        });
    }

});

// favorites album

const galleryImages = document.querySelectorAll(".gallery-photo img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        const photo = this;
        const caption = photo.closest(".gallery-photo")
            .querySelector("figcaption");

        lightboxImage.src = photo.src;
        lightboxImage.alt = photo.alt;
        lightboxCaption.textContent = caption
            ? caption.textContent
            : "";

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
    });

});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";

    document.body.style.overflow = "";
}

