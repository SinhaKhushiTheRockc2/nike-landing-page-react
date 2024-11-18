const Button = ({label, iconUrl,backgroundColor,textColor,borderColor,fullWidth}) => {
  const customStyles = backgroundColor
  ? `${textColor} ${backgroundColor} ${borderColor}`
  : 'text-white bg-coral-red hover:scale-90 hover:bg-red-500 hover:text-black duration-300 border-coral-red transition ease-in-out delay-75';
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none border rounded-full ${customStyles} ${fullWidth && 'w-full'}`}>
      {label}
      {iconUrl && <img src={iconUrl} alt="arrow-right" className="ml-2 rounded-full w-5 h-5"/>}
    </button> 
  )
}

export default Button
