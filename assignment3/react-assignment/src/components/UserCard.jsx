const UserCard = ({ name, email }) => {
    return (
      <div className="border border-gray-300 p-4 rounded-lg shadow-md w-64 text-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    );
  };
  
  export default UserCard;
  