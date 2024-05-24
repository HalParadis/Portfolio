import React from 'react';
import { Project } from '.';
import itsImg from '../images/ITS_Solutions.png';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      {/* <h3 className='portfolio-subheader'>Squarespace Clients:</h3> */}
      <Project 
        name={'In Terra Somnia'}
        description={'“In Terra Somnia” is the online face of a comprehensive college admissions guidance business designed to empower students in their pursuit of higher education. Specializing in simplifying the complexities of the college admissions process, ITS Solutions offers a tailored approach to academic planning, extracurricular development, and every facet of the application journey. From strategic college research to comprehensive essay consultations and financial planning, this three-page website provides valuable insights into the services offered by ITS Solutions. Originating from a simple question – “Why not?” – ITS Solutions has successfully aided numerous students in gaining admission to top universities. As the sole developer, I was responsible for all aspects of the website, including design, development, and deployment. Explore the site to learn more about the personalized approach that defines this land of dreams for aspiring college students.'}
        url={'https://interrasomnia.com/'}
        // imgSrc={itsImg}
      />
      {/* <h3 className='portfolio-subheader'>School Projects:</h3> */}
      <Project 
        name={'We Love Ramen'}
        description={`“We Love Ramen” is an online hub crafted by ramen lovers for ramen lovers. This straightforward platform offers membership perks, including an easy-to-use cart and checkout system. Admins can efficiently manage inventory and user details via an exclusive admin page. The site's pastel palette of blue, pink, and yellow adds a touch of warmth to the user experience. Explore its pages to find a variety of ramen options, each with detailed information. This site is a celebration of the simple joy in savoring a bowl of ramen. As the unofficial team lead and a primary contributor, I oversaw a team of three, handled a significant portion of the development work, and resolved complex issues that arose. Please note that this website is created for demonstration purposes, and no actual transactions or sales take place.`}
        url={'https://we-love-ramen.netlify.app/'}
        github={'https://github.com/HalParadis/ramen-capstone'}
      />
      <Project 
        name={'Fitness Tracker'}
        description={`"Fitness Tracker" is an intuitive platform designed for fitness enthusiasts to monitor and enhance their workout routines. Whether you're a guest browsing public routines and activities or a registered user creating your personalized fitness journey, this site offers a sleek modern experience with a color palette of slate grey, light blue, dark cyan, midnight green, and black. Users can create and customize activities and routines, choosing to keep them private or share them with the community. The straightforward design ensures easy navigation, allowing users to seamlessly explore and craft their fitness plans. This project was developed using pair programming, where my partner and I collaborated closely on all aspects of the site. "Fitness Tracker" is a dynamic space for individuals to curate and share their wellness adventures.`}
        url={'https://ourfitnesstracker.netlify.app/'}
      />
      <Project 
        name={'Strangers Things'}
        description={`“Strangers Things” is a sleek and modern platform designed for a seamless user experience in buying and selling items. With a clean design, the site features a sophisticated color palette of slate grey, off-white, charcoal, and black, creating a visually striking atmosphere. This three-page site is built with simplicity and functionality in mind. The profile page doubles as a login and registration gateway for new users. Guests can freely browse the posts but need to log in to engage further. Once logged in, users can post items for sale and communicate with other posters through messages linked to specific posts. As the sole developer, I was responsible for the entire project, from design to deployment, ensuring a cohesive and efficient platform. “Strangers Things” is a testament to minimalist design meeting functional utility, offering users a straightforward yet engaging marketplace experience.`}
        url={'https://mystrangersthings.netlify.app/'}
      />
      {/* <Project 
        name={'The Art Collector'}
        description={''}
        url={'https://the-art-collector-1.netlify.app/'}
      />
      <Project 
        name={'Puppy Bowl'}
        description={''}
        url={'https://mypuppybowl.netlify.app/'}
      />
      <Project 
        name={'Connect Four'}
        description={''}
        url={'https://myconnectfour.netlify.app/'}
      />
      <Project 
        name={'Guessing Game'}
        description={''}
        url={'https://hals-guessing-game.netlify.app/'}
      />
      <Project 
        name={'Coffee Clicker'}
        description={''}
        url={'https://mycoffeeclickergame.netlify.app/'}
      /> */}
    </div>
  )
}

export default Portfolio;