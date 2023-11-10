import React from "react";

const Testimonials = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          What our students say about us;
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <blockquote className="rounded-lg bg-white p-6 shadow-md sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Man"
                src="https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  Sarah Johnson
                </p>
                <p className="mt-0.5 text-sm font-small text-gray-500">
                  Frontend Developer @Stripe
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              I can't believe how much I've learned from the courses on this
              website. The instructors are amazing, and the content is
              top-notch. Thank you, CodeHub, for this incredible opportunity
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-white p-6 shadow-md sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  David Clark
                </p>

                <p className="mt-0.5 text-sm font-small text-gray-500">
                  BlockChain Developer @Kushites
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              I stumbled upon this website while searching for coding courses.
              The learning experience has been exceptional, and the community is
              supportive. Thanks to CodeHub, I've become a proficient coder!
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-white p-6 shadow-md sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt="Man"
                src="https://web-images.pixpa.com/ajHEWPBxk0_3pRaLCAKZ33oKmOUHMRwjRHKT8Le_UL0/rs:fit:1200:0/q:80/czM6Ly9waXhwYS5jb20vL2NvbS9hcnRpY2xlcy8xNTI1ODkxODc5LTE1MDQ0NC1vbGFkaW1lamktb2R1bnNpLTQxNTYwNi11bnNwbGFzaGpwZy5qcGc="
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  Emily Turner
                </p>

                <p className="mt-0.5 text-sm font-small text-gray-500">
                  Backend Developer @Smiles
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              As a lifelong learner, I've explored many online courses, but
              CodeHub stands out. The diversity of subjects and the quality of
              instructors are unbeatable. I'm so grateful for this resource!
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
