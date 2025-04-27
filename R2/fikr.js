const animals = [
    { front: "🦁 Lion", back: "Lions live in groups called prides." },
    { front: "🐠 Fish", back: "Some fish can glow in the dark!" },
    { front: "🐦 Bird", back: "Birds have hollow bones to help them fly." },
    { front: "🐘 Elephant", back: "Elephants are the largest land animals." },
    { front: "🐶 Dog", back: "Dogs are known as man's best friend." },
    { front: "🐱 Cat", back: "Cats sleep for about 12-16 hours a day." },
    { front: "🐯 Tiger", back: "Tigers are the largest species of big cats." },
    { front: "🐍 Snake", back: "Some snakes can live for several months without food." },
    { front: "🐸 Frog", back: "Frogs can jump over 20 times their body length." },
    { front: "🐧 Penguin", back: "Penguins are excellent swimmers but cannot fly." },
    { front: "🐨 Koala", back: "Koalas spend most of their life in eucalyptus trees." },
    { front: "🐒 Monkey", back: "Monkeys are known for their playful behavior." },
    { front: "🦓 Zebra", back: "No two zebras have the same stripe pattern." },
    { front: "🐅 Leopard", back: "Leopards are known for their speed and stealth." },
    { front: "🦔 Hedgehog", back: "Hedgehogs are nocturnal animals." },
    { front: "🐉 Dragon", back: "Dragons are mythical creatures in many cultures." },
    { front: "🦢 Swan", back: "Swans mate for life and are known for their grace." },
    { front: "🐋 Whale", back: "Whales are the largest animals to have ever lived." },
    { front: "🦓 Giraffe", back: "Giraffes are the tallest land animals." },
    { front: "🦄 Unicorn", back: "Unicorns are legendary creatures depicted as horses with a single horn." },
    { front: "🐅 Cheetah", back: "Cheetahs are the fastest land animals." },
    { front: "🐘 Rhino", back: "Rhinos have thick skin that protects them from predators." },
    { front: "🦈 Shark", back: "Sharks have existed for more than 400 million years." },
    { front: "🐏 Sheep", back: "Sheep are social animals that live in herds." },
    { front: "🐄 Cow", back: "Cows are known for producing milk and other dairy products." },
    { front: "🦡 Badger", back: "Badgers are burrowing animals with strong claws." },
    { front: "🐆 Leopard", back: "Leopards are known for their spotted coats." },
    { front: "🦒 Giraffe", back: "Giraffes have long necks to reach high tree branches." },
    { front: "🐗 Boar", back: "Wild boars have tusks and are found in forests." },
    { front: "🦦 Otter", back: "Otters are playful animals that live in water." },
    { front: "🦣 Camel", back: "Camels can survive without water for long periods." },
    { front: "🐼 Panda", back: "Pandas are known for their love of bamboo." },
    { front: "🦉 Owl", back: "Owls are nocturnal birds with excellent vision in the dark." }
  ];
  
  let currentIndex = 0;
  let flippedCount = 0;
  
  function createCard({ front, back }) {
    const card = document.createElement('div');
    card.classList.add('flashcard');
    
    const cardInner = document.createElement('div');
    cardInner.classList.add('flashcard-inner');
    
    const cardFront = document.createElement('div');
    cardFront.classList.add('flashcard-front');
    cardFront.innerHTML = front;
  
    const cardBack = document.createElement('div');
    cardBack.classList.add('flashcard-back');
    cardBack.innerHTML = back;
  
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
  
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      flippedCount++;
  
      // Enable the "Next Cards" button after all three cards are clicked
      if (flippedCount === 3) {
        document.getElementById('next-button').disabled = false;
      }
    });
  
    return card;
  }
  
  function showNextCards() {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '';
    flippedCount = 0;
    document.getElementById('next-button').disabled = true; // Disable the "Next Cards" button
  
    for (let i = 0; i < 3; i++) {
      if (currentIndex < animals.length) {
        const card = createCard(animals[currentIndex]);
        container.appendChild(card);
        currentIndex++;
      }
    }
  
    if (currentIndex >= animals.length) {
      alert("You've reached the end of the cards!");
      document.getElementById('next-button').disabled = true;
    }
  }
  
  // Initial load of 3 cards
  showNextCards();
  