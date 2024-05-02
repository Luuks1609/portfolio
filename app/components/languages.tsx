import { Progress, Tooltip } from "@nextui-org/react";

interface Language {
  label: string;
  value: number;
  tooltip: string;
}

// Calculate the current Duolingo streak
const startingStreak = 355; // Your current streak
const startingDate = new Date("2024-04-30"); // Your streak start date

const calculateStreak = () => {
  const today = new Date();
  const differenceInTime = today.getTime() - startingDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  return startingStreak + differenceInDays;
};

const streak = calculateStreak();

const languages: Language[] = [
  {
    label: "Dutch",
    value: 100,
    tooltip: "Fluent in my native langue Dutch",
  },
  {
    label: "English",
    value: 85,
    tooltip: "Proficient in English",
  },
  {
    label: "Spanish",
    value: 15,
    tooltip: `${streak} days of Duolingo streak! 🎉`,
  },
];

export default function Languages() {
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
