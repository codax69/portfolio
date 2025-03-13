import { Element } from 'react-scroll';

export const About = () => {
  return (
    <Element name="about" className="min-h-screen bg-[#09090b] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white pt-6  font">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://i.ibb.co/ZwTrYT9/Pritesh.png" // Replace with your image path
                alt="Pritesh - Web Developer"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
              /> 
              
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/3 text-gray-300">
            <h3 className="text-3xl font-semibold text-orange-500 mb-4 font">{`Hi, I'm Pritesh`}</h3>
            <p className="text-lg mb-6 font-mona">
             {` I'm a Web Developer with expertise in building modern and responsive web applications.
              My journey in web development has equipped me with a strong foundation in both frontend and backend technologies.`}
            </p>

            <h4 className="text-xl font-semibold text-white mb-4 font">Technical Skills</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-mona">
              <SkillBadge icon="https://i.ibb.co/VWYc2qBX/html.png" skill="HTML" />
              <SkillBadge icon="https://i.ibb.co/RTGgs7Nh/css3.png" skill="CSS" />
              <SkillBadge icon="https://i.ibb.co/N2Mp7jmH/javascript.png" skill="JavaScript" />
              <SkillBadge icon="https://i.ibb.co/Rp3LvQRD/react.png" skill="React" />
              <SkillBadge icon="https://i.ibb.co/v4Z0j2XR/tailwind-css.png"skill="Tailwind Css" />
              <SkillBadge icon="https://i.ibb.co/wZgq4r8w/mongo-db.png" skill="MongoDB" />
            </div>

            <div className="mt-8">
              <p className="text-lg font-mona">
                {`I specialize in creating efficient, scalable, and user-friendly applications
                using the MERN stack (MongoDB, Express.js, React, Node.js). I'm constantly
                learning and adapting to new technologies to deliver the best possible solutions.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

// Skill Badge Component
// eslint-disable-next-line react/prop-types
const SkillBadge = ({ icon, skill }) => (
  <div className="flex items-center space-x-2 bg-zinc-800 rounded-full transform transition-transform duration-300 px-4 py-2 hover:scale-110 ">
    <span className='h-6 w-6'><img src={icon} /></span>
    <span className="text-white">{skill}</span>
  </div>
);

export default About;