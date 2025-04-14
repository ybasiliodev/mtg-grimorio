import React from "react";

const Card = ({ title, description, imageUrl, buttonText, redirectRoute }) => {

  function handleClick() {
    get(route('redirectRoute'));
  }
  
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-48 object-fill"
        src={imageUrl}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200" onClick={handleClick()}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;