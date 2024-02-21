type Props = {
  onClick?: any;
};

export const DropdownArrow: React.FC<any> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width='7'
      height='5'
      viewBox='0 0 7 5'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.77701 4.60738C3.78107 4.60213 3.7827 4.59513 3.78676 4.58988L6.6232 1.215C6.78163 1.02513 6.78163 0.717125 6.6232 0.52725C6.62157 0.5255 6.61995 0.524625 6.61832 0.52375C6.58307 0.477774 6.53892 0.440641 6.48896 0.414948C6.439 0.389255 6.38443 0.375622 6.32907 0.375H0.655384C0.599006 0.375981 0.543516 0.390282 0.492833 0.416892C0.442151 0.443502 0.397512 0.481773 0.362071 0.529L0.360446 0.52725C0.283771 0.622787 0.241577 0.744848 0.241577 0.871125C0.241577 0.997402 0.283771 1.11946 0.360446 1.215L3.20338 4.60738C3.23878 4.65205 3.28275 4.68793 3.33226 4.71253C3.38178 4.73713 3.43566 4.74988 3.4902 4.74988C3.54473 4.74988 3.59861 4.73713 3.64813 4.71253C3.69764 4.68793 3.74162 4.65205 3.77701 4.60738Z'
        fill='white'
      />
    </svg>
  );
};
