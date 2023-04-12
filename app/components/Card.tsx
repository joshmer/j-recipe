interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className="flex bg-slate-900 rounded-lg p-4 min-w-[450px] min-h-96 shadow-lg">
      {children}
    </div>
  );
};

export default Card;
