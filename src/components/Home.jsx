import { FaArrowDownLong } from "react-icons/fa6";
import SkillsElement from './SkillsElement.jsx'
import { Link } from 'react-scroll';
import { Element } from 'react-scroll';
const Home = () => {
  return (
    <>
    <Element name="home">
    <SkillsElement/>
        <div className="relative bg-black/30 backdrop-blur-sm w-full h-screen text-white z-5">
            <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold">
              <h2 className="text-[110px] py-2 text-center font"><span className="text-orange-600">Pritesh</span> Patel</h2>
              <h1 className="text-[42px] font-mona text-center">Fullstack Web Developer</h1>
            
            <div className="absolute left-1/2 top-96 -translate-x-1/2 -translate-y-1/2 text-center">
                <Link 
                  to="githubSection"
                  smooth={true}
                  duration={800}
                  offset={50}
                  className="flex flex-col items-center justify-center animate-bounce rounded-full h-28 w-28 text-black bg-white cursor-pointer hover:bg-gray-100"
                >
                    Scroll Down
                    <FaArrowDownLong />
                </Link>
            </div>
            </div>
        </div>
    </Element>
    </>
  )
}

export default Home