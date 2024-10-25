const skillItem = [
    {
      imgSrc: '/js.svg',
      label: 'JavaScript',
      desc: 'Programming Language'
    },
    {
      imgSrc: '/re.svg',
      label: 'React',
      desc: 'Frontend Library'
    },
    {
      imgSrc: '/next.js.svg',
      label: 'Next.js',
      desc: 'React Framework'
    },
    {
      imgSrc: '/nodejs.svg',
      label: 'NodeJS',
      desc: 'Backend Runtime'
    },
    {
      imgSrc: '/express.svg',
      label: 'ExpressJS',
      desc: 'Node.js Framework'
    },
    {
      imgSrc: '/mongodb.svg',
      label: 'MongoDB',
      desc: 'NoSQL Database'
    },
    {
      imgSrc: '/firebase.svg',
      label: 'Firebase',
      desc: 'Backend as a Service'
    },
    {
      imgSrc: '/passport.png',
      label: 'Passport',
      desc: 'Authentication Middleware'
    },
    {
      imgSrc: '/css3.svg',
      label: 'CSS',
      desc: 'Styling Language'
    },
    {
      imgSrc: '/ts.svg',
      label: 'TailwindCSS',
      desc: 'CSS Framework'
    },
    {
      imgSrc: '/appwrite.svg',
      label: 'Appwrite',
      desc: 'Backend Server'
    },
    {
      imgSrc: '/zegocloud.png',
      label: 'Zegocloud',
      desc: 'Video Conferencing'
    },
    {
      imgSrc: '/aceternity.png',
      label: 'Aeternity',
      desc: 'User Interface'
    },
    {
      imgSrc: '/redux.svg',
      label: 'Redux',
      desc: 'State Management'
    }
  ];
  
  
  const Skill = () => {
    return (
      <section className=" lg:pt-32 mb-10 py-10">
        <div className="px-4 mx-auto lg:px-8 xl:max-w-6xl">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 text-center text-2xl lg:4xl font-semibold underline decoration-purple-600">
            Essential Tools I Use
          </h2>
          <p className="mt-2 text-gray-600 text-center">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {skillItem.map(({ imgSrc, label, desc }, key) => (
              <div key={key} className="flex flex-col items-center text-center">
                <img src={imgSrc} alt={label} className="w-16 h-16 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Skill;
  