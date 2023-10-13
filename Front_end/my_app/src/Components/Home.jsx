import React from 'react'
import style from "./Home.module.css"

function Home() {
  return (
    <div>
      <div className={style.ban}>
        <img className={style.banner} src="https://www.companioncare.co.uk/contentassets/c14b93636ac94f8784700161774413e3/companion-care---complete-care---homepage.png?width=1040" alt="" />
        <div id={style["bluBa"]} className={style.bluBann}>
          <h2>BETTER FOR YOUR</h2>
          <h2>PET, BETTER FOR</h2>
          <h2>YOUR POCKET.</h2>
          <br />
          <h4>Our health plans are a simple, cost effective way</h4>
          <h4>to keep your pet protected all-year round.</h4>
          <button>Choose Your health plan</button>
        </div>
      </div>
      <h1 className={style.headBan} style={{ backgroundColor: "rgb(11, 79, 197)", fontSize: "30px", fontWeight: "500",color: "white"}}>Find Out more about Companion care</h1>
      <div className={style.animals}>
        <div>
          <div className={style.head}><h2>Protecting your rabbit from flystrike</h2>
            <p>Click below to read about how you can prevent flystrike in rabbit</p></div>
          <div><img src="https://www.companioncare.co.uk/contentassets/c14b93636ac94f8784700161774413e3/two-rabbits-close-up.jpg?width=534" alt="" /></div>
          <button>Read More</button>
        </div>
        <div>
          <div className={style.head}><h2>Expert puppy and kitten advice</h2>
            <p>From toilet to letting them outside for the first time, we have a hub of useful advice to get you started!</p></div>
          <div>            <img src="https://www.companioncare.co.uk/globalassets/puppy-running-through-field-1.jpg?width=534" alt="" />
          </div>            <button>Find out more</button>
        </div>
        <div>
          <div className={style.head}><h2>Neutering your pet</h2>
            <p>Neutering reduces the risk of diseases such as cancer, removes the risk of problems with the reproductive organs and accidental pregnancy.</p></div>
          <div>            <img src="https://www.companioncare.co.uk/siteassets/v4p_082.jpg?width=534" alt="" />
          </div>            <button>Read More</button>
        </div>
        <div>
          <div className={style.head}><h2>Vaccination services</h2>
            <p>At your vaccination, your vet wil conduct a full health check on yout pet and answer any of your questions.</p></div>
          <div>            <img src="https://www.companioncare.co.uk/globalassets/companion-care/two-rabbits_2.jpg?width=534" alt="" />
          </div>            <button>Read More</button>
        </div>
        <div>
          <div className={style.head}><h2>Protection against lungworm</h2>
            <p>There are several ways to reduce the risk of lungworm, but the best protection is through regular vet strength worming treatment.</p></div>
          <div>            <img src="https://www.companioncare.co.uk/globalassets/companion-care/dog-looking-up-at-camera-close-up.jpg?width=534" alt="" />
          </div>            <button>Read More</button>
        </div>
        <div>
          <div className={style.head}><h2>Keeping your pet happy and healthy this winter</h2>
            <p>Here are some handy tips to help make sure your pet is happy and healthy during the chilly winter months.</p></div>
          <div>            <img src="https://www.companioncare.co.uk/globalassets/molly-winter-health.jpg?width=534" alt="" />
          </div>            <button>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Home