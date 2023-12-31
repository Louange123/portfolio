import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/image1.png'
import IMG2 from '../../assets/image2.png'
import IMG3 from '../../assets/image3.jpg'
import IMG4 from '../../assets/image4.jpg'
import IMG5 from '../../assets/image5.jpg'
import IMG6 from '../../assets/image6.jpg'
import IMG7 from '../../assets/image7.jpg'
import IMG8 from '../../assets/image8.jpg'
const data=[
  {
    id:1,
    image:IMG1,
    title:'Online tour booking webisite',
    github:'https://github.com/Louange123/dreamdiscover',
    demo:'https://dreamdiscover.onrender.com '
},
{
  id:2,
  image:IMG2,
  title:'Figma dashboard UI kit for booking apps and well functioning web',
  github:'https://github.com/Louange123/tourSITE',
  demo:'https://toursite12.onrender.com  '
},
{
  id:3,
  image:IMG3,
  title:'Figma dashboard UI kit for data design web apps',
  github:'http://github.com',
  demo:'https://dribbble.com/shorts/17290917-Eclipse-Figma-dashboard-UI-Kit-for-data-design-web-apps'
}
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Browse my recent</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
   
      </div>
    </section>
    
    
  )
}

export default portfolio