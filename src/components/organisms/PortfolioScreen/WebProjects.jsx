import React from "react";
// import PropTypes from "prop-types";
import SliderContainer from "../../molecules/Slider/SliderContainer";
import SliderSlide from "../../molecules/Slider/SliderSlide";

const WebProjects = () => {
  const data = [
    {
      id: 1,
      title: "Hotel Booking Mobile Apps (2019)",
      details: `I am an intern at the Swiss-Belhotel SKA Group Pekanbaru hotel, a state of the art 4-star hotel with 107 rooms, 10 Meeting Room and 1 Big Grand Ballroom. During my internship, I developed a mobile application for room bookings, meeting rooms and grand ballroom rentals.
      I’m using React Native Framework to build the front end of the apps and then for the back end I'm using PHP language to transfer data in JSON / API.`,
    },
    {
      id: 2,
      title: "Itinerary Mobile Apps For Travel Agencies (2019)",
      details: `Mobile Apps are built using React Native as the front end and PHP language for the back end process.
The feature developed in the app is that users can create the desired itinerary starting from the duration of the trip, the number of tourists to be taken, the hotel they want to stay in, the tourist attractions to be visited, the lunch and dinner places and the transportation they want to use during the trip.
At the end of the itinerary creation process, the user can immediately find out how much the itinerary budget was made per tourist.`,
    },
    {
      id: 3,
      title: "Academic System (2020)",
      details: `The system is built using the PHP language and Codeigniter framework.
The features developed on this system are the academic data of all students at the school, starting from report cards per semester, subjects, lesson schedules, classes, online exams, attitude scores, semester registration and so on. Then there are also features for teaching staff at schools such as recap grades, attendance, achievement,student sanctions / violations, creating online exams and so on.`,
    },
    {
      id: 4,
      title: "Coffee Company Website (2020)",
      details: `Website built using PHP language and Codeigniter framework. 
The feature developed on the website is that users can order coffee directly through the website. Ordering coffee on this website is also different from ordering in general, on this website users will be given the experience of ordering coffee by directly selecting the beans they want to use, determining how to serve coffee, determining how to brew coffee, and selecting the roast level.`,
    },
  ];

  return (
    <SliderContainer style={{ transform: `translateX(0%)` }}>
      <SliderSlide column={1}>
        {data.map((item, i) => (
          <div key={i} className="w-full border-2 border-white border-opacity-20  rounded-2xl p-5">
            {console.log(item)}
            <h5 className="text-white font-mont-bold tracking-wide text-lg">{item.title}</h5>
            <p className="text-white mt-3 font-mont-regular tracking-wide text-xs leading-5">
              {item.details}
            </p>
          </div>
        ))}
      </SliderSlide>
    </SliderContainer>
  );
};

WebProjects.propTypes = {};

export default WebProjects;
