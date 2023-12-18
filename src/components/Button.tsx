import clsx from "clsx";

interface ButtonProps {
  title: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export default function Button({
  title,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        { ["bg-blue-600 text-white"]: !disabled, ["bg-gray-200 text-black/80"]: disabled },
        "px-4 py-2 font-bold transition duration-200 align-top border-spacing-0.5 rounded-lg"
      )}
    >
      {title}
    </button>
  );
}
