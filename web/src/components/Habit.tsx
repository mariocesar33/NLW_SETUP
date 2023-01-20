interface HabitProps {
  completed: number
}

export function Habit({completed}: HabitProps) {
  return (
    <p className="bg-zinc-900 w-11 text-white">Habit: {completed}</p>
  )
}