
var nameList = [
  'Time', 'Past', 'Future', 'Dev',
  'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
  'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
  'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
  'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
  'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
  'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
  'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
  'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
  'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
  'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
  'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
  'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
  'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
  'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
  'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
  'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
  'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
  'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
  'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
  'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];
export function generateRandomName() {
var finalName = nameList[Math.floor(Math.random() * nameList.length)];
    return finalName
    };


    function randomInt(lowest, size) {
        // Return a random number between lowest (inclusive) and lowest + size (exclusive)
        return Math.floor(Math.random() * size) + lowest;
      }
      
      // Get a random quote number (between 0 and 9)
      var randomQ = randomInt(0, 10);
      
      // Get the element from the DOM after the page loads
      window.onload = function() {
        var quoteElem = document.getElementById("quote");
      
        // Check if the element exists
        if (quoteElem) {
          quoteElem.innerHTML = getQuote(randomQ);  // Set the innerHTML of the element
        }
      };
      
      export function getQuote(n) {
        var quotes = [
            "What a shot! That’s gone for six!",
            "The ball is flying high, it’s a maximum!",
            "He’s pulled that one to the boundary for four!",
            "That’s a glorious drive! The crowd is on their feet.",
            "Oh, what a catch! A stunning piece of fielding.",
            "That’s a brilliant century! The crowd erupts.",
            "He’s taken a beauty! What a diving catch.",
            "The ball is hammered to the fence, that’s a huge six!",
            "What a wicket! That was a perfect delivery.",
            "The batsman is playing some fine shots today.",
            "Another one! The bowler is on fire.",
            "What a performance from the captain today.",
            "He’s in great touch, playing beautifully.",
            "That’s a lovely piece of timing! Four runs.",
            "And that’s a quick single to the fielder.",
            "It’s a great battle between bat and ball here.",
            "That’s a beautiful square cut! Well played.",
            "He’s gone for a big shot! But he’s caught at mid-off!",
            "The bowler has his tail up. He’s bowled a brilliant over.",
            "That’s a sweet shot down the ground, four runs.",
            "The ball’s found the gap and it’s racing to the boundary.",
            "What a yorker! Right in the blockhole.",
            "That’s a stunning boundary. The fielders stand no chance.",
            "The batsman is looking confident out there.",
            "The ball’s up in the air, it’s going… going… gone! Six!",
            "What a start to the innings! The opening batsman is playing some great shots.",
            "The ball’s nipped back in and it’s taken the stumps!",
            "He’s played that with so much elegance, a classic cricket shot.",
            "This partnership is blossoming nicely. Runs are coming easily.",
            "What a stunning delivery! Clean bowled.",
            "He’s gone for the reverse sweep, and it’s worked! Brilliant shot.",
            "The ball swings away beautifully, it’s unplayable.",
            "That’s a powerful pull shot, but it’s straight to the fielder!",
            "The bowler is in the groove. Another dot ball.",
            "What a chase by the fielder! He’s saved three runs there.",
            "The batsman is not letting the bowler settle. It’s a quick-fire 50.",
            "That was a great ball, but the batsman played it with ease.",
            "It’s been a clinical display by the team today.",
            "And that’s a fantastic diving stop at cover. Brilliant fielding!",
            "The bowler has been punished for a loose delivery.",
            "He’s cut that away beautifully for four! What a shot.",
            "That’s another boundary! The batsman is looking unstoppable.",
            "What a shot! He’s lofted that one over the top for a massive six.",
            "The pitch is playing well, runs are flowing.",
            "This is one of the best partnerships we’ve seen in a while.",
            "The batsman is looking solid and in great form today.",
            "What a thrilling contest! This match is far from over.",
            "He’s hit that through the covers! Four more runs.",
            "That’s a clean hit to the deep, and that’s another six.",
            "The crowd is buzzing as the batsman charges down the track.",
            "He’s gone big, but it’s in the air. The fielder comes under it, and he takes it!",
            "What a delivery! The ball has turned square and hit the stumps.",
            "That’s a classic straight drive, right past the bowler for four.",
            "The bowler is holding his nerves. Can he break this partnership?",
            "The batsman has reached his half-century, what a knock!",
            "That’s a beautiful cover drive. The ball races to the boundary.",
            "And that’s the end of the over. A maiden over, excellent bowling.",
            "What an over from the bowler! The batsman is under pressure.",
            "The ball has pitched outside leg stump, that’s a no-ball.",
            "He’s pulled that shot beautifully, right through the mid-wicket region.",
            "The crowd goes wild as the batsman clears the ropes again."
          ];
          
        
        return quotes[n];
      }