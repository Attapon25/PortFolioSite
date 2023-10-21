"use client";
import React from "react";

const achievementsList = [
  {
    metric: "Projects",
    value: 3,
    postfix: "",
  },
  {
    prefix: "~",
    metric: "Users",
    value: 1,
  },
  {
    metric: "Awards",
    value: NaN,
  },
  {
    metric: "Years",
    value: 2,
  },
];
let interval = 1000;
const AchievementsSection = () => {
  return (
    
    <div className="relative py-8 px-4 2xl:gap-16 sm:py-16 xl:px-16">
    <div
      className="absolute -inset-5 rounded-lg bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-600 via-zinc-600 to-secondary-600 opacity-40 blur-3xl"
    ></div>
    <div className="relative py-8 px-16 flex flex-col sm:flex-row sm:flex-row items-center justify-between sm:border sm:border-zinc-#33353F rounded-md text-slate-#33353F">

    {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold">
                {achievement.prefix && `${achievement.prefix} `}
                {achievement.value}
                {achievement.postfix && `${achievement.postfix} `}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
    </div>
  </div>

  );
};

export default AchievementsSection;
