import { Github, Linkedin, Mail, Phone, NotebookPen } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8">
          <h1 className="text-4xl font-bold">Shaurya Vardhan Singh</h1>
          <p className="text-xl mt-2">Front End Developer</p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="tel:8004511111"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <Phone size={18} />
              <span>8004511111</span>
            </a>
            <a
              href="mailto:gsshaurya@gmail.com"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <Mail size={18} />
              <span>gsshaurya@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shaurya-vardhan-singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/wulforr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://wulfor.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <NotebookPen size={18} />
              <span>Blog</span>
            </a>
          </div>
        </header>

        <main className="p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Summary</h2>
            <p className="text-gray-700">
              Full Stack Developer with 4 years of experience specializing in
              MERN stack. Skilled in building and scaling user-focused
              applications with a strong eye for responsive design, performance
              optimization, and clean code practices. Proven success in leading
              front-end projects, streamlining development processes, and
              enhancing user experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-black">Skills</h2>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2 text-black">
                Proficient
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "ReactJS",
                  "NextJS",
                  "NodeJS",
                  "JavaScript",
                  "Redux",
                  "MongoDB",
                  "AJAX",
                  "Git",
                  "CSS",
                  "HTML",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-black">
                Basic Knowledge
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "CI/CD",
                  "Python",
                  "Solidity",
                  "Vuejs",
                  "AWS",
                  "Firebase",
                  "Ionic",
                  "Scss",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Work Experience
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-black">
                Software Developer
              </h3>
              <p className="text-gray-600">
                Rep3, Bangalore | Dec 2020 - Present
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>
                  Led the frontend development for a blockchain-based tool used
                  by over 3 million users, scaling the product from scratch
                  using Nextjs.
                </li>
                <li>
                  Integrated Ethereum, Polygon, and ZkSync blockchains,
                  enhancing multi-wallet support via RainbowKit, leading to 810k
                  weekly active users.
                </li>
                <li>
                  Developed an admin dashboard to display community analytics,
                  improving decision-making for users managing quests.
                </li>
                <li>
                  Spearheaded the creation of dynamic landing pages, increasing
                  community engagement by showcasing custom assets.
                </li>
                <li>
                  Enhanced SEO by implementing Next.js features, dynamically
                  adding meta tags, and following the Open Graph protocol for
                  community pages.
                </li>
                <li>
                  Integrated AWS services (S3, Amplify, Cloudfront), including
                  S3 for community asset storage, AWS Amplify for Next.js
                  application deployment, and CloudFront as a CDN to optimize
                  content delivery.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-black">
                Software Developer
              </h3>
              <p className="text-gray-600">
                Zopsmart, Bangalore | Feb 2020 - Dec 2020
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>
                  Converted project from Microservices architecture to monorepo
                  architecture which resulted in increased efficiency in
                  development time.
                </li>
                <li>
                  Refactored critical react components in website builder
                  product, leading to a 15% reduction in page load time
                  therefore increasing the FCP and enhancing the user
                  experience.
                </li>
                <li>
                  Managed the shopping list microservice for the client which
                  has approximately 30 million requests per month.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Education
            </h2>
            <div>
              <h3 className="text-xl font-medium text-black">
                BTech in Computer Science
              </h3>
              <p className="text-gray-600">
                Jaypee Institute Of Information Technology | Jul 2017 - Apr 2021
              </p>
              <p className="text-gray-700">CGPA: 7.8</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-black">Projects</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-black">Price Watcher</h3>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>
                  Developed a project created using React and Node that notifies
                  users by sending an email when the price on any specific item
                  drops below threshold price.
                </li>
                <li>
                  Implemented token-based authentication (JWT) from scratch.
                </li>
                <li>
                  Used Web Scraping to get the required data from amazon website
                  and store the data in MongoDB.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-black">Espresso Labs</h3>
              <p className="text-gray-600">Jun 2020 - Jul 2024</p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>
                  Worked on a hotel management software which was a Progressive
                  Web App (PWA) using Ionic and firebase.
                </li>
                <li>
                  Created UI for different screens and layouts for it as well as
                  integrated it with the hotels API.
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
