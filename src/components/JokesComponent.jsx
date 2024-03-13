/* eslint-disable react/prop-types */
const JokesComponent = ({ joke }) => {
  return (
    <div className="w-full border border-slate-500">
      <h2 className="bg-white text-black font-medium p-2 w-full">{joke}</h2>
    </div>
  );
};
export default JokesComponent;
