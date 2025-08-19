"use client";

import { Progress, Tooltip } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

interface Language {
  label: string;
  value: number;
  tooltip: string;
}

async function getDuolingoStreak(username: string): Promise<number> {
  const res = await fetch(
    `https://www.duolingo.com/2017-06-30/users?username=${username}&fields=streak,streakData%7BcurrentStreak,previousStreak%7D%7D`
  );
  const data = await res.json();
  const userData = data.users[0];
  // I didn't know which of these fields matter, so I just get the max of them.
  const streak = Math.max(
    userData?.streak ?? 0,
    userData?.streakData?.currentStreak?.length ?? 0,
    userData?.streakData?.previousStreak?.length ?? 0
  );
  return streak;
}

export default function Languages() {
  const [duolingoStreak, setDuolingoStreak] = useState<number | null>(null);

  useEffect(() => {
    getDuolingoStreak("luuks1609").then(setDuolingoStreak).catch(() => setDuolingoStreak(0));
  }, []);

  const languages: Language[] = [
    {
      label: "Dutch",
      value: 100,
      tooltip: "Fluent in my native language Dutch",
    },
    {
      label: "English",
      value: 85,
      tooltip: "Proficient in English",
    },
    {
      label: "Spanish",
      value: 50,
      tooltip:
        duolingoStreak !== null
          ? `${duolingoStreak} days of Duolingo streak! 🎉`
          : "Loading Duolingo streak...",
    },
  ];

  return (
    <div className="my-8 flex flex-col w-full gap-y-5">
      {languages.map((language) => (
        <Tooltip
          key={language.label}
          content={language.tooltip}
          placement="bottom-start"
          color="foreground"
        >
          <Progress
            color="primary"
            classNames={{
              indicator: "bg-white",
            }}
            label={language.label}
            aria-label={language.label}
            value={language.value}
          />
        </Tooltip>
      ))}
    </div>
  );
}
