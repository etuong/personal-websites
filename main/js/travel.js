
$(function () {
    var template = `
    <div class="card mb-4">
    <img class="card-img-top" src="images/sites/$pic">
    <h5 class="card-title" style="background-color:$bgColor;color:white;padding:2px 10px;">$title</h5>
    <p class="card-text" style="font-size:12px;padding:5px 10px;">$desc</p></div>`;

  var sites = [
    {
      lat: 48.856614,
      lon: 2.352222,
      flag: 'france.png',
      title: 'Paris, France',
      html: template.replace('$pic', 'paris.jpg')
        .replace('$title', 'Paris, France')
        .replace('$bgColor', '#313d52')
        .replace('$desc', 'This city does not need any introduction. Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city. The city is also known for its high-quality gastronomy and the terraces of its cafés.')
    },
    {
      lat: 41.902916,
      lon: 12.453389,
      flag: 'vatican_city.png',
      title: 'Vatican City',
      html: template.replace('$pic', 'vatican.jpg')
        .replace('$title', 'asdf')
        .replace('$bgColor', '#c58459')
        .replace('$desc', 'Vatican City, a city-state surrounded by Rome, Italy, is the headquarters of the Roman Catholic Church. It\'s home to the Pope and a trove of iconic art and architecture. Its Vatican Museums house ancient Roman sculptures as well as Renaissance frescoes in the Raphael Rooms and the Sistine Chapel, famous for Michelangelo\'s ceiling. Fun fact, the Vatican City is the smallest country in the world!')
    },
    {
      lat: 34.2666656,
      lon: 108.9333296,
      flag: 'china.png',
      title: 'Xian, China',
      html: template.replace('$pic', 'xian.jpg')
        .replace('$title', 'Xian, China')
        .replace('$bgColor', '#e69900')
        .replace('$desc', 'Xian is the capital of Shaanxi Province, China. It is also the oldest of the four great ancient capitals the other three being Beijing, Nanjing, and Luoyang. Xian is the starting point of the Silk Road and home to the Terracotta Army of Emperor Qin Shi Huang. A lot of muslims live here due to the influence of the silk age, and Muslim Quarter is a must visit! Other attractions include the Big Goose Pagoda, City Wall, and drum/bell towers.')
    },
    {
      lat: -41.4545,
      lon: 145.9707,
      flag: 'australia.png',
      title: 'Tasmania, Australia',
      html: template.replace('$pic', 'tasmania.jpg')
        .replace('$title', 'Tasmania, Australia')
        .replace('$bgColor', '#baa884')
        .replace('$desc', 'Tasmania is Australia\'s only island state and the smallest land area and population. About 12,000 years ago sea level rises and separated Tasmania from the mainland. You\'ll see lots of brick prisons built by convicts themselves. These convicts overpopulated British\'s prisons and were sent to Australia when the continent was found. A roadtrip from Hobart to Launceston will give you an idea of how peaceful and beautiful this island state is.')
    },
    {
      lat: 52.740178,
      lon: 6.077978,
      flag: 'netherlands.png',
      title: 'Giethoorn, Netherlands',
      html: template.replace('$pic', 'giethoorn.jpg')
        .replace('$title', 'Giethoorn, Netherlands')
        .replace('$bgColor', '#95a820')
        .replace('$desc', 'Giethoorn with its many waterways and bridges is well-known as the Venice of the Netherlands. It is the famous, idyllic village without streets in the northernmost tip of Overijssel. This fairy tale destination is about 2 hours away from Amsterdam. I highly recommend this day trip! 10 out of 10!')
    },
    {
      lat: 38.668997324,
      lon: 34.836829986,
      flag: 'tr.png',
      title: 'Cappadocia, Turkey',
      html: template.replace('$pic', 'cappadocia.jpg')
        .replace('$title', 'Cappadocia, Turkey')
        .replace('$bgColor', '#9e7351')
        .replace('$desc', 'Cappadocia is an area in Central Anatolia in Turkey best known for its unique moon-like landscape, underground cities, cave churches and houses carved in the rocks. Its valley, canyon, hills and unusual rock formation created as a result of the eroding rains and winds of thousands of years of the level, lava-covered plain located between the volcanic mountains. Staying in one of those cave hotels is a must! Make sure to get up super early to watch the hot air ballons over the sunrise!')
    },
    {
      lat: 47.6062,
      lon: -122.3321,
      flag: 'usa.png',
      title: 'Seattle, Washington, USA',
      html: template.replace('$pic', 'seattle.jpg')
        .replace('$title', 'Seattle, Washington, USA')
        .replace('$bgColor', 'darkgreen')
        .replace('$desc', 'Seattle is a very hip, artistic, and modern city with great prominence in technology. Summer is absolutely the best time to visit. There is a great varity of activities to do including eating and trying delicious food at the Pike Place market and observing the city on the Space Needle.')
    },
    {
      lat: 39.922478,
      lon: 116.443710,
      flag: 'china.png',
      title: 'Beijing, China',
      html: template.replace('$pic', 'beijing.jpg')
        .replace('$title', 'Beijing, China')
        .replace('$bgColor', '#ddd9d5')
        .replace('$desc', 'Beijing, also known as Peking, is the capital of the People\'s Republic of China. Beijing has been the political center of the country for much of the past eight centuries. The name Beijing, which means "Northern Capital" was applied to the city in 1403 during the Ming Dynasty to distinguish the city from Nanjing (the "Southern Capital"). Some must visit attractions are Great wall and Forbidden City.')
    },
    {
      lat: 52.520008,
      lon: 13.404954,
      flag: 'germany.png',
      title: 'Berlin, Germany',
      html: template.replace('$pic', 'berlin.jpg')
        .replace('$title', 'Berlin, Germany')
        .replace('$bgColor', '#decb9c')
        .replace('$desc', 'Berlin is the capital city of Germany and one of the 16 states of the Federal Republic of Germany. Berlin is known for many things, but during my visit, some of the things that stood out for me were its historical associations as the German capital and history, internationalism and tolerance, architecture and street art, and numerous museums, bars, and cafes. The reunification of the country after the fall of the Berlin Wall in 1989 restored classical and medieval buildings as well as introduced ultramodern architecture (Potsdamer Platz).')
    },
    {
      lat: 34.0522,
      lon: -118.2437,
      flag: 'usa.png',
      title: 'Los Angeles, California, USA',
      html: template.replace('$pic', 'losangeles.jpg')
        .replace('$title', 'Los Angeles, California, USA')
        .replace('$bgColor', 'green')
        .replace('$desc', 'Aah the city of angels! My beautiful hometown offers essentially everything from sun-bathing beaches to grand mountainous hikes. There is just about every ethnicity and nationality here and there are enclaves for everyone including Little Italy and Chinatown. Hollywood and Santa Monica beach are a must visit and make sure to check out some rooftop bars in downtown!')
    },
    {
      lat: 21.3069,
      lon: -157.8583,
      flag: 'usa.png',
      title: 'Oahu, Hawaii, USA',
      html: template.replace('$pic', 'hawaii.jpg')
        .replace('$title', 'Oahu, Hawaii, USA')
        .replace('$bgColor', '#bcb895')
        .replace('$desc', 'Situated nearly at the center of the north Pacific Ocean, Hawaii marks the northeast corner of Polynesia. While it was once a major hub for the whaling, sugar and pineapple industries, it is now economically dependent on tourism and the U.S. military. The natural beauty of the islands continues to be one of Hawaii\'s greatest assets. Honolulu is the state\'s capital, largest city, and cultural hub.')
    },
    {
      lat: 52.370216,
      lon: 4.895168,
      flag: 'netherlands.png',
      title: 'asdf',
      html: template.replace('$pic', 'amsterdam.jpg')
        .replace('$title', 'Amsterdam, Netherlands')
        .replace('$bgColor', '#dbd5c0')
        .replace('$desc', 'Amsterdam is known for its beautiful canals, quirky architecture, and lively nightlife such as the Red Light District. It is also a great place to find Dutch art and culture, and the city has a rich history that dates back to the 13th century. This city has so much to offer and is very walkable and bike friendly. Make sure to rent a bike to explore Zaanse Schans!')
    },
    {
      lat: 13.3550,
      lon: 103.8552,
      flag: 'cambodia.png',
      title: 'Siem Reap, Cambodia',
      html: template.replace('$pic', 'siemreap.jpg')
        .replace('$title', 'Siem Reap, Cambodia')
        .replace('$bgColor', '#ba695e')
        .replace('$desc', 'The town Siem Reap (literally means "Siam Defeated") in northern Cambodia is the primary gateway for the Angkor Archaeological Park. The park stretches over some 400 square kilometers including forested area and contains the magnificent remains of several capitals of the Khmer Empire of the 9th to the 15th centuries. The passes are for one day, three days, or 7 days. I highly recommend exploring at least 3 days as one day is simply not enough and 7 days will make you temple sick. Also, be prepared to try some of the most delicious food in the world!')
    },
    {
      lat: 30.5728,
      lon: 104.0668,
      flag: 'china.png',
      title: 'Chengdu, China',
      html: template.replace('$pic', 'chengdu.jpg')
        .replace('$title', 'Chengdu, China')
        .replace('$bgColor', '#ba8c4b')
        .replace('$desc', 'Chengdu is the capital of China\'s Sichuan province. It is one of the three most populous cities in Western China (the other two are Chongqing and Xi\'an). Chengdu has a reputation of being a very "chilled" and "relaxed" prosperous city in China. I was told that people in Chengdu are so calm that in the recent major flood they would play Mahjong standing! Chengdu is known to be cloudy most of the time but I absolutely adore this city. It\'s definitely one of my favorite cities in China!')
    },
    {
      lat: 36.3932,
      lon: 25.4615,
      flag: 'gr.png',
      title: 'Santorini, Greece',
      html: template.replace('$pic', 'santorini.jpg')
        .replace('$title', 'Santorini, Greece')
        .replace('$bgColor', '#56688d')
        .replace('$desc', 'Santorini is a Greek volcanic island famous for dramatic views and stunning sunsets. The picturesque towns of cubic white-washed homes and blue-domed churches are some of the most beautiful views I have ever seen in my life. You simply cannot take any bad photos here, it is just simply not possible. Definitely bring a partner here as it is very romantic and a perfect place to propose! ')
    },
    {
      lat: 41.385064,
      lon: 2.173404,
      flag: 'spain.png',
      title: 'Barcelona, Spain',
      html: template.replace('$pic', 'barcelona.jpg')
        .replace('$title', 'Barcelona, Spain')
        .replace('$bgColor', '#357fda')
        .replace('$desc', 'Barcelona is famous for its outstanding football team, stunning architecture, lively nightlife, sandy beaches, and world-class cuisine. Not to mention a vibrant cultural heritage and colourful neighbourhood festivals that attract visitors from around the world. You need to be eating tapas everyday and drinking sangria! Oh, and check out all the Gaudi architecture.')
    },
    {
      lat: 51.20998,
      lon: 3.220402,
      flag: 'belgium.png',
      title: 'Bruges, Belgium',
      html: template.replace('$pic', 'bruges.jpg')
        .replace('$title', 'Bruges, Belgium')
        .replace('$bgColor', '#3b4749')
        .replace('$desc', 'With beautiful squares surrounded by gingerbread houses and cobbled alleys running alongside pretty canals, Bruges is a city adored by lovebirds. They flock to the Belgian town for its picturesque parks, old world hotels and sentimental legends. Bruges is only an hour away from Brussels and is a must stop! This is one of my favorite places in Europe. It is so quaint and beautiful!')
    },
    {
      lat: 41.8781,
      lon: -87.6298,
      flag: 'usa.png',
      title: 'Chicago, Illinois, USA',
      html: template.replace('$pic', 'chicago.jpg')
        .replace('$title', 'Chicago, Illinois, USA')
        .replace('$bgColor', '#76928d')
        .replace('$desc', 'Chicago is a vibrant metropolitan city and home of the blues and jazz. It is arguably where the modern architecture movement started. Chicago is known for many things, including its picturesque skyline, theaters, and world-class museums. The city is called the "White City" because of its restoration after the Chicago Fire in the late 19th century and also the "Windy City" because of its strong winds in the winter. Make sure to check out the Millenium Park and Cloud Gate!')
    },
    {
      lat: 49.282730,
      lon: -123.120735,
      flag: 'canada.png',
      title: 'Vancouver, Canada',
      html: template.replace('$pic', 'vancouver.jpg')
        .replace('$title', 'Vancouver, British Columbia, CA')
        .replace('$bgColor', '#ffc898')
        .replace('$desc', 'Vancouver is among the world\'s most beautiful cities. It\'s also often considered one of the most liveable, thanks to its well-balanced mix of modern urban features and magnificent natural surroundings. In my opinion, Vancouver is the closest it gets to Asia in North America due to its large Asian population! The Capliano bridge and Night Market are a must!')
    },
    {
      lat: 25.2048,
      lon: 55.2708,
      flag: 'uae.png',
      title: 'Dubai, United Arab Emirates',
      html: template.replace('$pic', 'dubai.jpg')
        .replace('$title', 'Dubai, United Arab Emirates')
        .replace('$bgColor', '#6b9596')
        .replace('$desc', 'I love Dubai! is the largest and most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai. UAE is a sovereign constitutional monarchy that is actually a federation made up of seven emirates. My impression is that Dubai is very wealthy due to its rich oil resources, and what do you do when you have all this money? Well, you can build the biggest water fountain, you can build the biggest structure, you can build the biggest mall, or hey may you can build an artificial island? Well, in Dubai you can have all these! There is just a little bit of everything for everyone. Dubai is definitely one of my top 10 destinations to visit!')
    },
    {
      lat: 38.9072,
      lon: -77.0369,
      flag: 'usa.png',
      title: 'District of Columbia, USA',
      html: template.replace('$pic', 'dc.jpg')
        .replace('$title', 'District of Columbia, USA')
        .replace('$bgColor', '#e69900')
        .replace('$desc', 'Washington DC is the capital of the United States and the seat of its three branches of government, has a collection of free, public museums unparalleled in size and scope throughout the history of mankind, and the lion\'s share of the nation\'s most treasured monuments and memorials. The bulk of the main attractions is at the National Mall and the Smithsonian is a can\'t-miss. District of Columbia is not a city or state, rather it\'s an artificial body born of politics, by politics, and for politics.')
    },
    {
      lat: 32.7157,
      lon: -117.1611,
      flag: 'usa.png',
      title: 'San Diego, California, USA',
      html: template.replace('$pic', 'sandiego.jpg')
        .replace('$title', 'San Diego, California, USA')
        .replace('$bgColor', '#ada39a')
        .replace('$desc', 'When people think of San Diego, words and descriptions like beautiful weather and sunny beaches come in mind. Indeed, San Diego is famous for its all-round weather in the 60s and friendly people. San Diego County is made up of 18 incorporate cities and towns along with other charismatic neighborhoods and communities, such as Carlsbad, Coronado, and La Jolla. Because it houses University of California, San Diego, the city is a major hub for biotechnology companies.')
    },
    {
      lat: 43.769562,
      lon: 11.255814,
      flag: 'italy.png',
      title: 'Florence and Pisa, Italy',
      html: template.replace('$pic', 'florence.jpg')
        .replace('$title', 'Florence and Pisa, Italy')
        .replace('$bgColor', '#aaa292')
        .replace('$desc', 'Florence is the capital of the region of Tuscany in Italy, with a population of about 366,500. The city is considered a cultural, artistic and architectural gem. Florence was the birthplace of the Italian Renaissance. Politically, economically, and culturally it was the most important city in Europe for around 250 years; from some time before 1300 until the early 1500s. Pisa is a city in Tuscany, Italy with a population of some 90,000 people. The city is perhaps best known for the world famous Leaning Tower. Pisa is very easily accessible from Florence via an hour train ride.')
    },
    {
      lat: 41.0082,
      lon: 28.9784,
      flag: 'tr.png',
      title: 'Istanbul, Turkey',
      html: template.replace('$pic', 'istanbul.jpg')
        .replace('$title', 'Istanbul, Turkey')
        .replace('$bgColor', '#e29c48')
        .replace('$desc', 'Istanbul is Turkey\'s most populous city as well as its cultural and financial hub. Istanbul is a city where you can have a European experience with an Islamic grace. Spires and domes of mosques, medival architecture dominate the skyline. I recommend an itinerary of 2-3 days to check out the Blue Mosque and Hagia Sophia. For a more authentic Turkish experience, visit a hamam which is a Turkish bathhouse where a massage feels like a brutal beatdown.')
    },
    {
      lat: 50.85034,
      lon: 4.35171,
      flag: 'belgium.png',
      title: 'Brussels, Belgium',
      html: template.replace('$pic', 'brussels.jpg')
        .replace('$title', 'Brussels, Belgium')
        .replace('$bgColor', '#56708a')
        .replace('$desc', 'Belgium is world-famous for its chocolate, waffles, beer, and its national football team, the Red Devils. Belgium is also home to NATO headquarters and to the EU Commission and European Parliament. Brussels is often referred to as the capital of the EU. Not exactly my favorite destination but it still has a lot to offer. Make sure to do a day trip to Ghent and Bruges!')
    },
    {
      lat: 54.3520,
      lon: 18.6466,
      flag: 'poland.png',
      title: 'Gdansk, Poland',
      html: template.replace('$pic', 'gdansk.jpg')
        .replace('$title', 'Gdansk, Poland')
        .replace('$bgColor', '#ee8669')
        .replace('$desc', 'Gdansk is a city in Poland on the Baltic Sea and the capital of Pomerania. World War II was ignited by a dispute over the control of the city with the death of 15 Polish soldiers. Gdansk played a vital role in the movement that ended the country\'s communism that was led by Lech Wałęsa. Together with Gydnia and Sopot, the form a metropolitan area called the Tricity. Weather changes drastically on seasons, whereas spring/summer are pleasant with plenty of sunshine, fall/winter are blasted with cold wind and foggy sky.')
    },
    {
      lat: 27.664827,
      lon: -81.515755,
      flag: 'usa.png',
      title: 'Orlando, Florida, USA',
      html: template.replace('$pic', 'orlando.jpg')
        .replace('$title', 'Orlando, Florida, USA')
        .replace('$bgColor', '#76928d')
        .replace('$desc', 'Florida is world-renowned for its beach resorts, amusement parks, warm and sunny climate, and nautical recreation; attractions such as Walt Disney World, the Kennedy Space Center, and Miami Beach draw tens of millions of visitors annually. I have been to so many places in the world but this definitely the capital of amusement parks!')
    },
    {
      lat: 22.3964,
      lon: 114.1095,
      flag: 'china.png',
      title: 'Hong Kong, China',
      html: template.replace('$pic', 'hongkong.jpg')
        .replace('$title', 'Hong Kong, China')
        .replace('$bgColor', '#85772d')
        .replace('$desc', 'This former British colony is one of the major tourism destinations in China. Hong Kong has a different political system from mainland China under the principle of "one country, two systems." It has the longest life expectancy of any country in the world from 2012 and one of the highest per capita incomes in the world. I recommend a visit of mininum 4 days as Hong Kong has a lot to offer including the Lantau island where the Giant Buddha lives and Victoria Peak where you can see the amazing skyline.')
    },
    {
      lat: 32.7767,
      lon: -96.7970,
      flag: 'usa.png',
      title: 'Dallas, Texas, USA',
      html: template.replace('$pic', 'dallas.jpg')
        .replace('$title', 'Dallas, Texas, USA')
        .replace('$bgColor', '#274c5d')
        .replace('$desc', 'Dallas is the ninth-largest city and part of the fourth-largest metropolitan area in the nation. Did you know that the frozen margarita machine was invented in Dallas. What is really cool about this metropolitan is that it also includes Fort Worth and Arlington, making the area more touristy. Many companies are headquarted around here such as American Airlines and Exxon Mobil.')
    },
    {
      lat: 55.6761,
      lon: 12.5683,
      flag: 'dk.png',
      title: 'Copenhagen, Denmark',
      html: template.replace('$pic', 'copenhagen.jpg')
        .replace('$title', 'Copenhagen, Denmark')
        .replace('$bgColor', '#98b9e2')
        .replace('$desc', 'Copenhagen is big enough to be a metropolis with shopping, culture and nightlife par excellence, yet still small enough to be intimate, safe and easy to navigate.  Originally known as a fishing town, it is now a place to visit for exquisite cuisines and modern lifestyle. Dyrehavsbakken or Bakken is the world\'s oldest amusement park. In fact, the second biggest is also here as well! This city is extremely bike friendly and more than half of the populate commute by bike.')
    },
    {
      lat: 22.1987,
      lon: 113.5439,
      flag: 'china.png',
      title: 'Macau, China',
      html: template.replace('$pic', 'macau.jpg')
        .replace('$title', 'Macau, China')
        .replace('$bgColor', '#4e4e50')
        .replace('$desc', 'Macau was an overseas territory of Portugal and in 1999 became independent under the Special Administrative Region (SAR) of China. Macau is best known as Asia\'s largest destination for gambling taking in even more revenue than Las Vegas. Because of its Portuguese influence, you will feel like you\'re in Europe with its architecture and sign orientations. However, the Portuguese and Macanese population is insignifcant compare to the Chinese. The Macau Peninsula (where most tourists go) is best experienced by foot. Make sure to check out the casinos and San Paulo cathedral!')
    },
    {
      lat: 13.7563,
      lon: 100.5018,
      flag: 'thailand.png',
      title: 'Bangkok, Thailand',
      html: template.replace('$pic', 'bangkok.jpg')
        .replace('$title', 'Bangkok, Thailand')
        .replace('$bgColor', '#906e24')
        .replace('$desc', 'Bangkok is the capital of Thailand.  Its high-rise buildings, heavy traffic congestion, intense heat and naughty nightlife makes it one of Asia\'s most cosmopolitan cities with magnificent temples and palaces, authentic canals, busy markets and a vibrant nightlife that has something for everyone. There is just so much to do here so I recommend at least 3 full days. Check out the Grand Palace and if time permits, do a day trip to Ayutthaya!')
    },
    {
      lat: 5.4164,
      lon: 100.3327,
      flag: 'malaysia.png',
      title: 'Penang, Malaysia',
      html: template.replace('$pic', 'penang.jpg')
        .replace('$title', 'Penang, Malaysia')
        .replace('$bgColor', '#b5ad9b')
        .replace('$desc', 'Penang comprises of Penang Island, where the capital city of George Town is located, and a strip of mainland Peninsula named Seberang Perai. It\'s capital is Georgetown, a UNESCO World Heritage Site. Georgetown is touted as the food capital of Malaysia, Georgetown offers an amazing array of street food, blending Malay, Chinese, Indian, Thai and European influences. It is a town with a laid back culture and assam food')
    },
    {
      lat: 3.1390,
      lon: 101.6869,
      flag: 'malaysia.png',
      title: 'Kuala Lumpur, Malaysia',
      html: template.replace('$pic', 'kl.jpg')
        .replace('$title', 'Kuala Lumpur, Malaysia')
        .replace('$bgColor', '#a99e95')
        .replace('$desc', 'Kuala Lumpur is the federal capital and the largest city in Malaysia. It has many interesting attractions; like Merdeka Square, Chinatown, Petronas Twin Towers and much more. At first impression, it is nowhere near as clean as its neighbor Singapore, and you will no doubt see a cockroach or two, but its rich culture and history make it a must visit at least once in a lifetime!')
    },
    {
      lat: 19.432608,
      lon: -99.133209,
      flag: 'mexico.png',
      title: 'Mexico City, Mexico',
      html: template.replace('$pic', 'mexico_city.jpg')
        .replace('$title', 'Mexico City, Mexico')
        .replace('$bgColor', '#b6b4a8')
        .replace('$desc', 'Built on the ruins of the ancient Aztec city of Tenochtitlan, Mexico City is one of the oldest and largest cities in the Americas. Colonial architecture, iconic artwork, spicy cuisine, and a rich cultural heritage offer visitors an endless array of activities that will satisfy any appetite. There is so much to eat here so be sure to come open minded and hungry!')
    },
    {
      lat: 37.9838,
      lon: 23.7275,
      flag: 'gr.png',
      title: 'Athens, Greece',
      html: template.replace('$pic', 'athens.jpg')
        .replace('$title', 'Athens, Greece')
        .replace('$bgColor', '#c8bdae')
        .replace('$desc', 'Athens is the capital city of Greece. It is in many ways the birthplace of Classical Greece, and therefore of Western civilization. The design of the city is marked by Ottoman, Byzantine and Roman civilizations. Today, greater Athens is by far the economic, political and cultural center of modern Greece. The Acropolis, birthplace of modern Western civilization is the biggest attraction. I suggest to wake up super early to make the hike to the hills and beat the crowds.')
    },
    {
      lat: 48.1351,
      lon: 11.5820,
      flag: 'germany.png',
      title: 'Munich, Germany',
      html: template.replace('$pic', 'munich.jpg')
        .replace('$title', 'Munich, Germany')
        .replace('$bgColor', '#737187')
        .replace('$desc', 'Munich is the capital city of Bavaria. It is famous for its beautiful architecture, fine culture, and the annual Oktoberfest beer celebration which ironally does not start in October. Most of the city famous buildings were bombed in WWII but have been restored including the Rathaus (city hall) and its largest church, the Frauenkirche. Aside from its rich history, it is also the international center piece for engineering and technology as exemplified by worldclass technology and science museums like the Deutsches Museum, BMW Museum.')
    },
    {
      lat: 38.707054,
      lon: -9.135488,
      flag: 'portugal.png',
      title: 'Lisbon, Portugal',
      html: template.replace('$pic', 'lisbon.jpg')
        .replace('$title', 'Lisbon, Portugal')
        .replace('$bgColor', '#546432')
        .replace('$desc', 'Lisbon is famous for its sunny weather, great nightlife, colorful buildings, Fado music, and friendly locals. It is also home to famous landmarks like the Belem Tower and Jerónimos Monastery. As for food, Lisbon is famous for its seafood and Pastéis de Belém, a type of custard tart. I basically ate this and drank sherry and port everyday. Be sure to stop by Sintra for a wonderful day trip!')
    },
    {
      lat: 40.7128,
      lon: -74.0060,
      flag: 'usa.png',
      title: 'New York City, New York, USA',
      html: template.replace('$pic', 'newyork.jpg')
        .replace('$title', 'New York City, New York, USA')
        .replace('$bgColor', '#3c4822')
        .replace('$desc', 'New York (aka the Big Apple) is the most populous city in America. The diversity here is literally the interpretation of the melting pot. NYC is also home to one of the most famous skylines in the world, and possibly the best view is from the Empire State Building. The city has 5 boroughs and its gross product makes up 9 percent of the American economy. While there, make sure to eat the street food, check out the informative and comprehensive museums, and of course spend sparely in Times Square!')
    },
    {
      lat: -39.2378,
      lon: 175.6024,
      flag: 'nz.png',
      title: 'North Island, New Zealand',
      html: template.replace('$pic', 'northnz.jpg')
        .replace('$title', 'North Island, New Zealand')
        .replace('$bgColor', '#070906')
        .replace('$desc', 'North Island is one of the two main islands of New Zealand. It is the world\'s 14th largest island with a population of 3,366,100. With Auckland ("The City of Sails" ) as its largest city, North Island constitutes over 76% of the country\'s population. In contrary to South Island\s beautiful alps and adventures, North Island ranges from lushful sceneries to Lord of the Ring landscape and active volcanic peaks. According to the Māori mythology, the island was created after the demigod Māui\'s brothers chopped a fish he caught during a fishing trip.')
    },
    {
      lat: 50.0755,
      lon: 14.4378,
      flag: 'czech.png',
      title: 'Prague, Czech Republic',
      html: template.replace('$pic', 'prague.jpg')
        .replace('$title', 'Prague, Czech Republic')
        .replace('$bgColor', '#e2cab0')
        .replace('$desc', 'Prague is the capital city and largest city of the Czech Republic and one of the largest cities of Central Europe. It served as the capital of the historic region of Bohemia for centuries. The city is situated about the Vltava River. Prague is known as "The City of Thousand Spires" because of its bridges, cathedrals, gold-tipped towers and church domes. Personally, Prague is one of my favorite destinations and I highly recommend this charming city to anyone that likes a good taste of the medieval period with a kick of fresh and vibrant atmosphere.')
    },
    {
      lat: 41.9028,
      lon: 12.4964,
      flag: 'italy.png',
      title: 'Rome, Italy',
      html: template.replace('$pic', 'rome.jpg')
        .replace('$title', 'Rome, Italy')
        .replace('$bgColor', '#33414c')
        .replace('$desc', 'Rome, or the \'Eternal City\', is the capital and largest city of Italy. It is famous for the Roman Empire, Vatican City, and Trevi Fountains among many more things. Rome is one of the world\'s most visited, famous, influential and beautiful capitals because of its romantic atmosphere, ornate statues and graceful fountains. and millenium-old churches and basilicas. There are so many things to do in this city that never sleeps such as shopping or simply enjoying a shot of expresso! The architecture also bears a high contrast from pompously huge majestic palaces surrounded by tiny alleyways to medival streets with lushful trees.')
    },
    {
      lat: 21.161907,
      lon: -86.851524,
      flag: 'mexico.png',
      title: 'Cancun, Mexico',
      html: template.replace('$pic', 'cancun.jpg')
        .replace('$title', 'Cancun, Mexico')
        .replace('$bgColor', '#619346')
        .replace('$desc', 'Cancun is know for white sand beaches, nightlife, water sports, Mayan ruins, nature, and some of the best all inclusive resorts in the world. These are just a few of the things that bring ten million tourists to Cancun, Mexico every year. If you plan to visit here for more than 5 days, I would recommend getting the GoCity pass!')
    },
    {
      lat: 25.2854,
      lon: 51.5310,
      flag: 'qatar.png',
      title: 'Doha, Qatar',
      html: template.replace('$pic', 'doha.jpg')
        .replace('$title', 'Doha, Qatar')
        .replace('$bgColor', '#6b9596')
        .replace('$desc', 'Doha is the capital and most populous city of the State of Qatar. To me, it is a more quiet destination in the middle east but still has a lot to offer nevertheless. Being in a desert with an extremely hot temperature especially in the summer, most people would opt to chill in the malls. The city, like most other cool cities, have a section called Old Town where it houses historical architecture and landscape, and other section that is newer with state of the art skyline and buildings. Doha is also the educational center of the country and contains the highest preponderance of schools and colleges including a satellite campus to my alma mater, Carnegie Mellon!')
    },
    {
      lat: 10.8231,
      lon: 106.6297,
      flag: 'vietnam.png',
      title: 'Ho Chi Minh, Vietnam',
      html: template.replace('$pic', 'saigon.jpg')
        .replace('$title', 'Ho Chi Minh, Vietnam')
        .replace('$bgColor', '#b6afb7')
        .replace('$desc', 'Ho Chi Minh City (formerly known as Saigon before the fall of Saigon in 1975) is the largest city in Vietnam and the former capital of the Republic of Vietnam . According to TravelTraffic.com, Ho Chi Minh City is ranked 132 on the list of world\'s most expensive cities for expatriate employees. Rich in history, tourists often themselves in museums learning about the country\'s struggles or at the Củ Chi tunnels to experience the war first-handed. As a native, I can also say that street crossing is a nightmare for them (and everyone else for the same matter)!')
    },
    {
      lat: 51.178056,
      lon: -115.571944,
      flag: 'canada.png',
      title: 'Banff, Canada',
      html: template.replace('$pic', 'banff.jpg')
        .replace('$title', 'Banff, Canada')
        .replace('$bgColor', '#57779a')
        .replace('$desc', 'Banff National Park is famous for its surreally coloured lakes, majestic mountains and endless outdoor adventures. Canada\'s first national park and the world\'s third, it has a rich heritage as one of the world\'s most awe-inspiring mountain destinations. I went during non-summer time so I witnessed whiteness and snow at Lake Louise but I hear it is even more beautiful in the summer!')
    },
    {
      lat: 18.7061,
      lon: 98.9817,
      flag: 'thailand.png',
      title: 'Chiang Mai, Thailand',
      html: template.replace('$pic', 'chiangmai.jpg')
        .replace('$title', 'Chiang Mai, Thailand')
        .replace('$bgColor', '#5d5b32')
        .replace('$desc', 'Chiang Mai is a major city in Northern Thailand. It is surrounded by mountains and lush countryside, much greener and quieter than the capital, and has a cosmopolitan air and a significant expat population. In ancient days, it was the capital of the Lanna kingdom. The city walls still exist today and serve as a major attraction with night bazzars and delicious cheap food. This region is also well known for elephant sanctuaries. No visit is complete without giving these elephants a mud bath!')
    },
    {
      lat: 37.7749,
      lon: -122.4194,
      flag: 'usa.png',
      title: 'San Francisco, California, USA',
      html: template.replace('$pic', 'sf.jpg')
        .replace('$title', 'San Francisco, California, USA')
        .replace('$bgColor', '#545456')
        .replace('$desc', 'San Francisco is a major city in California known for its hilly terrain, liberal community, a world famous bridge, and great diversity. After WWII, San Francisco, being the heart of the Bay area, also became the centerpiece for the gay men and hippie movement. The metro system (BART) is very efficient and there are so many things to do such as enjoying a beautiful walk across the Golden Gate Bridge, eating great seafood at the Fisherman\'s Wharf, and hitching a ride on a cable car! San Francisco is definitely a top tourist spot on my list!')
    },
    {
      lat: 37.38264,
      lon: -5.996295,
      flag: 'spain.png',
      title: 'Seville, Spain',
      html: template.replace('$pic', 'seville.jpg')
        .replace('$title', 'Seville, Spain')
        .replace('$bgColor', '#dbb55b')
        .replace('$desc', 'Seville, famous for its flamenco dancing and architectural designs, is the largest city in Southern Spain. It was said to have been built by Hercules himself and its fascinating history makes it one of Spain\'s most intriguing places to visit. What I like about Seville is that it does not bear the overpopulated tourism of that in Barcelona but still has fasincating attractions to check out!')
    },
    {
      lat: -37.8136,
      lon: 144.9631,
      flag: 'australia.png',
      title: 'Melbourne, Australia',
      html: template.replace('$pic', 'melbourne.jpg')
        .replace('$title', 'Melbourne, Australia')
        .replace('$bgColor', '#324a29')
        .replace('$desc', 'Melbourne serves as Australia\'s undisputed cultural capital with Victorian-era architecture, famed cafés, great bars and restaurants, extensive shopping, museums, galleries, theatres, and large parks and gardens. Consistently ranked as the World\'s Most Liveable City, Melbourne is a melting pot for all. I can totally see myself settling here!')
    },
    {
      lat: 1.3521,
      lon: 103.8198,
      flag: 'singapore.png',
      title: 'Singapore',
      html: template.replace('$pic', 'singapore.jpg')
        .replace('$title', 'Singapore')
        .replace('$bgColor', '#7f7a56')
        .replace('$desc', 'Singapore is a city-state in Southeast Asia that was founded as a British trading colony in 1819. Because of its massive increase in wealth, the Republic of Singapore is one of the Four Asian Tigers (the other three are Taiwan, China, and Japan). Singapore is also the world\'s fourth leading financial centre, and its port is one of the five busiest ports in the world. Its English name is derived from the Malay word Singapura, which means Lion City. In my opinion, Singapore is a very vibrant country because it combines a modern taste of skyscrapers and subways with a medley influence of Chinese, Malay and Indian cultures.')
    },
    {
      lat: -45.1527,
      lon: 169.8926,
      flag: 'nz.png',
      title: 'South Island, New Zealand',
      html: template.replace('$pic', 'southnz.jpg')
        .replace('$title', 'South Island, New Zealand')
        .replace('$bgColor', '#954a35')
        .replace('$desc', 'South Island is the larger of the two major islands (the other is North island) of New Zealand. South Island has a third more land than North Island but with a significant smaller population. The island attracted many European settlers in the late 19th century during the gold rush period. Unfortunately, the island was marked by three earthquakes between 2010 and 2011 that tragically ended up with a few hundred deaths and destruction of national landmarks. South Island is known as the "Home of the Adventurers" because of its numerous, adventurous acitivities such as trekking a glacier or jetboating in Queenstown!')
    },
    {
      lat: -33.8688,
      lon: 151.2093,
      flag: 'australia.png',
      title: 'Sydney, Australia',
      html: template.replace('$pic', 'sydney.jpg')
        .replace('$title', 'Sydney, Australia')
        .replace('$bgColor', '#7a8e73')
        .replace('$desc', 'According to WikiTravel, Sydney is the largest, oldest and most cosmopolitan city in Australia with an reputation as one of the world\'s most beautiful and liveable cities. The city stores two of the most iconic structures on the planet - the Sydney Opera House and the Sydney Harbour Bridge. It was named "Sydney" after Thomas Townshend (or 1st Viscount Sydney), a British Home Secretary during the British colonial period of late 18th century. Syndey is also well known for hosting the Olympic Games of the second millenium.')
    },
    {
      lat: 7.9519,
      lon: 98.3381,
      flag: 'thailand.png',
      title: 'Phuket, Thailand',
      html: template.replace('$pic', 'phuket.jpg')
        .replace('$title', 'Phuket, Thailand')
        .replace('$bgColor', '#cbbda0')
        .replace('$desc', 'Phuket is a tourist island in Thailand. It was on one of the major trading routes between India and China in the early days but now enjoys great popularity as a travel destination. Many great films including Leonardo Dicaprio\'s The Beach and James Bond movie were filmed here. Snorkeling and a day trip to an exclusive island is highly recommended. ')
    },
    {
      lat: 42.3314,
      lon: -83.0458,
      flag: 'usa.png',
      title: 'Detroit, Michigan, USA',
      html: template.replace('$pic', 'detroit.jpg')
        .replace('$title', 'Detroit, Michigan, USA')
        .replace('$bgColor', '#545456')
        .replace('$desc', 'Detroit, in my opinion, is very underrated. I think this city is a gem to the nation. It has been through a lot but still thriving in entertainment and tourism. Motown music and techno were both invented in Detroit. The city is also home to one of the biggest African American population. If you are into automotive, Detroit is a must visit. The Belle Isle park and Eastern market were my two favorite places to go in Detroit!')
    },
    {
      lat: 30.1534,
      lon: 88.7879,
      flag: 'china.png',
      title: 'Tibet, China',
      html: template.replace('$pic', 'tibet.jpg')
        .replace('$title', 'Tibet, China')
        .replace('$bgColor', '#77724c')
        .replace('$desc', 'Tibet is an autonomous region of China and houses the planet\'s highest mountain, Mount Everest, at 8,848 meters (29,029 ft) above sea level. The land is blessed with many beautiful scenario and landscape. Staple foods in Tibet are roasted barley, yak meat, and butter tea. Tibet is very rich in history and is quite controversial when it comes to politics and religion. Some awesome places to visit are all the temples and monasteries, Yamdrok lake, and Mount Everest itself! If you do visit, please make sure to get acclimated to the high elevation or else you\'ll suffer altitude and attitude sickness like me!')
    },
    {
      lat: 43.6532,
      lon: -79.3832,
      flag: 'canada.png',
      title: 'Toronto, Canada',
      html: template.replace('$pic', 'toronto.jpg')
        .replace('$title', 'Toronto, Canada')
        .replace('$bgColor', '#263049')
        .replace('$desc', 'Toronto is the most populous city in Canada and the provincial capital of Ontario. The city is very diversed (with over 80 different ethnic communities) and half of the city\'s residents were born outside Canada. There are six districts with Old Toronto housing the most tourist attractions. Some awesome things to do include walking along the famous Yonge Street (Eaton Mall), eating a peameal bacon sandwich at St. Lawrence Market, and admiring the city\'s beautiful glass architecture! If you have time, make sure to check out the Niagara Falls!')
    },
    {
      lat: 40.416691,
      lon: -3.700345,
      flag: 'spain.png',
      title: 'Madrid, Spain',
      html: template.replace('$pic', 'madrid.jpg')
        .replace('$title', 'Madrid, Spain')
        .replace('$bgColor', '#9f8c7b')
        .replace('$desc', 'Madrid is known for its historical buildings, food markets, and the royals. It is also known for its renaissance and contemporary art museums, sunny blue skies, unique neighborhoods, and bustling nightlife (one of the best in my opinion). Madrid is a city of joy and life. Be warned that lunches do not start until 1 PM though and dinner at 8 PM! A day trip to Toledo is a must!')
    },
    {
      lat: 48.2082,
      lon: 16.3738,
      flag: 'austria.png',
      title: 'Vienna, Austria',
      html: template.replace('$pic', 'vienna.jpg')
        .replace('$title', 'Vienna, Austria')
        .replace('$bgColor', '#9d965f')
        .replace('$desc', 'Vienna is the capital and largest city in Austria. It also serves as the country\'s cultural, economic, and political center. Vienna is also said to be "The City of Dreams" because it was home to the world\'s first psycho-analyst - Sigmund Freud. Known for its musical legacy, it played an essential role as a leading European Music Centre, from the great age of Viennese Classicism to the modern era.')
    },
    {
      lat: 52.2297,
      lon: 21.0122,
      flag: 'poland.png',
      title: 'Warsaw, Poland',
      html: template.replace('$pic', 'warsaw.jpg')
        .replace('$title', 'Warsaw, Poland')
        .replace('$bgColor', '#baa884')
        .replace('$desc', 'Warsaw is the largest and capital city of Poland. It was completely destroyed by the Nazis during World War II, but restored itself from the ashes to its historical and classical style. Because of that, along with its survival from many wars throughout history, it is known as the "Phoenix City." Some touristy things to do here are to visit the Palace of Culture and Science (a "gift" from the Soviet Union) and learn about Frederic Chopin through the numerous museums the city has to offer for its famous composer.')
    },
    {
      lat: 44.4280,
      lon: -110.5885,
      flag: 'usa.png',
      title: 'Yellowstone, Wyoming, USA',
      html: template.replace('$pic', 'yellowstone.jpg')
        .replace('$title', 'Yellowstone, Wyoming, USA')
        .replace('$bgColor', '#bcb895')
        .replace('$desc', 'Yellowstone National Park is an American national park located mostly in Wyoming. An interesting fact is that Yellowstone was the first national park in the U.S. and is also widely held to be the first national park in the world. The park is known for its wildlife and its many geothermal features, especially Old Faithful geyser, one of its most popular features. If you are a national forest  or just an avid hiker, you HAVE to check out this wonder of the world! ')
    },
    {
      lat: -16.9186,
      lon: 145.7781,
      flag: 'australia.png',
      title: 'Cairns, Australia',
      html: template.replace('$pic', 'cairns.jpg')
        .replace('$title', 'Cairns, Australia')
        .replace('$bgColor', '#baa884')
        .replace('$desc', 'Cairns is an adventure sports enthusiast\'s paradise: every second shop is a tourist information centre with signs blaring "dive dive" or "tandem skydiving". Its location close to the ocean, the mountains and the rainforest gives travellers lots of choices of activities. Cairns is also a gateway to the Great Barrier Reef, essentially the main reason for its heavy tourism. Choose your package carefully as they are not all the same! Personally, snorkeling with those colorful fish is like a dream come true for me.')
    }
  ];

  $(window)
    .on('load', function () {
      var map = new google.maps.Map(document.getElementById('gmap'), {
        zoom: 3,
        center: new google.maps.LatLng(33.9391, 67.7100),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });


      var infowindow = new google.maps.InfoWindow({ maxWidth: 350 });

      var iconBase = 'images/flags/';

      function createMarker(latlng, flag, title, html, timer) {
        setTimeout(function () {
          var marker = new google.maps.Marker({
            position: latlng,
            title: title,
            icon: { url: iconBase + flag, scaledSize: new google.maps.Size(20, 20) },
            draggable: false,
            animation: google.maps.Animation.DROP,
            map: map
          })

          google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(html);
            infowindow.open(map, marker);
          });

          return marker;
        }, timer)
      }

      for (var i = 0; i < sites.length; i++) {
        createMarker(new google.maps.LatLng(sites[i].lat, sites[i].lon), sites[i].flag, sites[i].title, sites[i].html, i * 200 + 500);
      }

      // Event that closes the Info Window with a click on the map
      google.maps.event.addListener(map, 'click', function () {
        infowindow.close();
      });
    })
});
