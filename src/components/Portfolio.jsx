import { motion } from 'framer-motion';
import dishafashion from '../assets/images/portfolio/dishaFashion.png';
import pocketai from '../assets/images/portfolio/pocketAi.png';
import weatherapp from '../assets/images/portfolio/portfolio-2.jpg';
import foodandfun from '../assets/images/portfolio/portfolio-1.jpg';
import drumkit from '../assets/images/portfolio/portfolio-5.jpg';
import dicegame from '../assets/images/portfolio/portfolio-4.jpg';
export default function Portfolio({ isActive }) {
  const portfolios = [
    {
      id: 1,
      title: 'DISHA',
      imgSrc: dishafashion,
      technologies: 'React.js, Material-UI, Tailwind CSS, MongoDB, Node.js',
      description: 'Created an interactive KPI dashboard for 15+ key metrics, improving operational efficiency. APIs for MongoDB integration and 25% faster loading time.',
    },
    {
      id: 2,
      title: 'PocketAI',
      imgSrc: pocketai,
      technologies: 'TypeScript, React.js, Node.js, MongoDB, Shadcn',
      description: 'Built a scalable AI-based platform with video uploads and analysis. Developed API endpoints for backend communication.',
    },
    {
      id: 3,
      title: 'Weather App',
      imgSrc: weatherapp,
      technologies: 'React.js, OpenWeather API',
      description: 'Designed an API-based weather app for real-time forecasts. Integrated React.js components with OpenWeather API for up-to-date data.',
    },
    {
      id: 4,
      title: 'Food and Fun Website',
      imgSrc: foodandfun,
      technologies: 'JavaScript, HTML, CSS, PHP, MySQL',
      description: 'Created an interactive frontend with responsive design. Implemented a PHP and MySQL backend for seamless data management.',
    },
    {
      id: 5,
      title: 'Drum Kit',
      imgSrc: drumkit,
      technologies: 'HTML, CSS, JavaScript',
      description: 'Developed a drum kit project where clicking emits sound, showcasing interactive elements.',
    },
    {
      id: 6,
      title: 'Dice Game',
      imgSrc: dicegame,
      technologies: 'HTML, CSS, JavaScript',
      description: 'Simple two-player dice rolling game with interactive UI elements.',
    },
  ];

  return (
    <section className={`portfolio section ${isActive ? 'active' : ''}`} id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Projects :</h2>
          </div>
        </div>
        <div className="row">
          {portfolios.map((item) => (
            <div key={item.id} className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark relative group h-[300px] w-[400px]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="portfolio-img relative overflow-hidden h-[200px] w-[400px] p-5"
                >
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 text-white opacity-0 transition-opacity duration-300"
                  >
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold">{item.technologies}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
                <h4 className="mt-4 text-center">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
