"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs=[
["How does Accredian help enterprises?","We provide AI-powered enterprise learning and digital transformation solutions."],
["Can learning paths be customized?","Yes. Organizations can build personalized learning journeys."],
["Do you support cloud deployment?","Absolutely. We support AWS, Azure and Google Cloud."],
["Is technical support available?","Yes, 24/7 enterprise support is included."]
];

export default function FAQ(){

const [open,setOpen]=useState(0);

return(

<section className="py-24 bg-gray-50">

<div className="max-w-4xl mx-auto px-6">

<div className="text-center">

<p className="uppercase tracking-widest text-blue-600 font-semibold">
FAQs
</p>

<h2 className="text-5xl font-bold mt-3">
Frequently Asked Questions
</h2>

</div>

<div className="mt-14 space-y-4">

{faqs.map((faq,index)=>(

<div key={faq[0]} className="bg-white rounded-2xl shadow">

<button
onClick={()=>setOpen(open===index?-1:index)}
className="w-full flex justify-between p-6 font-semibold text-left"
>

{faq[0]}

<ChevronDown/>

</button>

{open===index&&(

<p className="px-6 pb-6 text-gray-600">
{faq[1]}
</p>

)}

</div>

))}

</div>

</div>

</section>

)

}