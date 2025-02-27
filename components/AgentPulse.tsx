type AgentPulseProps = {
    size?: "small" | "medium" | "large",
    color?: "blue" | "green" | "orange" | "red",
};

function AgentPulse({size = "medium", color="green"}: AgentPulseProps) {
    const sizeClasses = {
        small: "w-4 h-4",
        medium: "w-12 h-12",
        large: "w-32 h-32",
    };

    const colorClasses = {
        blue: "bg-blue-500 shadow-[0_0_8px_4px_rgba(59,130,246,0.5)]",
        green: "bg-green-500 shadow-[0_0_8px_4px_rgba(70,214,116,0.5)]",
        orange: "bg-orange-500 shadow-[0_0_8px_4px_rgba(255,149,0,0.5)]",
        red: "bg-red-500 shadow-[0_0_8px_4px_rgba(220,53,69,0.5)]",
    };
  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}/>
  )
}

export default AgentPulse