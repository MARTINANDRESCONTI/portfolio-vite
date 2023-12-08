import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const htmlIcon = <FaHtml5 />
const cssIcon = <IoLogoCss3 />
const jsIcon = <RiJavascriptFill />
const reactIcon = <RiReactjsFill />
const nodeIcon = <FaNodeJs />
const expressIcon = <SiExpress />
const mongoIcon = <SiMongodb />

export default [
  {
    source: 'freeCodeComp',
    knowledge: ['HTML', 'Css', 'JavaScript', 'ReactJs'],
    icons: [htmlIcon, cssIcon, jsIcon, reactIcon]
  },
  {
    source: 'Udacity',
    knowledge: ['HTML', 'Css', 'JavaScript'],
    icons: [htmlIcon, cssIcon, jsIcon]
  },
   {
    source: 'jonmircha',
    knowledge: ['HTML', 'Css', 'JavaScript', 'ReactJs'],
    icons: [htmlIcon, cssIcon, jsIcon, reactIcon]
  },
   {
    source: 'sonHenry',
    knowledge: ['JavaScript', 'ReactJs', 'Node', 'Express Js', 'Mongo'],
    icons: [jsIcon, reactIcon, nodeIcon, expressIcon, mongoIcon]
  }
]

  