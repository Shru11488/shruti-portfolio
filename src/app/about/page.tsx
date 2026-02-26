export default function About() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
            <p className="text-gray-600 text-lg mb-10 text-center">
                I am a passionate Full Stack Developer with a strong interest in building 
                modern web applications using React, Redux, and Next.js. 
                I enjoy solving problems and creating responsive, user-friendly interfaces.
            </p>

            {/* Technical Skills Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg text-center">React.js</div>
                    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg text-center">Next.js</div>
                    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg text-center">Redux Toolkit</div>
                    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg text-center">JavaScript</div>
                    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg text-center">Node.js</div>
                    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg text-center">MongoDB</div>
                </div>
            </div>
           
        {/* Education Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <p className="text-gray-600">
          Bachelor's Degree in Information Technology  
          <br />
          Currently enhancing my skills through hands-on full stack projects.
        </p>
      </div>
    </section>
    )}