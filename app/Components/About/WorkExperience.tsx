const WorkExperience = () => {
    return (
        <section id="work-experience" className="mt-24">
            <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">
                Work Experience
            </h2>
            <div className="flex flex-col gap-14">
                <div className="flex gap-10 max-sm:flex-col">
                    <p className="text-light-gray whitespace-nowrap max-sm:hidden">
                        2024 - 2025
                    </p>
                    <div>
                        <h3 className="text-white text-lg font-semibold">
                            Software Development Trainee
                        </h3>
                        <p className="text-light-gray mb-4">
                            Professional Software Development Course Jawan Pakistan
                            <span className="text-light-gray ml-2 max-sm:inline-block hidden">
                                • (2024 - 2025)
                            </span>
                        </p>
                        <p className="text-light-gray">
                            Over the past year, I have been studying professional software development at Jawan Pakistan, where my primary focus has been on modern frontend technologies such as HTML, CSS, JavaScript, and React. I started my web development journey in 2024 with zero prior knowledge but a strong passion for coding. Through consistent practice and continuous learning, I progressed from basic HTML & CSS to JavaScript, and then moved on to advanced technologies like React, Tailwind CSS, Next.js, and TypeScript. I am currently expanding my skills by exploring backend technologies such as Node.js, Express.js, and MongoDB. <br />
                            <br />
                            During this time, I completed several practical, real-world assignments, including a Student Management System with dynamic forms and CRUD functionality, a Contact Book App using local storage, and a React-based single-page project that was also deployed online. These projects helped me build a solid understanding of core frontend concepts such as component-based architecture, props and state management, and routing.
                            <br />
                            <br />
                            In addition, I gained hands-on experience with Git and GitHub for version control, and I consistently focused on writing clean, well-structured, and maintainable code.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;