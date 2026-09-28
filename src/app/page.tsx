import CourseSection from "@/components/modules/course/course";
import HeroBanner from "@/components/modules/hero/hero-banner";
import Partners from "@/components/modules/partners/partners";
import Navbar from "@/components/shared/navbar/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative overflow-hidden bg-primary">
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_2px,transparent_1px)]"
          style={{
            backgroundSize: "calc(100vw / 12) calc(100vw / 12)",
          }}
        />

        <div className="relative z-10">
          <Navbar />
          <HeroBanner />
      
        </div>
      </div>

      <div>
            <Partners />
          <CourseSection/>
      </div>
    </main>
  );
}
