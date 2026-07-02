/*
 * Dodeca Decode, "On This Day" 12-tile question bank.
 *
 * Each calendar date hides one well known answer tied to that day, a
 * birthday, a release, or an event, spanning music, film, sport, art,
 * books, science, world history, Indian history and politics, and
 * Bollywood. The board shows 12 numbered tiles, all closed; each hides a
 * short clue. Fewer tiles opened means a higher score. The answer never
 * appears inside a tile, and `explanation` decodes all twelve clues,
 * numbered (1) to (12), once the puzzle is solved.
 *
 * No em dashes anywhere; commas are preferred.
 */
window.QUESTIONS = {
  "01-08": {
    category: "Musician",
    year: 1935,
    answers: ["Elvis Presley", "Elvis", "Elvis Aaron Presley"],
    tiles: [
      "Born in Tupelo, 1935", "Discovered at Sun Records", "Home called Graceland", "'Hound Dog'",
      "'Jailhouse Rock'", "Swivelling hips", "Crowned 'the King'", "Slicked-back black hair",
      "Drafted into the army", "Later, Las Vegas residencies", "Died in 1977", "Managed by 'the Colonel'"
    ],
    explanation: "Elvis Presley was born in Tupelo, Mississippi on 8 January 1935 (1) and discovered by Sam Phillips at Sun Records in Memphis (2). His mansion was Graceland (3); his hits include 'Hound Dog' (4) and 'Jailhouse Rock' (5). His hip-shaking earned him 'Elvis the Pelvis' (6) and the title 'the King of Rock and Roll' (7), worn with his trademark slicked black hair (8). He served two years in the army in Germany (9), staged famous Las Vegas residencies from 1969 (10), and died in 1977 (11). His manager was 'Colonel' Tom Parker (12)."
  },
  "01-17": {
    category: "Athlete",
    year: 1942,
    answers: ["Muhammad Ali", "Ali", "Cassius Clay"],
    tiles: [
      "Born in Louisville, 1942", "Olympic gold, Rome 1960", "Born Cassius Clay", "'Float like a butterfly'",
      "Refused the Vietnam draft", "The Rumble in the Jungle", "The Thrilla in Manila", "Converted to Islam",
      "Beat Sonny Liston", "Lit the 1996 Olympic flame", "Later had Parkinson's", "Called himself 'the Greatest'"
    ],
    explanation: "Muhammad Ali was born in Louisville, Kentucky on 17 January 1942 (1) and won light-heavyweight gold at the 1960 Rome Olympics (2). Born Cassius Clay (3), he promised to 'float like a butterfly, sting like a bee' (4). He refused the Vietnam draft in 1967 (5), beat George Foreman in the 1974 'Rumble in the Jungle' (6) and Joe Frazier in the 1975 'Thrilla in Manila' (7). He converted to Islam and changed his name (8), first won the title by beating Sonny Liston in 1964 (9), lit the cauldron at the 1996 Atlanta Games (10), later battled Parkinson's disease (11), and always called himself 'the Greatest' (12)."
  },
  "02-12": {
    category: "Scientist",
    year: 1809,
    answers: ["Charles Darwin", "Darwin"],
    tiles: [
      "Born in 1809", "A ship named for a dog", "Galapagos finches", "A five-year voyage",
      "'On the Origin of Species'", "Natural selection", "Nearly became a parson", "Shared Lincoln's birthday",
      "Studied barnacles for years", "Once on the £10 note", "'Survival of the fittest'", "A famous long beard"
    ],
    explanation: "Charles Darwin was born on 12 February 1809 (1). He sailed aboard HMS Beagle (2), and the finches of the Galapagos (3) helped shape his thinking during the five-year voyage (4). His 1859 book was 'On the Origin of Species' (5), proposing natural selection (6). He had trained for the clergy (7) and was born the very same day as Abraham Lincoln (8). He spent eight years studying barnacles (9), later appeared on the British £10 note (10), is linked with the phrase 'survival of the fittest' (11), and is instantly recognisable by his long white beard (12)."
  },
  "02-17": {
    category: "Athlete",
    year: 1963,
    answers: ["Michael Jordan", "Jordan", "MJ"],
    tiles: [
      "Born in 1963", "Wore number 23", "Six NBA titles", "Nicknamed 'Air'",
      "Played for Chicago", "A 2020 docuseries", "Starred in 'Space Jam'", "A Nike sneaker empire",
      "A brief baseball detour", "The 'Flu Game'", "Tongue out mid-dunk", "A title-winning shot at UNC"
    ],
    explanation: "Michael Jordan was born on 17 February 1963 (1) and wore number 23 (2). He won six NBA championships (3), was nicknamed 'Air' (4), and starred for the Chicago Bulls (5). His career was retold in the 2020 docuseries 'The Last Dance' (6); he headlined the film 'Space Jam' (7) and gave his name to Nike's Air Jordan line (8). He took a brief detour into minor-league baseball in 1994 (9), played the legendary 1997 'Flu Game' (10), stuck his tongue out when driving to the basket (11), and hit the title-winning shot for North Carolina in the 1982 NCAA final (12)."
  },
  "03-14": {
    category: "Scientist",
    year: 1879,
    answers: ["Albert Einstein", "Einstein"],
    tiles: [
      "Born on Pi Day", "A patent clerk", "Miracle year, 1905", "Nobel Prize, 1921",
      "Fled Germany in 1933", "Wild white hair", "Refused a presidency", "E = mc squared",
      "Explained Brownian motion", "Tongue out for a photo", "Settled at Princeton", "Theory of relativity"
    ],
    explanation: "Albert Einstein was born on 14 March 1879, written 3/14, now Pi Day (1). He worked as a patent clerk in Bern (2), and his 1905 'miracle year' produced four landmark papers (3). He won the 1921 Nobel Prize in Physics (4), fled Nazi Germany in 1933 (5), and is famous for his wild white hair (6). He declined the offered presidency of Israel in 1952 (7). He gave us E = mc squared (8), explained Brownian motion (9), and was photographed sticking out his tongue in 1951 (10). He settled at Princeton (11) and is best known for the theory of relativity (12)."
  },
  "03-30": {
    category: "Artist",
    year: 1853,
    answers: ["Vincent van Gogh", "Van Gogh", "Vincent Van Gogh"],
    tiles: [
      "Argued with Gauguin", "Hard to pronounce", "Lost part of his left", "Popular after death",
      "Self-image", "Night sky", "Too poor to use models", "Admitted to an asylum",
      "Sold almost nothing", "Now breaks auction records", "Don McLean", "Flowers"
    ],
    explanation: "Vincent van Gogh, born 30 March 1853, fell out violently with fellow painter Paul Gauguin (1); his Dutch surname is famously hard to pronounce (2). After the quarrel he cut off part of his own left ear (3). Barely known in life, he became hugely popular after death (4). He painted dozens of studies of his own self-image (5), and his swirling 'Starry Night' captured the night sky (6). Too poor to use models (7), he kept painting even after being admitted to an asylum at Saint-Remy (8). He sold almost nothing while alive (9), yet his work now breaks auction records (10). Don McLean's song 'Vincent' (11) immortalised him, and sunflowers are his most beloved flowers (12)."
  },
  "04-15": {
    category: "Artist",
    year: 1452,
    answers: ["Leonardo da Vinci", "Leonardo", "Da Vinci", "Leonardo Da Vinci"],
    tiles: [
      "Born near a Tuscan town, 1452", "Painted the 'Mona Lisa'", "'The Last Supper'", "Drew a man in a circle",
      "Wrote in mirror script", "Sketched flying machines", "The model 'Renaissance man'", "Notebooks of inventions",
      "Worked in Florence and Milan", "The 'sfumato' technique", "Detailed anatomy drawings", "A Dan Brown thriller"
    ],
    explanation: "Leonardo da Vinci was born near the Tuscan town of Vinci on 15 April 1452 (1). He painted the 'Mona Lisa' (2) and 'The Last Supper' (3) and drew the 'Vitruvian Man', a figure in a circle and square (4). He famously wrote his notes in mirror script (5), designed flying machines (6), and is the archetypal 'Renaissance man' (7), filling notebooks with inventions (8). He worked in Florence and Milan (9), pioneered the soft 'sfumato' shading (10), made strikingly detailed anatomical drawings (11), and lends his name to Dan Brown's thriller 'The Da Vinci Code' (12)."
  },
  "04-23": {
    category: "Author",
    year: 1564,
    answers: ["William Shakespeare", "Shakespeare"],
    tiles: [
      "Stratford-upon-Avon", "Nicknamed 'the Bard'", "Born and died this day", "The Globe theatre",
      "'To be or not to be'", "Wrote 38 plays", "Married Anne Hathaway", "Coined countless words",
      "A doomed Danish prince", "Star-crossed lovers", "154 sonnets", "On the river Avon"
    ],
    explanation: "William Shakespeare came from Stratford-upon-Avon (1) and is nicknamed 'the Bard' (2); tradition gives him 23 April for both his birth (1564) and his death (1616) (3). His plays were staged at the Globe (4); 'To be or not to be' (5) is from Hamlet, one of his roughly 38 plays (6). He married Anne Hathaway (7) and coined countless English words (8). The 'doomed Danish prince' is Hamlet (9) and the 'star-crossed lovers' are Romeo and Juliet (10). He also wrote 154 sonnets (11), and his hometown sits on the river Avon (12)."
  },
  "05-25": {
    category: "Entertainment",
    year: 1977,
    answers: ["Star Wars", "Star Wars A New Hope", "A New Hope"],
    tiles: [
      "Released in 1977", "Directed by George Lucas", "Subtitled 'A New Hope'", "A villain in black",
      "Glowing laser swords", "'May the Force be with you'", "The desert world Tatooine", "Hero Luke Skywalker",
      "Opened in only 32 cinemas", "Score by John Williams", "Droids R2-D2 and C-3PO", "'A galaxy far, far away'"
    ],
    explanation: "Star Wars opened on 25 May 1977 (1), directed by George Lucas (2) and later subtitled 'A New Hope' (3). Its villain in black is Darth Vader (4); its glowing laser swords are lightsabers (5); its blessing is 'May the Force be with you' (6). It is set partly on the desert world Tatooine (7), home of hero Luke Skywalker (8). It opened in just 32 cinemas (9), had a score by John Williams (10), featured the droids R2-D2 and C-3PO (11), and begins 'A long time ago in a galaxy far, far away' (12)."
  },
  "06-20": {
    category: "Entertainment",
    year: 1975,
    answers: ["Jaws"],
    tiles: [
      "Released in 1975", "Directed by Spielberg", "A great white", "'A bigger boat'",
      "Set on Amity Island", "A two-note theme", "Roy Scheider stars", "Its prop was named Bruce",
      "From a Peter Benchley novel", "The first summer blockbuster", "Filmed on Martha's Vineyard", "A faulty mechanical shark"
    ],
    explanation: "Jaws was released on 20 June 1975 (1), directed by Steven Spielberg (2). Its monster is a great white shark (3), prompting the line 'You're gonna need a bigger boat' (4). It is set on Amity Island (5) and driven by John Williams' menacing two-note theme (6). Roy Scheider plays Chief Brody (7); the mechanical shark prop was nicknamed Bruce (8). It was adapted from Peter Benchley's novel (9), is often called the first summer blockbuster (10), was filmed on Martha's Vineyard (11), and the constantly malfunctioning mechanical shark (12) forced Spielberg to suggest the threat rather than show it."
  },
  "06-28": {
    category: "Entrepreneur",
    year: 1971,
    answers: ["Elon Musk", "Musk"],
    tiles: [
      "Born in Pretoria, 1971", "Co-founded PayPal", "Electric cars", "Rockets that land themselves",
      "Bought a blue-bird app", "Often the world's richest", "Dreams of colonising Mars", "A brain-chip startup",
      "The Boring Company", "Child named X AE A-12", "Sent a sports car into orbit", "Calls himself 'Technoking'"
    ],
    explanation: "Elon Musk was born in Pretoria, South Africa on 28 June 1971 (1). He co-founded the company that became PayPal (2), leads Tesla's electric cars (3) and SpaceX's self-landing rockets (4). In 2022 he bought Twitter, the blue-bird app (5), and is frequently the world's richest person (6). He aims to colonise Mars (7), founded the brain-chip firm Neuralink (8) and tunnelling venture The Boring Company (9). He named a child X AE A-12 (10), launched his own Tesla Roadster into orbit on a 2018 test flight (11), and took the title 'Technoking' of Tesla (12)."
  },
  "06-29": {
    category: "Book",
    year: 1900,
    answers: ["The Little Prince", "Little Prince", "Le Petit Prince", "Antoine de Saint-Exupery", "Saint-Exupery"],
    tiles: [
      "Its author born in 1900", "Written by a French pilot", "A boy from asteroid B-612", "Tames a fox",
      "Loves a single rose", "'Only with the heart'", "A drawing mistaken for a hat", "A snake in the desert",
      "The author vanished in 1944", "One of the most translated books", "A slim, illustrated tale", "A baobab problem"
    ],
    explanation: "The Little Prince was written by Antoine de Saint-Exupery, born on 29 June 1900 (1), a French aviator and writer (2). The story follows a little boy from asteroid B-612 (3) who tames a fox (4) and loves a single rose (5); its motto is that 'it is only with the heart that one can see rightly' (6). It opens with a drawing of a boa that adults mistake for a hat (7), and a snake waits in the desert (8). The author disappeared on a flight in 1944 (9). The book is one of the most translated ever (10), a slim illustrated tale (11), and warns about baobab trees overrunning a tiny planet (12)."
  },
  "06-30": {
    category: "Athlete",
    year: 1966,
    answers: ["Mike Tyson", "Tyson", "Iron Mike"],
    tiles: [
      "Born in Brooklyn, 1966", "Youngest heavyweight champion", "Nicknamed 'Iron'", "Bit off part of an ear",
      "A face tattoo", "Promoter Don King", "Served time in prison", "Starred in a 1987 video game",
      "Keeps pigeons", "A famous lisp", "A 2020 comeback", "A cameo in 'The Hangover'"
    ],
    explanation: "Mike Tyson was born in Brooklyn on 30 June 1966 (1) and became the youngest heavyweight boxing champion at 20 (2), nicknamed 'Iron Mike' (3). In a 1997 bout he bit off part of Evander Holyfield's ear (4); he sports a tribal face tattoo (5) and was promoted by Don King (6). He served time in prison in the 1990s (7), inspired the 1987 game 'Mike Tyson's Punch-Out' (8), famously keeps pigeons (9), speaks with a distinctive lisp (10), staged an exhibition comeback in 2020 (11), and appeared as himself in 'The Hangover' (12)."
  },
  "07-01": {
    category: "Royal",
    year: 1961,
    answers: ["Princess Diana", "Diana", "Lady Diana", "Diana Spencer"],
    tiles: [
      "Born in 1961", "Wed into British royalty", "Married Charles in 1981", "Mother of William and Harry",
      "The 'Queen of Hearts'", "Campaigned against landmines", "An Elton John tribute", "Of the Spencer family",
      "A 1995 Panorama interview", "Divorced in 1996", "Died in a Paris crash", "A fairytale wedding"
    ],
    explanation: "Princess Diana was born on 1 July 1961 (1) and wed into British royalty (2) when she married Prince Charles in 1981 (3). She was mother to William and Harry (4) and called herself the 'Queen of People's Hearts' (5). She campaigned against landmines (6), and Elton John reworked 'Candle in the Wind' as a tribute (7). She came from the Spencer family (8), gave a candid 1995 Panorama interview (9), divorced in 1996 (10), and died in a Paris car crash in 1997 (11). Her 1981 wedding was a global fairytale event (12)."
  },
  "07-02": {
    category: "Entertainment",
    year: 1990,
    answers: ["Margot Robbie", "Robbie"],
    tiles: [
      "Born in Australia, 1990", "Played a pink doll on screen", "Harley Quinn", "From the soap 'Neighbours'",
      "'The Wolf of Wall Street'", "Played Tonya Harding", "Founded a production company", "A 2023 billion-dollar hit",
      "Once a dental nurse role?", "Blonde hair, blue eyes", "Oscar-nominated", "In 'Once Upon a Time in Hollywood'"
    ],
    explanation: "Margot Robbie was born in Australia on 2 July 1990 (1). She played the title doll in 2023's 'Barbie' (2) and the villain Harley Quinn (3). She began on the Australian soap 'Neighbours' (4), broke through in 'The Wolf of Wall Street' (5), and played skater Tonya Harding in 'I, Tonya' (6). She founded the production company LuckyChap (7), and 'Barbie' became a billion-dollar hit in 2023 (8). Known for varied roles (9) and her blonde hair and blue eyes (10), she has been Oscar-nominated (11) and appeared in 'Once Upon a Time in Hollywood' (12)."
  },
  "07-03": {
    category: "Entertainment",
    year: 1962,
    answers: ["Tom Cruise", "Cruise"],
    tiles: [
      "Born in 1962", "Flew in 'Top Gun'", "Does his own stunts", "A Scientologist",
      "Plays Ethan Hunt", "'Show me the money' co-star", "Jumped on Oprah's couch", "'Risky Business' dance",
      "'You can't handle the truth!'", "Maverick returned in 2022", "A dazzling grin", "Hangs off planes and towers"
    ],
    explanation: "Tom Cruise was born on 3 July 1962 (1). He flew as Maverick in 'Top Gun' (2), is famous for doing his own stunts (3), and is a prominent Scientologist (4). He plays Ethan Hunt in 'Mission: Impossible' (5), starred opposite the 'show me the money' line in 'Jerry Maguire' (6), jumped on Oprah's couch in 2005 (7), and danced in his shirt in 'Risky Business' (8). He faced the 'You can't handle the truth!' line in 'A Few Good Men' (9), brought Maverick back in 2022's 'Top Gun: Maverick' (10), flashes a dazzling grin (11), and hangs off planes and tall towers for real (12)."
  },
  "07-04": {
    category: "History",
    year: 1776,
    answers: ["Declaration of Independence", "US Declaration of Independence", "American Declaration of Independence"],
    tiles: [
      "4 July 1776", "Thirteen colonies", "Drafted by Jefferson", "Breaking from a king",
      "'Self-evident' truths", "Fireworks every year", "Signed in Philadelphia", "Hancock's bold signature",
      "Life, liberty, happiness", "Rejected George III", "Two signers died on it", "A nation's birthday"
    ],
    explanation: "The Declaration of Independence was adopted on 4 July 1776 (1) by thirteen colonies (2). Thomas Jefferson was its principal drafter (3), announcing a break from the king (4) and holding certain truths to be 'self-evident' (5). Americans mark it with fireworks each year (6); it was adopted in Philadelphia (7), where John Hancock added his famously bold signature (8). It promises 'life, liberty and the pursuit of happiness' (9) and rejected the rule of George III (10). Signers John Adams and Thomas Jefferson both died on its 50th anniversary, 4 July 1826 (11), and the day is celebrated as the nation's birthday (12)."
  },
  "07-05": {
    category: "Sport",
    year: 1995,
    answers: ["PV Sindhu", "Sindhu", "Pusarla Venkata Sindhu", "P V Sindhu"],
    tiles: [
      "Born in Hyderabad, 1995", "A badminton star", "Olympic silver in 2016", "Olympic bronze in 2020",
      "World Champion in 2019", "Coached by Gopichand", "Wields a racquet", "Padma Bhushan honour",
      "Daughter of volleyball players", "Two Olympic medals", "Plays for India", "Tall left-court smasher"
    ],
    explanation: "P.V. Sindhu was born in Hyderabad on 5 July 1995 (1) and is a badminton star (2). She won Olympic silver at Rio 2016 (3) and bronze at Tokyo 2020 (4), and became World Champion in 2019 (5). She trained under Pullela Gopichand (6), competes with a racquet on the shuttle court (7), and received the Padma Bhushan (8). She is the daughter of two volleyball players (9), holds two Olympic medals (10), represents India (11), and is known for her tall reach and powerful smashes (12)."
  },
  "07-06": {
    category: "Bollywood",
    year: 1985,
    answers: ["Ranveer Singh", "Ranveer"],
    tiles: [
      "Born in 1985", "A Bollywood live-wire", "Married Deepika Padukone", "Debuted in 'Band Baaja Baaraat'",
      "Played a fierce sultan", "'Apna Time Aayega'", "Bold, flamboyant fashion", "Played cricketer Kapil Dev",
      "'Bajirao Mastani'", "High-energy on screen", "A Peshawari Khilji role", "Often paired with big dance numbers"
    ],
    explanation: "Ranveer Singh was born on 6 July 1985 (1) and is one of Bollywood's most energetic stars (2). He is married to Deepika Padukone (3), debuted in 'Band Baaja Baaraat' (4), and played the menacing sultan Alauddin Khilji in 'Padmaavat' (5). His film 'Gully Boy' gave the anthem 'Apna Time Aayega' (6). He is known for bold, flamboyant fashion (7) and played cricketer Kapil Dev in '83' (8). He starred as the Peshwa in 'Bajirao Mastani' (9), brings huge energy to the screen (10), made the Khilji role unforgettable (11), and often headlines big dance numbers (12)."
  },
  "07-07": {
    category: "Sport",
    year: 1981,
    answers: ["MS Dhoni", "Dhoni", "Mahendra Singh Dhoni", "M S Dhoni"],
    tiles: [
      "Born in Ranchi, 1981", "Nicknamed 'Captain Cool'", "A wicketkeeper-batsman", "Won the 2007 T20 World Cup",
      "A 2011 World Cup-winning six", "The 'helicopter shot'", "Captained Chennai's IPL side", "Long hair in his early days",
      "A finisher under pressure", "Wore number 7", "Once worked as a ticket collector", "A 2016 biopic"
    ],
    explanation: "M.S. Dhoni was born in Ranchi on 7 July 1981 (1), nicknamed 'Captain Cool' (2). A wicketkeeper-batsman (3), he led India to the 2007 T20 World Cup (4) and sealed the 2011 World Cup with a six (5). He invented the 'helicopter shot' (6) and captains Chennai Super Kings in the IPL (7). He sported long hair early in his career (8), was famed as a finisher under pressure (9), wore number 7 (10), once worked as a railway ticket collector (11), and is the subject of a 2016 biopic (12)."
  },
  "07-08": {
    category: "Sport",
    year: 1972,
    answers: ["Sourav Ganguly", "Ganguly", "Dada"],
    tiles: [
      "Born in Kolkata, 1972", "Nicknamed 'Dada'", "Waved his shirt at Lord's", "An aggressive India captain",
      "'The Prince of Kolkata'", "A left-handed batsman", "'God of the off side'", "Later led the BCCI",
      "Opened the batting", "Built a fearless team", "From Bengal", "A famous 2002 celebration"
    ],
    explanation: "Sourav Ganguly was born in Kolkata on 8 July 1972 (1), affectionately called 'Dada' (2). He famously waved his shirt from the Lord's balcony (3) as an aggressive India captain (4) known as 'the Prince of Kolkata' (5). A stylish left-handed batsman (6), he was dubbed 'God of the off side' (7) and later became president of the BCCI (8). He often opened the batting (9), built a fearless Indian team (10), hails from Bengal (11), and his 2002 shirt-waving at Lord's is an iconic celebration (12)."
  },
  "07-09": {
    category: "Entertainment",
    year: 1956,
    answers: ["Tom Hanks", "Hanks"],
    tiles: [
      "Born in 1956", "Ran across America on screen", "Voiced a cowboy doll", "Stranded with a volleyball",
      "Saved Private Ryan", "Back-to-back Best Actor Oscars", "Apollo 13 commander", "'Big' on a giant piano",
      "Often 'America's Dad'", "A box of chocolates", "Collects typewriters", "Philadelphia courtroom drama"
    ],
    explanation: "Tom Hanks was born on 9 July 1956 (1). He ran across America as Forrest Gump (2), voiced the cowboy Woody in 'Toy Story' (3), and was stranded with a volleyball named Wilson in 'Cast Away' (4). He led the squad in 'Saving Private Ryan' (5), won back-to-back Best Actor Oscars for 'Philadelphia' and 'Forrest Gump' (6), and commanded the crew in 'Apollo 13' (7). He danced on a giant floor piano in 'Big' (8), is often called 'America's Dad' (9), delivered the 'box of chocolates' line (10), collects vintage typewriters (11), and starred in the courtroom drama 'Philadelphia' (12)."
  },
  "07-10": {
    category: "Scientist",
    year: 1856,
    answers: ["Nikola Tesla", "Tesla"],
    tiles: [
      "Born in 1856", "Champion of alternating current", "A high-voltage coil bears his name", "Rivalry with Edison",
      "The unfinished Wardenclyffe Tower", "A unit of magnetic flux", "Loved pigeons", "Helped harness Niagara Falls",
      "Invented the induction motor", "Died poor in 1943", "Dreamed of wireless power", "Serbian-American genius"
    ],
    explanation: "Nikola Tesla was born on 10 July 1856 (1). He championed alternating current (2); the high-voltage 'Tesla coil' bears his name (3). He waged the 'War of Currents' rivalry with Thomas Edison (4), built the unfinished Wardenclyffe Tower (5), and is honoured by the unit of magnetic flux density (6). He famously loved pigeons (7), helped harness Niagara Falls for power (8), invented the AC induction motor (9), died poor in 1943 (10), dreamed of wireless power (11), and is remembered as a Serbian-American genius (12)."
  },
  "07-11": {
    category: "Book",
    year: 1899,
    answers: ["Charlotte's Web", "Charlottes Web", "E B White", "EB White", "E.B. White"],
    tiles: [
      "Its author born in 1899", "A pig named Wilbur", "A clever spider", "Words spun in a web",
      "'Some Pig'", "A girl named Fern", "Set on a farm", "A rat named Templeton",
      "By a 'New Yorker' writer", "A beloved children's classic", "Saving a runt from slaughter", "Also wrote a style guide"
    ],
    explanation: "Charlotte's Web was written by E.B. White, born on 11 July 1899 (1). It centres on a pig named Wilbur (2) and a clever spider (3) who spins words into her web (4), starting with 'Some Pig' (5). A girl named Fern saves Wilbur (6) on a farm (7), aided by a rat named Templeton (8). White was a 'New Yorker' writer (9); the book is a beloved children's classic (10) about saving a runt from slaughter (11), and he also co-wrote the style guide 'The Elements of Style' (12)."
  },
  "07-12": {
    category: "Activist",
    year: 1997,
    answers: ["Malala Yousafzai", "Malala"],
    tiles: [
      "Born in 1997", "From Pakistan's Swat Valley", "Shot on a school bus", "Targeted by the Taliban",
      "Champions girls' education", "Youngest Nobel laureate", "Blogged secretly for the BBC", "Survived a head wound",
      "Memoir 'I Am ...'", "Spoke at the UN", "Studied at Oxford", "Runs a global fund"
    ],
    explanation: "Malala Yousafzai was born on 12 July 1997 (1) in Pakistan's Swat Valley (2). She was shot on a school bus (3) by the Taliban (4) for championing girls' education (5). She became the youngest Nobel Peace laureate in 2014 (6), having blogged secretly for the BBC (7), and she survived a head wound (8). Her memoir is 'I Am Malala' (9); she has spoken at the United Nations (10), studied at Oxford (11), and runs the global Malala Fund (12)."
  },
  "07-13": {
    category: "Entertainment",
    year: 1942,
    answers: ["Harrison Ford", "Ford"],
    tiles: [
      "Born in 1942", "Flew the Millennium Falcon", "A whip and a fedora", "Was once a carpenter",
      "Played a replicant hunter", "A fear of snakes on screen", "The Fugitive on the run", "Piloted Air Force One",
      "A scar on his chin", "An archaeologist hero", "Still doing action in his 80s", "Smuggler with a Wookiee friend"
    ],
    explanation: "Harrison Ford was born on 13 July 1942 (1). He flew the Millennium Falcon as Han Solo (2) and wielded a whip and fedora as Indiana Jones (3). Before fame he worked as a carpenter (4); he hunted replicants as Deckard in 'Blade Runner' (5), and his Indiana Jones famously fears snakes (6). He went on the run in 'The Fugitive' (7), piloted 'Air Force One' (8), bears a scar on his chin (9), played the archaeologist hero (10), still does action films in his 80s (11), and his smuggler Han Solo befriends the Wookiee Chewbacca (12)."
  },
  "07-14": {
    category: "History",
    year: 1789,
    answers: ["Bastille Day", "Storming of the Bastille", "Bastille"],
    tiles: [
      "14 July 1789", "A Paris fortress-prison", "Stormed by a mob", "Hunting for gunpowder",
      "Sparked the French Revolution", "France's national day", "Only seven prisoners freed", "'Liberty, Equality, Fraternity'",
      "A military parade on the Champs-Elysees", "Against King Louis XVI", "A symbol of toppled tyranny", "Fireworks over Paris"
    ],
    explanation: "Bastille Day marks 14 July 1789 (1), when a Paris fortress-prison (2) was stormed by a mob (3) hunting for gunpowder (4). The act sparked the French Revolution (5) and is now France's national day (6). Only seven prisoners were inside (7); the revolution's motto became 'Liberty, Equality, Fraternity' (8). It is celebrated with a military parade on the Champs-Elysees (9), the uprising was against King Louis XVI (10), it became a symbol of toppled tyranny (11), and fireworks light up Paris each year (12)."
  },
  "07-15": {
    category: "Artist",
    year: 1606,
    answers: ["Rembrandt", "Rembrandt van Rijn"],
    tiles: [
      "Born in 1606", "A Dutch master", "'The Night Watch'", "Dozens of self-portraits",
      "Dramatic light and shadow", "The Dutch Golden Age", "Worked in Amsterdam", "A skilled etcher",
      "Went bankrupt late in life", "Painted an anatomy lesson", "Known by one name", "Rich browns and golds"
    ],
    explanation: "Rembrandt was born on 15 July 1606 (1), a Dutch master (2) famous for 'The Night Watch' (3) and dozens of self-portraits (4). He worked with dramatic light and shadow, chiaroscuro (5), at the height of the Dutch Golden Age (6), based in Amsterdam (7). He was also a skilled etcher (8), went bankrupt late in life (9), painted 'The Anatomy Lesson of Dr Tulp' (10), is known by a single name like a master (11), and favoured rich browns and golds (12)."
  },
  "07-16": {
    category: "Bollywood",
    year: 1983,
    answers: ["Katrina Kaif", "Katrina"],
    tiles: [
      "Born in 1983", "British-Indian actress", "'Sheila Ki Jawani'", "Married Vicky Kaushal",
      "A model turned star", "Learned Hindi for films", "A 'Tiger' franchise lead", "'Chikni Chameli'",
      "Known as a top dancer", "In 'Zindagi Na Milegi Dobara'", "Blue-eyed Bollywood icon", "Paired often with Salman Khan"
    ],
    explanation: "Katrina Kaif was born on 16 July 1983 (1), a British-Indian actress (2). She danced to 'Sheila Ki Jawani' (3), married Vicky Kaushal (4), and rose from modelling to stardom (5), learning Hindi for her films (6). She co-leads the 'Tiger' spy franchise (7), performed 'Chikni Chameli' (8), is regarded as one of Bollywood's best dancers (9), appeared in 'Zindagi Na Milegi Dobara' (10), is a blue-eyed Bollywood icon (11), and has often been paired with Salman Khan (12)."
  },
  "07-17": {
    category: "Pop Culture",
    year: 1955,
    answers: ["Disneyland", "Disneyland Park"],
    tiles: [
      "Opened in 1955", "In Anaheim, California", "Built by Walt Disney", "'The happiest place on earth'",
      "A Sleeping Beauty castle", "A chaotic opening day", "Main Street, U.S.A.", "A mouse mascot",
      "A snow-capped Matterhorn", "An early monorail", "Tomorrowland and Fantasyland", "The first theme park of its kind"
    ],
    explanation: "Disneyland opened on 17 July 1955 (1) in Anaheim, California (2), built by Walt Disney (3) and billed as 'the happiest place on earth' (4). Its centrepiece is Sleeping Beauty Castle (5); its chaotic opening day was nicknamed 'Black Sunday' (6). Visitors enter down Main Street, U.S.A. (7), greeted by the mouse mascot Mickey (8). It features a snow-capped Matterhorn ride (9), an early monorail (10), lands like Tomorrowland and Fantasyland (11), and it was the first theme park of its kind (12)."
  },
  "07-18": {
    category: "Bollywood",
    year: 1982,
    answers: ["Priyanka Chopra", "Priyanka", "Priyanka Chopra Jonas"],
    tiles: [
      "Born in 1982", "Crowned Miss World 2000", "Married Nick Jonas", "Starred in US show 'Quantico'",
      "Played a boxer in 'Mary Kom'?", "'Desi Girl'", "Of 'Bajirao Mastani'", "A UNICEF ambassador",
      "Bollywood to Hollywood", "A film producer too", "Sang English-language singles", "From Jamshedpur"
    ],
    explanation: "Priyanka Chopra was born on 18 July 1982 (1) and was crowned Miss World in 2000 (2). She married singer Nick Jonas (3) and starred in the US series 'Quantico' (4). A versatile actress (5), she featured in the song 'Desi Girl' (6) and played Kashibai in 'Bajirao Mastani' (7). She is a UNICEF Goodwill Ambassador (8), crossed from Bollywood to Hollywood (9), became a film producer (10), released English-language singles (11), and hails from Jamshedpur (12)."
  },
  "07-19": {
    category: "Indian History",
    year: 1827,
    answers: ["Mangal Pandey", "Pandey"],
    tiles: [
      "Born in 1827", "A sepoy in the Company army", "Stationed at Barrackpore", "Angered by greased cartridges",
      "An early spark of 1857", "Served the East India Company", "Hanged in April 1857", "Of the 34th Bengal Infantry",
      "A martyr of the Revolt", "An Enfield rifle controversy", "An Aamir Khan film, 2005", "Defied his British officers"
    ],
    explanation: "Mangal Pandey was born on 19 July 1827 (1), a sepoy in the East India Company army (2) stationed at Barrackpore (3). He was angered by rifle cartridges rumoured to be greased with animal fat (4), and his defiance was an early spark of the 1857 uprising (5). He served the East India Company (6) but was hanged in April 1857 (7). He belonged to the 34th Bengal Native Infantry (8) and is remembered as a martyr of the Revolt (9). The new Enfield rifle controversy (10) drove his rebellion; a 2005 Aamir Khan film tells his story (11), and he openly defied his British officers (12)."
  },
  "07-20": {
    category: "History",
    year: 1969,
    answers: ["Moon Landing", "First Moon Landing", "Apollo 11 Moon Landing", "Moon landing by Apollo 11"],
    tiles: [
      "20 July 1969", "'One small step'", "Mission Apollo 11", "The Sea of Tranquility",
      "650 million watched", "A flag held out by wire", "Armstrong and Aldrin", "'The Eagle has landed'",
      "Footprints that remain", "Collins stayed in orbit", "Launched atop a Saturn V", "'A giant leap'"
    ],
    explanation: "The first Moon landing came on 20 July 1969 (1) with Neil Armstrong's 'one small step' (2) during the Apollo 11 mission (3). The lander touched down in the Sea of Tranquility (4) before an estimated 650 million TV viewers (5). The flag was held out by a wire because there is no wind (6). Armstrong and Aldrin walked on the surface (7) after radioing 'The Eagle has landed' (8); their footprints remain undisturbed (9) while Michael Collins orbited above (10). The crew launched atop a Saturn V rocket (11), and Armstrong called it 'a giant leap for mankind' (12)."
  },
  "07-21": {
    category: "Entertainment",
    year: 1951,
    answers: ["Robin Williams", "Robin Williams"],
    tiles: [
      "Born in 1951", "A whirlwind stand-up", "Dressed as a nanny", "Voiced a big blue genie",
      "'O Captain! My Captain!'", "Won an Oscar for 'Good Will Hunting'", "Alien 'Mork' on TV", "Trapped in 'Jumanji'",
      "A doctor with a red nose", "Lightning-fast improv", "Beloved funnyman", "Died in 2014"
    ],
    explanation: "Robin Williams was born on 21 July 1951 (1), a whirlwind stand-up comedian (2). He dressed as a nanny in 'Mrs. Doubtfire' (3) and voiced the big blue Genie in 'Aladdin' (4). In 'Dead Poets Society' his students hailed 'O Captain! My Captain!' (5); he won an Oscar for 'Good Will Hunting' (6). He first found fame as the alien Mork on television (7), got trapped in the jungle of 'Jumanji' (8), and played the red-nosed doctor in 'Patch Adams' (9). Famous for lightning-fast improv (10), he was a beloved funnyman (11) who died in 2014 (12)."
  },
  "07-22": {
    category: "Indian History",
    year: 1947,
    answers: ["Indian National Flag", "Tiranga", "Tricolour", "Tricolor", "Indian Flag", "National Flag of India"],
    tiles: [
      "Adopted on 22 July 1947", "Saffron, white and green", "A navy-blue wheel at its centre", "That wheel has 24 spokes",
      "Based on Pingali Venkayya's design", "Replaced a spinning-wheel emblem", "Made only of khadi cloth", "A ratio of 2 to 3",
      "Hoisted at the Red Fort", "The Ashoka Chakra", "Approved by the Constituent Assembly", "Three horizontal bands"
    ],
    explanation: "The Indian national flag was adopted on 22 July 1947 (1). It has three bands of saffron, white and green (2) with a navy-blue wheel at its centre (3) that bears 24 spokes (4). It was based on a design by Pingali Venkayya (5) and replaced the earlier spinning-wheel emblem (6). By rule it is made only of khadi cloth (7), in a width-to-length ratio of 2 to 3 (8), and is hoisted at the Red Fort each Independence Day (9). The central wheel is the Ashoka Chakra (10); the design was approved by the Constituent Assembly (11) and consists of three horizontal bands (12)."
  },
  "07-23": {
    category: "Indian History",
    year: 1906,
    answers: ["Chandrashekhar Azad", "Chandra Shekhar Azad", "Azad"],
    tiles: [
      "Born in 1906", "An Indian revolutionary", "Vowed never to be captured", "Died in a 1931 shootout",
      "At Alfred Park, Allahabad", "An associate of Bhagat Singh", "Led the H.S.R.A.", "A handlebar moustache",
      "Took a surname meaning 'free'", "Linked to the Kakori raid", "Shot himself with his last bullet", "A martyr at 24"
    ],
    explanation: "Chandrashekhar Azad was born on 23 July 1906 (1), an Indian revolutionary (2) who vowed never to be captured alive (3). He died in a 1931 shootout (4) at Alfred Park in Allahabad (5), an associate of Bhagat Singh (6) and leader of the Hindustan Socialist Republican Association (7). He is remembered for his handlebar moustache (8) and for adopting a surname meaning 'free' (9). He was linked to the Kakori train raid (10), and, true to his vow, he shot himself with his last bullet (11), becoming a martyr at just 24 (12)."
  },
  "07-24": {
    category: "Aviation",
    year: 1897,
    answers: ["Amelia Earhart", "Earhart"],
    tiles: [
      "Born in 1897", "First woman to fly the Atlantic solo", "Vanished over the Pacific in 1937", "Flew a Lockheed Electra",
      "Navigator Fred Noonan", "Bound for Howland Island", "From Kansas", "Nicknamed 'Lady Lindy'",
      "A leather flying jacket", "A record-setting aviator", "A mystery never solved", "A pioneer for women in the sky"
    ],
    explanation: "Amelia Earhart was born on 24 July 1897 (1). She was the first woman to fly solo across the Atlantic (2) and vanished over the Pacific in 1937 (3) while flying a Lockheed Electra (4) with navigator Fred Noonan (5), bound for tiny Howland Island (6). She was from Kansas (7), nicknamed 'Lady Lindy' (8), and known for her leather flying jacket (9). A record-setting aviator (10), her disappearance is a mystery never solved (11), and she remains a pioneer for women in the sky (12)."
  },
  "07-25": {
    category: "Indian",
    year: 1875,
    answers: ["Jim Corbett", "Corbett", "Edward James Corbett"],
    tiles: [
      "Born in Nainital, 1875", "Hunted man-eating tigers", "The Champawat tigress", "In the Kumaon hills",
      "A national park bears his name", "Wrote 'Man-Eaters of Kumaon'", "Later a fierce conservationist", "A British-Indian hunter",
      "The leopard of Rudraprayag", "Took up wildlife photography", "Park lies in Uttarakhand", "Turned protector of big cats"
    ],
    explanation: "Jim Corbett was born in Nainital in 1875, on 25 July (1). He hunted man-eating tigers (2), most famously the Champawat tigress (3), in the Kumaon hills (4). India's oldest national park bears his name (5); he wrote 'Man-Eaters of Kumaon' (6) and later became a fierce conservationist (7). A British-Indian hunter (8), he also tracked the leopard of Rudraprayag (9), took up wildlife photography (10), and the park named after him lies in Uttarakhand (11). In time he turned from hunter into a protector of big cats (12)."
  },
  "07-26": {
    category: "Indian History",
    year: 1999,
    answers: ["Kargil War", "Kargil", "Kargil Vijay Diwas", "Kargil conflict"],
    tiles: [
      "A 1999 conflict", "Fought against Pakistan", "High in Ladakh's peaks", "Codenamed Operation Vijay",
      "Tiger Hill was recaptured", "Captain Vikram Batra's valour", "Intruders along the LOC", "Victory declared on 26 July",
      "The Drass sector", "Bofors guns in action", "A high-altitude war", "'Yeh Dil Maange More'"
    ],
    explanation: "The Kargil War was a 1999 conflict (1) fought between India and Pakistan (2) high in the peaks of Ladakh (3). India's response was codenamed Operation Vijay (4); Tiger Hill was recaptured (5), and Captain Vikram Batra became a hero for his valour (6). Intruders had crossed the Line of Control (7), and victory was declared on 26 July, now Kargil Vijay Diwas (8). Fierce fighting raged in the Drass sector (9), Bofors artillery guns were used to great effect (10), and the brutal high-altitude war (11) is remembered alongside Batra's war cry 'Yeh Dil Maange More' (12)."
  },
  "07-27": {
    category: "Indian Politics",
    year: 2015,
    answers: ["APJ Abdul Kalam", "Abdul Kalam", "Kalam", "A P J Abdul Kalam"],
    tiles: [
      "Died on 27 July 2015", "India's 'Missile Man'", "The 11th President of India", "Worked at ISRO and DRDO",
      "Born in Rameswaram", "Led work on Agni and Prithvi", "Awarded the Bharat Ratna", "Wrote 'Wings of Fire'",
      "Called the 'People's President'", "Linked to Pokhran-II", "Collapsed while lecturing", "Loved teaching students"
    ],
    explanation: "A.P.J. Abdul Kalam died on 27 July 2015 (1). Known as India's 'Missile Man' (2), he served as the 11th President of India (3) after a career at ISRO and DRDO (4). He was born in Rameswaram (5), led work on the Agni and Prithvi missiles (6), and was awarded the Bharat Ratna (7). He wrote the autobiography 'Wings of Fire' (8), was called the 'People's President' (9), and was a key figure behind the 1998 Pokhran-II nuclear tests (10). He collapsed while delivering a lecture in Shillong (11) and was devoted to teaching students (12)."
  },
  "07-28": {
    category: "Author",
    year: 1866,
    answers: ["Beatrix Potter", "Potter"],
    tiles: [
      "Born in 1866", "Created a mischievous rabbit", "Mr McGregor's garden", "Set in England's Lake District",
      "Also studied fungi", "Self-published her first tale", "Jemima Puddle-Duck", "Small books for small hands",
      "Both author and illustrator", "Flopsy, Mopsy and Cottontail", "Left land to the National Trust", "A blue-jacketed bunny"
    ],
    explanation: "Beatrix Potter was born on 28 July 1866 (1). She created the mischievous Peter Rabbit (2), who raids Mr McGregor's garden (3), in stories set near England's Lake District (4). She was also a keen student of fungi (5) and self-published her first tale (6). Her characters include Jemima Puddle-Duck (7); she made small books sized for small hands (8) and was both author and illustrator (9). Peter's siblings are Flopsy, Mopsy and Cottontail (10); she left much of her land to the National Trust (11), and her most famous creation is a bunny in a little blue jacket (12)."
  },
  "07-31": {
    category: "Author",
    year: 1965,
    answers: ["JK Rowling", "J K Rowling", "Joanne Rowling", "Rowling"],
    tiles: [
      "Born in 1965", "Created a boy wizard", "Idea on a delayed train", "Rejected by 12 publishers",
      "Wrote in Edinburgh cafés", "A school called Hogwarts", "Pen name Robert Galbraith", "Shares her hero's birthday",
      "First book in 1997", "A lightning-bolt scar", "Published by Bloomsbury", "Once a billionaire author"
    ],
    explanation: "J.K. Rowling was born on 31 July 1965 (1) and created a boy wizard (2). The idea came to her on a delayed train from Manchester to London (3); the manuscript was rejected by about a dozen publishers (4) and much of it was written in Edinburgh cafés (5). Her wizarding school is Hogwarts (6); she writes crime novels under the pen name Robert Galbraith (7). Her hero Harry Potter shares her 31 July birthday (8). The first book appeared in 1997 (9); the hero bears a lightning-bolt scar (10). Bloomsbury published her (11), and her success briefly made her a billionaire author (12)."
  },
  "08-16": {
    category: "Musician",
    year: 1958,
    answers: ["Madonna", "Madonna Ciccone"],
    tiles: [
      "Born in 1958", "Crowned 'Queen of Pop'", "'Like a Virgin'", "'Vogue'",
      "A famous cone bra", "From Michigan", "Reinvention after reinvention", "'Material Girl'",
      "Wed Sean Penn, then Guy Ritchie", "A 1989 'Prayer' controversy", "Named after her mother", "Best-selling female artist"
    ],
    explanation: "Madonna was born on 16 August 1958 (1) and is crowned the 'Queen of Pop' (2). Her hits include 'Like a Virgin' (3) and 'Vogue' (4); Jean Paul Gaultier gave her the famous cone bra (5). She grew up in Michigan (6) and is known for constant reinvention (7). She is the 'Material Girl' (8), was married to Sean Penn and later Guy Ritchie (9), and stirred controversy with 1989's 'Like a Prayer' (10). She was named after her mother (11) and is the best-selling female recording artist of all time (12)."
  },
  "08-29": {
    category: "Musician",
    year: 1958,
    answers: ["Michael Jackson", "MJ", "Michael Joseph Jackson"],
    tiles: [
      "Born in Gary, Indiana", "Led a family group of five", "'Thriller'", "The moonwalk",
      "Crowned 'King of Pop'", "A single sequined glove", "A ranch called Neverland", "Motown beginnings",
      "'Billie Jean'", "Produced by Quincy Jones", "'Bad' and 'Off the Wall'", "Died in 2009"
    ],
    explanation: "Michael Jackson was born in Gary, Indiana on 29 August 1958 (1) and first sang in the family group the Jackson 5 (2). His 'Thriller' is the best-selling album ever (3); he popularised the moonwalk (4) and was crowned the 'King of Pop' (5). His look featured a single sequined glove (6) and his home was the Neverland ranch (7). He began at Motown (8), topped charts with 'Billie Jean' (9), worked with producer Quincy Jones (10), and released 'Bad' and 'Off the Wall' (11) before his death in 2009 (12)."
  },
  "09-05": {
    category: "Musician",
    year: 1946,
    answers: ["Freddie Mercury", "Mercury", "Farrokh Bulsara"],
    tiles: [
      "Born in Zanzibar, 1946", "Fronted a band named Queen", "'Bohemian Rhapsody'", "A four-octave voice",
      "Stole the show at Live Aid", "Born Farrokh Bulsara", "'We Are the Champions'", "Wembley, 1986",
      "A prominent overbite", "He chose the band's regal name", "Roamed the stage at the piano", "Died in 1991"
    ],
    explanation: "Freddie Mercury was born in Zanzibar on 5 September 1946 (1) and fronted the band Queen (2). He wrote 'Bohemian Rhapsody' (3) and possessed a four-octave vocal range (4). He famously stole the show at Live Aid in 1985 (5). Born Farrokh Bulsara (6), he sang 'We Are the Champions' (7) and headlined Wembley in 1986 (8). He had a prominent overbite (9), chose the band's regal name himself (10), and prowled the stage and piano as a showman (11) until his death in 1991 (12)."
  },
  "09-15": {
    category: "Author",
    year: 1890,
    answers: ["Agatha Christie", "Christie"],
    tiles: [
      "Born in 1890", "A fastidious Belgian detective", "A spinster sleuth", "'Murder on the Orient Express'",
      "'And Then There Were None'", "The play 'The Mousetrap'", "An 11-day disappearance", "From Torquay, Devon",
      "Made a Dame", "Best-selling novelist ever", "Queen of the whodunit", "Poison and country houses"
    ],
    explanation: "Agatha Christie was born on 15 September 1890 (1). Her detectives include the fastidious Belgian Hercule Poirot (2) and the spinster sleuth Miss Marple (3). Her novels include 'Murder on the Orient Express' (4) and 'And Then There Were None' (5), and her play 'The Mousetrap' is the world's longest-running (6). In 1926 she vanished for 11 days (7). She came from Torquay in Devon (8), was made a Dame (9), and is the best-selling novelist of all time (10), the 'Queen of the whodunit' (11) whose plots favour poison and country houses (12)."
  },
  "10-23": {
    category: "Athlete",
    year: 1940,
    answers: ["Pele", "Pelé", "Edson Arantes do Nascimento"],
    tiles: [
      "Born in Brazil, 1940", "Three World Cup wins", "'The beautiful game'", "Claimed over 1,000 goals",
      "Starred for Santos", "Born Edson Arantes", "Later joined the New York Cosmos", "Wore number 10",
      "A world champion at 17", "From Tres Coracoes", "Hailed 'King of Football'", "Scored in the 1970 final"
    ],
    explanation: "Pele was born in Brazil on 23 October 1940 (1) and won three World Cups, in 1958, 1962 and 1970 (2). He called football 'the beautiful game' (3) and claimed over 1,000 career goals (4). He starred for Santos (5), was born Edson Arantes do Nascimento (6), and later joined the New York Cosmos (7). He wore the number 10 shirt (8), became a world champion at just 17 (9), came from the town of Tres Coracoes (10), was hailed 'King of Football' (11), and scored in the 1970 World Cup final (12)."
  },
  "11-09": {
    category: "History",
    year: 1989,
    answers: ["Berlin Wall", "The Berlin Wall", "Fall of the Berlin Wall"],
    tiles: [
      "9 November 1989", "Hammers and chisels", "Stood for 28 years", "Divided East and West",
      "A concrete barrier", "A Cold War symbol", "Checkpoint Charlie", "Reagan: 'tear it down'",
      "Crowds danced on top", "Germany then reunited", "Near the Brandenburg Gate", "It fell, it did not rise"
    ],
    explanation: "The Berlin Wall was opened on 9 November 1989 (1), as crowds attacked it with hammers and chisels (2). It had stood for 28 years (3), dividing the city into East and West (4) as a concrete barrier (5) and the great symbol of the Cold War (6). Its famous crossing was Checkpoint Charlie (7); two years earlier Reagan had demanded 'Tear down this wall' (8). Crowds danced on top of it (9), Germany reunified in 1990 (10), it ran past the Brandenburg Gate (11), and it is remembered for falling, not rising (12)."
  },
  "11-30": {
    category: "Author",
    year: 1835,
    answers: ["Mark Twain", "Twain", "Samuel Clemens", "Samuel Langhorne Clemens"],
    tiles: [
      "Born in 1835", "Wrote of Huckleberry Finn", "Wrote of Tom Sawyer", "Life on the Mississippi",
      "Born Samuel Clemens", "Wore a white suit", "Came and went with a comet", "From Missouri",
      "'Reports of my death are exaggerated'", "A riverboat pen name", "'Father of American literature'", "Famously quotable wit"
    ],
    explanation: "Mark Twain was born on 30 November 1835 (1). He created Huckleberry Finn (2) and Tom Sawyer (3) and wrote of life on the Mississippi (4). His real name was Samuel Clemens (5); he favoured a white suit (6) and was born and died with Halley's Comet, in 1835 and 1910 (7). He hailed from Missouri (8) and quipped that 'reports of my death are greatly exaggerated' (9). His pen name comes from a riverboat call meaning two fathoms deep (10). He is often called the 'father of American literature' (11) and remains endlessly quotable (12)."
  },
  "12-25": {
    category: "Scientist",
    year: 1642,
    answers: ["Isaac Newton", "Newton", "Sir Isaac Newton"],
    tiles: [
      "Born on Christmas", "A falling apple", "Three laws of motion", "Defined gravity",
      "Premature and tiny", "Calculus, with a rival", "A reflecting telescope", "The 'Principia'",
      "Ran the Royal Mint", "Split light with a prism", "Knighted in 1705", "By the old calendar, 1642"
    ],
    explanation: "Isaac Newton was born on Christmas Day (1); legend says a falling apple sparked his insight (2). He set out three laws of motion (3) and defined universal gravitation (4). Born premature and tiny (5), he co-invented calculus alongside his rival Leibniz (6), built the first reflecting telescope (7), and wrote the 'Principia' (8). He later ran the Royal Mint (9), split white light with a prism (10), was knighted in 1705 (11), and was born in 1642 under the old Julian calendar still used in England (12)."
  }
};
