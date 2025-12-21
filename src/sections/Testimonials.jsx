import { motion } from "framer-motion"
import m1 from "../assets/m1.jpeg"
import m2 from "../assets/m2.jpeg"
import w1 from "../assets/w1.jpeg"
import w2 from "../assets/w2.jpeg"





const testimonials = [
  {
    name: "Sameer Jadhav",
    role: "Computer Programing Instructor at NxtWave",
    review:
      "Krishna is a visionary developer whose creativity and attention to detail played a crucial role in our project’s success.",
    image: m1,
  },
  {
    name: "Prajwal More",
    role: "Computer Programing Instructor at NxtWave",
    review:
      "Teaching Krishna has been rewarding. He blends strong design sense with clean, efficient code.",
    image: w1,
  },
  {
    name: "Aditya Kshirsagar",
    role: "Fruntend Instructor at NxtWave",
    review:
      "As a frontend instructor, I’ve seen Krishna blend design clarity with clean, efficient frontend code.",
    image: m2,
  },
  {
    name: "Roshan Sahu",
    role: "Computer Programing Mentor at NxtWave",
    review:
      "Krishna shows exceptional potential, turning ideas into polished design and code.",
    image: w2,
  },
];


export default function Testimonials(){
  return(

    <section id="testimonials" className ="relative min-h-screen bg-black text-white flex flex-col items-center justify-between px-6 py-20">

<motion.h2 className="text-4xl font-bold mb-16"
 initial={{opacity: 0, y: -50}}
 animate={{opacity:1, y:0}}
 transition={{duration: 0.6}}
 >
What People Say
</motion.h2>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
  {testimonials.map((t,i) => (
    <motion.div
    key={t.name +1}
    initial={{opacity:0, y:50}}
    whileInView={{opacity: 1, y:0}}
    transition={{duration: 0.5, delay: i*0.2}}
    viewport={{once:true}}
    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500
    hover:scale-105 hover:-rotate-1
    ">

<img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"
loading="lazy"
/>
<p className="text-gray-200 italic mb-4">
  {t.review}
</p>
<h3 className="text-lg font-semibold">
  {t.name}
</h3>
<p className="text-sm text-gray-400">
  {t.role}
</p>


    </motion.div>
  ))}

</div>

    </section>
  )
}
