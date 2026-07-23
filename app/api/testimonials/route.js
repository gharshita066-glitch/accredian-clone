import { NextResponse } from "next/server";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Engineering Manager • TechNova",
    text: "Accredian helped us train over 500 employees efficiently. The platform is intuitive and highly scalable."
  },
  {
    name: "Priya Verma",
    role: "HR Director • FutureSoft",
    text: "The AI-powered learning recommendations significantly improved employee engagement and performance."
  },
  {
    name: "Amit Patel",
    role: "CTO • CloudSphere",
    text: "Excellent learning platform with enterprise-grade features. Highly recommended for growing organizations."
  }
];

export async function GET() {
  return NextResponse.json(testimonials);
}
