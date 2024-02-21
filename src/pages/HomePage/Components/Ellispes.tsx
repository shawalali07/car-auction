import clsx from "clsx";
import { useEffect } from "react";

const ellipsesData = [1, 2, 3];

interface EllispesProps {
  type: "timed auction" | "general sales";
  selectedEllipse: number;
  setSelectedEllipse: React.Dispatch<React.SetStateAction<number>>;
  setCardOpacity: React.Dispatch<React.SetStateAction<number>>;
}

export const Ellispes: React.FC<EllispesProps> = ({
  type,
  selectedEllipse,
  setSelectedEllipse,
  setCardOpacity,
}) => {
 useEffect(() => {
   setCardOpacity(1);
   const interval = setTimeout(async () => {
     await fader();
     setSelectedEllipse((prev) => (prev === 2 ? 0 : prev + 1));
     setCardOpacity(0);
   }, 5000);

   return () => clearTimeout(interval);
 }, [selectedEllipse]);

 const fader = async () => {
   setCardOpacity(0);
   await new Promise((resolve) => setTimeout(resolve, 500));
 };

 return (
   <div
     className={clsx(
       'flex flex-row w-10 justify-between',
       type === 'timed auction' ? 'mr-3' : 'ml-3',
     )}
   >
     {ellipsesData.map((_, index) => (
       <EllipseItem
         key={`${type}-${index}`}
         isSelected={selectedEllipse === index}
         onClick={async () => {
           await fader();
           setSelectedEllipse(index);
         }}
       />
     ))}
   </div>
 );
};

interface EllipseItemProps {
  isSelected: boolean;
  onClick: () => void;
}

const EllipseItem: React.FC<EllipseItemProps> = ({ isSelected, onClick }) => {
  return (
    <div
      className={clsx(
        "rounded-full w-2 h-2 cursor-pointer",
        isSelected ? "bg-[#0080B4]" : "bg-[#484848]",
      )}
      onClick={onClick}
    />
  );
};
