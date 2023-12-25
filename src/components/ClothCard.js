const ClothCard = (props) => {
  const { dData } = props;

  return (
    <div className="cloth-card bg-gray-200 p-4 rounded-lg shadow-md flex flex-row items-center">
      <img
        alt="cloth-logo"
        src={dData.displayImage}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-base font-semibold">Bewkoof@</h3>
      <h4 className="text-lg font-bold text-center my-2">{dData.name}</h4>
      <h5 className="text-sm">⭐{dData.ratings}</h5>
    </div>
  );
};

export default ClothCard;
