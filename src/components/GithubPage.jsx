import { FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiBookOpen } from "react-icons/fi";
import { LuBox } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { VscGithubProject } from "react-icons/vsc";
import { GoRepo, GoPeople } from "react-icons/go";
import axios from "axios";
import { LuDot } from "react-icons/lu";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
const GithubPage = () => {
  const [userDataFormGithub, setUserDataFormGithub] = useState({});
  const [repositories, setRepositories] = useState([]);
  const callGitHubApi = async () => {
    const apiCallRes = await axios.get("https://api.github.com/users/codax69");
    setUserDataFormGithub(apiCallRes.data);
  };
  const reposApiCall = async () => {
    try {
      const repositoriesData = await axios.get(
        "https://api.github.com/users/codax69/repos"
      );
      setRepositories(repositoriesData.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    callGitHubApi();
    reposApiCall();
  }, []);
  return (
    <Element id="githubSection" className="h-screen w-full bg-zinc-950  ">
      <div className="flex justify-center max-w-[80rem] mx-auto items-center h-screen ">
        <div className="relative bg-[#010409] h-[82%] w-full rounded-xl overflow-hidden shadow-gray-900 shadow-xl">
          <nav className="navbar h-28 w-full">
            <div className="top-nav h-1/2 w-full ">
              <div className="w-1/6 pt-5 px-5">
                <div className="flex items-center space-x-3 ">
                  <GiHamburgerMenu size={30} fill="white" />
                  <FaGithub fill="white" size={30} />
                  <span className="text-white font-mona">Codax69</span>
                </div>
              </div>
            </div>
            <div className="bottom-menu h-full w-full bg-[#010409] text-white pt-6">
              <ul className="flex space-x-5 px-9">
                <li className="flex justify-center items-center">
                  <FiBookOpen className="mx-1" />
                  <span className="text-center font-mona">Overview</span>
                </li>
                <li className="flex justify-center items-center">
                  <GoRepo className="mx-1" />
                  <span className="text-center font-mona border-b-[3px]  border-[#f78166]">Repositories</span>
                  <span className="mx-2 text-sm font-mona px-2 py-[3px] rounded-3xl bg-slate-500/60">
                    {userDataFormGithub.public_repos}
                  </span>
                </li>
                <li className="flex justify-center items-center">
                  <VscGithubProject className="mx-1" />
                  <span className="font-mona">Projects</span>
                </li>
                <li className="flex justify-center items-center">
                  <LuBox className="mx-1" />
                  <span className="font-mona">Packages</span>
                </li>
                <li className="flex justify-center items-center">
                  <FaRegStar className="mx-1" />
                  <span className="font-mona">Stars</span>
                </li>
              </ul>
            </div>
          </nav>
          <hr className="bg-slate-900" />
          {userDataFormGithub && userDataFormGithub !== null ? (
            <div className="h-full bg-[#0d1117]">
              <div className="relative flex profile w-[85%] h-full py-4 mx-auto">
                <div className="w-1/3 h-full ">
                  <div className="flex flex-col items-center pt-10">
                    <div className="w-60 h-60 rounded-full bg-white border-[2px] border-slate-600/20 overflow-hidden">
                      <img
                        src={userDataFormGithub.avatar_url}
                        alt="Profile Image"
                      />
                    </div>
                    <div className="info flex flex-col pt-4">
                      <span className="font-mona text-white">
                        {userDataFormGithub.name}
                      </span>
                      <span className="font-mona text-[#89929d]">
                        {userDataFormGithub.login}
                      </span>
                      <span className="bg-slate-400/50 w-60 h-7 text-center font-mona text-white rounded-lg my-3">
                        Follow
                      </span>
                      <span className="mx-1 flex items-center text-[#89929d]">
                        <GoPeople className="fill-white" size={15} />
                        {userDataFormGithub.followers}Follower <LuDot />
                        {userDataFormGithub.following}following
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-full font-mona overflow-scroll scroll-smooth no-scrollbar">
                  {repositories && repositories !== null
                    ? repositories.map((data, index) => (
                        <div key={index} className="flex flex-col">
                          <div className="flex my-3 items-center justify-start">
                            <span className="text-xl font-bold text-blue-500 mx-3 hover:underline font">
                              <a
                                href={`https://github.com/codax69/${data.name}`}
                              >
                                {data.name}
                              </a>
                            </span>
                            <span className="capitalize border-[1px] rounded-xl text-sm font-semibold px-2 py1 text-[#89929d]  border-[#89929d]">
                              {data.visibility}
                            </span>
                          </div>

                          <span className="flex items-center text-[#89929d] font-mona">
                            <LuDot
                              fill=""
                              size={85}
                              className={`-mx-5 -my-4 ${
                                data.language === "JavaScript"
                                  ? "text-yellow-600"
                                  : "text-teal-500"
                              }
                              `}
                            />
                            {data.language}
                          </span>
                          <hr className="bg-slate-400/60" />
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Element>
  );
};

export default GithubPage;
