import Header from "@/app/components/Header";
import { data } from "./utils/data";
import PriceCard from "./components/PriceCard";
import AboutCourse from "./components/AboutCourse";
import AboutInstructor from "./components/AboutInstructor";
import TestimonialCarousel from "./components/Testimonial";
export default function Home() {
  return (
    <main className="w-screen min-screen bg-gray-200 flex justify-center items-center flex-col">
      <div className="w-[55%] bg-white p-6 shadow-2xl m-6">
        <div className="relative">
          <Header
            title={data.course.title}
            instructor={data.instructor.name}
          />
          <div className="absolute top-40 right-5">

          <PriceCard
            fee={data.course.fee.amount}
            currency={data.course.fee.currency}
            instructor={data.instructor.name}
            inclusions={data.course.inclusions}
            />
            </div>
          <AboutCourse
            about={data.course.about.html_content}
            whatToExpect={data.course.what_to_expect.description}
            keyTopic={data.course.key_topics}
          />
        </div>
        <AboutInstructor
          profile={data.instructor.details.profile}
          about={data.instructor.details.about}
          philosophy={data.instructor.details.philosophy}
          social={data.instructor.details.social}
        />
        <TestimonialCarousel data={data.testimonials} />
      </div>
    </main>
  );
}
