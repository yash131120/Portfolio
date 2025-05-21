import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa6";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { DiGithubAlt } from "react-icons/di";
import { SiExpress, SiNuxtdotjs, SiTailwindcss } from "react-icons/si";
import { MdDraw } from "react-icons/md";

function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-3xl text-orange-600" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-3xl text-blue-500" />, name: "CSS" },
    { icon: <IoLogoJavascript className="text-3xl text-yellow-500" />, name: "JavaScript" },
    { icon: <BiLogoTypescript className="text-3xl text-blue-700" />, name: "TypeScript" },
    { icon: <FaPython className="text-3xl text-yellow-600" />, name: "Python" },
    { icon: <FaReact className="text-3xl text-cyan-500" />, name: "React" },
    { icon: <SiExpress className="text-3xl text-gray-700" />, name: "Express" },
    { icon: <FaNodeJs className="text-3xl text-green-600" />, name: "NodeJS" },
    { icon: <SiTailwindcss className="text-3xl text-sky-400" />, name: "Tailwind" },
    { icon: <SiNuxtdotjs className="text-3xl text-green-700" />, name: "NuxtJS" },
    { icon: <FaGitAlt className="text-3xl text-red-600" />, name: "Git" },
    { icon: <DiGithubAlt className="text-3xl text-black dark:text-white" />, name: "Github" },
    { icon: <IoLogoFirebase className="text-3xl text-orange-400" />, name: "Firebase" },
  ];

  return (
    <section id="skills" className="relative px-4 sm:px-6 lg:px-24 py-20">
      <div className="absolute top-[10%] left-[8%] w-[1.5px] h-[50%] bg-zinc-300 dark:bg-zinc-700" />

      <div className="relative z-10">
        <div className="relative mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white lg:ml-20">
            My Skill Set and <br /> Technologies
          </h2>
          <div className="absolute -top-6 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-orange-500 rounded-full flex items-center justify-center animate-bounce-slow">
            <MdDraw className="text-white text-2xl sm:text-3xl" />
          </div>
        </div>

        <div className="max-w-3xl mb-12 text-zinc-700 dark:text-zinc-300 lg:ml-20">
          <p className="mb-4 text-sm sm:text-base">
            I write clean, well-commented, composable and functional code,
            without language barriers as I can adapt and learn any new
            technology very quickly.
          </p>
          <p className="text-sm sm:text-base">
            Here are some of the tech tools, frameworks, libraries and languages
            I'm great at:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center gap-2"
            >
              {skill.icon}
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;