import React from 'react'

const App = () => {

  const users = [
    {
      fullName: "Tony Stark",
      title: "Iron Man",
      profile: "https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/3/30/Iron_Man_%282008_film%29_poster.jpg",
      likesCount: 12500,
      postCount: 320,
      viewsCount: 980000,
      followed: true
    },
    {
      fullName: "Steve Rogers",
      title: "Captain America",
      profile: "https://upload.wikimedia.org/wikipedia/en/9/91/CaptainAmerica109.jpg",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/5/55/Captain_America_The_First_Avenger_poster.jpg",
      likesCount: 10400,
      postCount: 280,
      viewsCount: 870000,
      followed: false
    },
    {
      fullName: "Thor Odinson",
      title: "God of Thunder",
      profile: "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%282011_film%29_poster.jpg",
      likesCount: 15800,
      postCount: 410,
      viewsCount: 1120000,
      followed: true
    },
    {
      fullName: "Bruce Wayne",
      title: "Batman",
      profile: "https://upload.wikimedia.org/wikipedia/en/1/1b/Batman_DC_Comics.png",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
      likesCount: 14300,
      postCount: 390,
      viewsCount: 1010000,
      followed: true
    },
    {
      fullName: "Peter Parker",
      title: "Spider-Man",
      profile: "https://upload.wikimedia.org/wikipedia/en/0/0c/Spiderman50.jpg",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg",
      likesCount: 16200,
      postCount: 450,
      viewsCount: 1300000,
      followed: false
    },
    {
      fullName: "Clark Kent",
      title: "Superman",
      profile: "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/3/3a/Man_of_Steel_poster.jpg",
      likesCount: 13800,
      postCount: 340,
      viewsCount: 940000,
      followed: true
    },
    {
      fullName: "Natasha Romanoff",
      title: "Black Widow",
      profile: "https://upload.wikimedia.org/wikipedia/en/f/f6/Black_Widow_%28Natasha_Romanova%29.png",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/3/3a/Black_Widow_%282021_film%29_poster.jpg",
      likesCount: 11900,
      postCount: 260,
      viewsCount: 760000,
      followed: false
    },
    {
      fullName: "T'Challa",
      title: "Black Panther",
      profile: "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/0/0c/Black_Panther_film_poster.jpg",
      likesCount: 15100,
      postCount: 370,
      viewsCount: 1080000,
      followed: true
    },
    {
      fullName: "Wanda Maximoff",
      title: "Scarlet Witch",
      profile: "https://upload.wikimedia.org/wikipedia/en/6/68/Scarlet_Witch.jpg",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/1/1b/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
      likesCount: 16700,
      postCount: 420,
      viewsCount: 1250000,
      followed: true
    },
    {
      fullName: "Barry Allen",
      title: "The Flash",
      profile: "https://upload.wikimedia.org/wikipedia/en/0/0c/Flash_Family.jpg",
      coverImage: "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Flash_%282023_film%29_poster.jpg",
      likesCount: 9900,
      postCount: 210,
      viewsCount: 640000,
      followed: false
    }
  ];

  return (
    <div className='bg-black text-white h-screen'>
      {users.map(function(elem){

        return <h1>{elem.fullName}</h1>
      })}
    </div>
  )
}

export default App