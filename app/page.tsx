import Image from "next/image";
import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const agenda = [
  { time: "08:30 AM – 08:45 AM", title: "Arrival + environment check" },
  { time: "08:45 AM – 09:45 AM", title: "Why we are here: open science, data management, and workshop goals" },
  { time: "09:45 AM – 10:15 AM", title: "Open TIFF image and generate a JPEG thumbnail" },
  { time: "10:15 AM – 10:40 AM", title: "Histogram and contrast" },
  { time: "10:40 AM – 10:55 AM", title: "Break" },
  { time: "10:55 AM – 11:20 AM", title: "Noise correction" },
  { time: "11:20 AM – 12:05 PM", title: "Drift correction on a stack" },
  { time: "12:30 PM – 01:10 PM", title: "Lunch" },
  { time: "01:10 PM – 02:10 PM", title: "Microscopy suite visit" },
  { time: "02:10 PM – 02:40 PM", title: "Measure distances" },
  { time: "02:40 PM – 03:20 PM", title: "Export to HDF5 + per-image README" },
  { time: "03:20 PM – 03:35 PM", title: "Break" },
  { time: "03:35 PM – 04:00 PM", title: "Bonus" },
  { time: "04:00 PM – 04:40 PM", title: "Capstone: From raw image to documented output" },
  { time: "04:40 PM – 05:00 PM", title: "Final discussion + Q&A + close" },
];

const breaks = new Set(["Break", "Lunch"]);

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* University logos */}
      <div className="w-full border-b border-gray-100 px-6 py-4">
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-start gap-6 sm:gap-10">
          <Image src={`${base}/logo-umd.png`} alt="University of Maryland" width={180} height={72} className="object-contain h-10 sm:h-16 w-auto" />
          <Image src={`${base}/logo-unc.png`} alt="UNC Chapel Hill" width={180} height={72} className="object-contain h-10 sm:h-16 w-auto" />
          <Image src={`${base}/logo-usc.png`} alt="University of Southern California" width={180} height={72} className="object-contain h-10 sm:h-16 w-auto" />
        </div>
      </div>

      {/* Hero banner */}
      <div className="relative w-full h-64 overflow-hidden bg-white">
        <Image
          src={`${base}/hero.png`}
          alt="JEOL TEM instrument"
          fill
          className="object-cover object-right"
          priority
        />
        {/* Left-to-right fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-12">
        {/* Title + meta */}
        <section>
          <h1 className="text-3xl font-bold mb-4">CITEAM Workshop 2026</h1>
          <div className="flex flex-col gap-2 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 flex-shrink-0 text-gray-400" />
              <span>University of Maryland · College Park, MD</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 flex-shrink-0 text-gray-400" />
              <span>Wednesday, May 20 from 8:30 am to 5 pm</span>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">Overview</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
            <p>
              The <a href="https://citeamcourse.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">CITEAM</a> workshop is geared toward cyberinfrastructure (CI) training for the
              community of scientists and researchers using the new generation of Transmission
              Electron Microscope (TEM) instruments at UMD. The training materials presented during
              the workshop and the associated training activities will help reduce barriers to the
              use of the instruments, data, software tools, and computing to help users in key steps
              critical to their scientific inquiry — from data collection, data analysis, to storing
              and publishing data — encompassing end-to-end TEM Data Management.
            </p>
            <p>
              This edition of the workshop will include a keynote talk from{" "}
              <a href="https://mse.umd.edu/clark/faculty/722/Ichiro-Takeuchi" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">Professor Ichiro Takeuchi</a>
              , and cover foundational materials relevant to the instrument users.
            </p>
            <p>
              This day-long workshop will be structured around a mix of lectures introducing the
              materials customized for the instrument users, hands-on sessions where participants
              will have the opportunity to go through end-to-end examples with the workshop
              instructors, site visit to the actual instrument, followed by office hours from the
              instructors to address specific questions and concerns.
            </p>
            <p>
              Although this workshop is geared towards new users, intermediate and advanced users
              are also invited to attend, participate in the advanced hands-on sessions, and provide
              feedback on the materials presented.
            </p>
          </div>
        </section>

        {/* Register */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">Register</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <p>
            The registration fee is $80 and will be collected via UMD-issued invoices. Payment can
            be made by check or credit card through the UMD Bursar&apos;s Office. Please note that
            registration fees are non-refundable.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSoUTdiSjyiqth-y_PGRjp_xdyfJlvZz0_m55PARp4koZK7w/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white text-sm font-semibold px-4 py-2 rounded transition-colors" style={{ backgroundColor: "#EF9F27" }}
          >
            RSVP
          </a>
          </div>
        </section>

        {/* Location */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">Location</h2>
          <div className="text-gray-700 text-sm">
            <p className="font-semibold text-gray-900">University of Maryland</p>
            <p className="text-gray-500">Jeong H. Kim Engineering Building, Room 2107</p>
            <p>8228 Paint Branch Dr</p>
            <p>College Park, MD 20742</p>
          </div>
        </section>

        {/* Agenda */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">Agenda</h2>
          <div className="divide-y divide-gray-100">
            {agenda.map((item) => (
              <div
                key={item.time}
                className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-0"
              >
                <span className="text-xs font-mono text-gray-400 whitespace-nowrap sm:w-52 flex-shrink-0">
                  {item.time}
                </span>
                <span
                  className={`text-sm ${
                    breaks.has(item.title)
                      ? "text-gray-400 italic"
                      : "text-gray-800 font-medium"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 py-6 px-6">
        <div className="max-w-3xl mx-auto flex items-center gap-3 text-sm text-gray-500">
          <Image src={`${base}/nsf-logo.png`} alt="NSF logo" width={36} height={36} className="flex-shrink-0" />
          <p>
            CITEAM is supported by the NSF under award number{" "}
            <a
              href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2519465"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700"
            >
              2519465
            </a>
            .
          </p>
        </div>
      </footer>
    </main>
  );
}
