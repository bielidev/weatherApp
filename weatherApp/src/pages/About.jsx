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

      <div className="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" viewBox="0 0 24 24"><path fill="currentColor" d="M6.5 20q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.312 3.188T18.5 20zm0-2h12q1.05 0 1.775-.725T21 15.5t-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6T8.463 7.463T7 11h-.5q-1.45 0-2.475 1.025T3 14.5t1.025 2.475T6.5 18m5.5-6"/></svg>
      </div>
    </div>
  );
};

export default About;