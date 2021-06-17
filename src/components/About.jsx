//Componente de tipo función Stateless
import React from 'react';

import { AboutStyle, AboutAvatar, AboutImg, AboutName, AboutH2, AboutProfession, AboutBio, AboutLocation, AboutSocial, AboutSocialImg } from '../styled/AboutStyles';

const socials = [
    {
        name: "Facebook",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
        link: "https://www.facebook.com/martinezballesta"
    },
    {
        name: "GitHub",
        img: "https://image.flaticon.com/icons/png/512/25/25231.png",
        link: "https://github.com/hispanos"
    },
    {
        name: "Instagram",
        img: "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg",
        link: "https://www.instagram.com/mailermartinez/"
    }
]

const About = () => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          <AboutImg 
            src="https://avatars.githubusercontent.com/u/5068125?v=4" 
            alt="Mi avatar" 
          />
        </figure>
      </AboutAvatar>
      <AboutName>
        <AboutH2>Mailer Martínez Ballesta</AboutH2>
      </AboutName>
      <div>
        <AboutProfession>Frontend Development Jr./ PHP Development Sr.</AboutProfession>
      </div>
      <div className="About-description">
          <AboutBio>"Si lo puedes imaginar, lo puedes crear"</AboutBio>
      </div>
      <div>
            <AboutLocation>Santa Fe de Antioquia, Colombia</AboutLocation>
      </div>
      <AboutSocial>
        {
            socials.map((social) => {
                return (
                    <a 
                        href={social.link}
                        target= "_blank"
                        key= {social.name}
                    >
                        <AboutSocialImg
                            src= {social.img}
                            alt= {social.name}
                        />
                    </a>
                )
            })
        }
      </AboutSocial>
    </div>
  </AboutStyle>
);
export default About;