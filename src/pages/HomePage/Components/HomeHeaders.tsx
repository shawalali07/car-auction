import clsx from 'clsx';

interface HomeHeadersProps {
  headers: string[];
}

export const HomeHeaders: React.FC<HomeHeadersProps> = ({ headers }) => {
  return (
    <div className="flex-row mt-12 md:flex hidden gap-1 border border-black rounded-full">
      {headers.map((header, index) => {
        return (
          <HeaderItem
            title={header}
            key={`header-${index}`}
            action={() => {}}
            isFirst={index === 0}
            isLast={index === headers.length - 1}
          />
        );
      })}
    </div>
  );
};

interface HeaderItemProps {
  title: string;
  action: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

const HeaderItem: React.FC<HeaderItemProps> = ({
  title,
  action,
  isFirst,
  isLast,
}) => {
  return (
    <span
      className={clsx(
        'text-3xl flex-1 py-8 px-8 cursor-pointer text-white  bg-gradient-to-b from-primary-gradient-a via-primary-gradient-b to-primary-gradient-c',
        isFirst && 'rounded-l-full',
        isLast && 'rounded-r-full',
      )}
      onClick={action}
    >
      {title}
    </span>
  );
};
