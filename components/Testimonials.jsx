"use client";

import { Star } from "lucide-react";

const testimonials=[
{
name:"Rahul Sharma",
role:"Engineering Manager • TechNova",
text:"Accredian helped us train over 500 employees efficiently. The platform is intuitive and highly scalable."
},
{
name:"Priya Verma",
role:"HR Director • FutureSoft",
text:"The AI-powered learning recommendations significantly improved employee engagement and performance."
},
{
name:"Amit Patel",
role:"CTO • CloudSphere",
text:"Excellent learning platform with enterprise-grade features. Highly recommended for growing organizations."
}
];

export default function Testimonials(){

return(

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center">

<p className="uppercase tracking-widest text-blue-600 font-semibold">
Testimonials
</p>

<h2 className="text-5xl font-bold mt-3">
What Our Clients Say
</h2>

</div>

<div className="grid md:grid-cols-3 gap-8 mt-16">

{testimonials.map((t)=>(

<div key={t.name} className="bg-white shadow-xl rounded-3xl p-10">

<div className="flex gap-1 text-yellow-400">

{[1,2,3,4,5].map(i=><Star key={i} fill="currentColor"/>)}

</div>

<p className="mt-6 italic text-gray-700 leading-9">
"{t.text}"
</p>

<h3 className="mt-8 text-2xl font-bold">
{t.name}
</h3>

<p className="text-gray-500">
{t.role}
</p>

</div>

))}

</div>

</div>

</section>

)

}