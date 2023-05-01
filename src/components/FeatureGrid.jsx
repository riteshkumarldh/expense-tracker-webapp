const FeatureGrid = ({ icon, title, desc, color }) => {
  return (
    <div className="flex gap-7 items-start">
      <div
        className={`${color} text-white rounded-full min-h-[60px] min-w-[60px] text-2xl grid place-items-center`}
      >
        <i className={`${icon}`}></i>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-slate-500">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureGrid;
