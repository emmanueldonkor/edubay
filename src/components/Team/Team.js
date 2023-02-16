import { teams } from "../../data"
import "./Team.css"
function Team()  {
  return (
    <section className="team">
     <h2> Meet Our Team</h2>
     <div className="container team__container">
         {teams.map((team)=>(
            <article className="team__member">
          <div className="team__member-image">
           <img src={team.image} alt="team" />
          </div>
          <div className="team__member-info">
             <h4>{team.name}</h4>
             <p>{team.field}</p>
          </div>
          <div className="team__member-socials">
             <a href="https://instagram.com" rel="noreferrer" >{team.icons[0]}</a>
             <a href="https://twitter.com" rel="noreferrer" >{team.icons[1]}</a>
             <a href="https://linkedin.com" rel="noreferrer" >{team.icons[2]}</a>
          </div>
        </article>
         ))}
        
     </div>
    </section>
  )
}
export default Team;
