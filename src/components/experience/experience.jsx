import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>Experience In</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              < BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              < BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small >Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              < BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small >Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              < BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>BOOTSTRAP</h4>
              <small >Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              < BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>TAILWIND</h4>
              <small >Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              < BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>REACT</h4>
              <small >Experienced</small>
              </div>
            </article>
          </div>

        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              < BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small >Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              < BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small >Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              < BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>PHP</h4>
              <small >Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              < BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small >Know the basics</small>
              </div>
            </article>
            <article className="experience_details">
              < BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>PYTHON</h4>
              <small >Intermediate</small>
              </div>
            </article>
            
          </div>

          </div>
      </div>
    </section>
  )
}

export default experience