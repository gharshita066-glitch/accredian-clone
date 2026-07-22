"use client";

import { motion } from "framer-motion";

import {
Brain,
Shield,
Cloud,
Laptop,
BarChart3,
Users
} from "lucide-react";

const services=[
{
title:"AI Solutions",
desc:"Empower enterprises with AI-driven automation and personalized learning.",
icon:Brain,
color:"bg-blue-100 text-blue-600"
},
{
title:"Cloud Integration",
desc:"Connect business applications securely across cloud platforms.",
icon:Cloud,
color:"bg-cyan-100 text-cyan-600"
},
{
title:"Cyber Security",
desc:"Enterprise-grade protection with modern security practices.",
icon:Shield,
color:"bg-purple-100 text-purple-600"
},
{
title:"Corporate Training",
desc:"Upskill employees with expert-led learning programs.",
icon:Users,
color:"bg-green-100 text-green-600"
},
{
title:"Business Analytics",
desc:"Gain real-time insights for smarter business decisions.",
icon:BarChart3,
color:"bg-pink-100 text-pink-600"
},
{
title:"Digital Transformation",
desc:"Accelerate innovation through modern digital solutions.",
icon:Laptop,
color:"bg-orange-100 text-orange-600"
},
];

export default function Services(){

return(

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">

<p className="uppercase tracking-widest text-blue-600 font-semibold">
Services
</p>

<h2 className="text-5xl font-bold mt-3">
Solutions for Modern Enterprises
</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

{services.map((item,index)=>{

const Icon=item.icon;

return(

<motion.div
key={item.title}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1}}
whileHover={{y:-8}}
className="bg-white rounded-3xl shadow-lg p-10"
>

<div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${item.color}`}>
<Icon size={35}/>
</div>

<h3 className="text-2xl font-bold mt-6">
{item.title}
</h3>

<p className="mt-4 text-gray-600 leading-8">
{item.desc}
</p>

<button className="mt-6 text-blue-600 font-semibold">
Learn More →
</button>

</motion.div>

)

})}

</div>

</div>

</section>

)

}