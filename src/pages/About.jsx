const About = () => {
  return (
    <div className="p-8 mt-12 bg-white rounded-lg shadow-lg max-w-3xl mx-auto space-y-6 text-gray-900">
      <h2 className="text-4xl font-semibold mb-6 text-center text-black">
        About this application
      </h2>
      <div className="space-y-6 text-lg text-black">
        <p>
          This weather forecast application allows users to check the weather in
          different cities around the world. around the world. You can search
          for the current weather, mark your favorite cities and visualize them
          on an interactive map. In addition, the application uses advanced
          technology to display accurate and easy-to-understand data. Thanks to
          the integration with reliable sources, we offer detailed forecasts,
          including temperatures, humidity, wind speed and other weather
          variables. weather variables.
        </p>

        <p>
          In addition, the interface is designed to be intuitive, allowing users
          to quickly access the information they need with just a few clicks.
          with just a few clicks. You can view the forecast for the next 5 days.
          The favorite cities option will allow you to save your most consulted
          places and access them quickly and easily.
        </p>
      </div>
      <div className="space-y-6">
        <h5 className="text-2xl font-semibold text-black">
          Additional information:
        </h5>
        <p className="text-lg text-black">
          This application was created as a project to demonstrate how to
          integrate various frontend technologies into a single interactive
          system. interactive system. It is designed to be easy to use and fast
          in accessing weather information. It uses third-party APIs to obtain
          accurate data, ensuring that you will always have the most up-to-date
          information available in real time.
        </p>
        <p className="text-lg text-black">
          If you are interested in knowing more details about the development of
          the application or in contributing with improvements, feel free to
          check out the source code on GitHub. The community is welcome to
          collaborate and grow this project
        </p>
        <p className="text-lg text-black">
          I hope you enjoy using the app and that you find it useful in your
          day-to-day life to plan your activities based on the weather!
        </p>
      </div>

      {/* Agregamos un ícono al final */}
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v12m6-6H6"
          />
        </svg>
      </div>
    </div>
  );
};

export default About;