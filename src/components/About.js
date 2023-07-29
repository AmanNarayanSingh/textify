import React from 'react'


export default function About({mode}) {
  return (
    <div className={`content ${mode === 'dark' ? 'dark-mode' : ''}`}  style={{display:'flex',alignItems:'center'}}>
    <>
        <div className="container my-4" >
            <h1>About the Author</h1><br />
            <p style={{fontSize:25}}>Aman Narayan Singh</p>
            <p style={{fontFamily:'cursive',fontSize:18}} id="quote">"Coding is a symphony of creativity and logic, where lines of code compose the poetry of innovation, and programmers wield the power to turn imagination into reality. In the digital realm, they navigate the labyrinth of possibilities, transforming chaos into elegant solutions, and leaving behind a legacy of ingenuity that shapes the future."</p>
            <p>I am a Full Stack Developer who likes the quest to work and learn in a real professional and vying ambience that enables me to cope with the emerging as well as the latest technology and scope for widening the spectrum of my knowledge, excellent capability to explore, learn and understand newer business domains, mathematics and technology along with web development, competitive programming with Python as my primary language. </p>
            <p>I want to express my sincere gratitude to you for choosing my React app - Texify ceated by me during my July's 2023 vacation to handle your text manipulation needs. Whether it's converting text to uppercase, lowercase, removing spaces, or capitalizing words,etc. I am thrilled to have provided you with a user-friendly and efficient solution. I am dedicated to maintaining the app's performance and keeping it up-to-date. Thank you for being a part of my user community, and I look forward to serving you further and exceeding your expectations in the future.</p>
            <br />
            <h2>My work experience</h2>
            <ul>
              <li>Technical Intern 1 at Cisco Systems Pvt. Ltd., Bangalore </li>
              <li>CTY Summer Intern at Hewlett Packard and Enterprises(HPE) </li>
            </ul>
            <br />
            <h2>Connect me through</h2>
            <ul>
              <li>LinkedIn - <a href="https://www.linkedin.com/in/aman-narayan-singh-7a36a6165/" target='blank'>Aman Narayan Singh</a></li>
            </ul>
        </div>
        <div className="container my-4">
          <img src="https://avatars.githubusercontent.com/u/84240198?v=4" alt="Aman Narayan Singh" />
            <img src='https://cdn.mos.cms.futurecdn.net/K6YPpf7J4dAjSypf62nBnZ.jpg' alt="Aman's pic" />
        </div>
    </>
    </div>
  )
}
