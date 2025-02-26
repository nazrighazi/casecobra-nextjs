import { cn } from "@/lib/utils";

interface Phoneprops extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: Phoneprops) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 select-none"
        alt=""
      />
      <div className="absolute -z-10 inset-0">
        <img className="object-cover" src={imgSrc} alt="overlaying phone"></img>
      </div>
    </div>
  );
};

export default Phone;
