export default function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile img"
      className={`rounded-full h-10 cursor-pointer transition ease-in-out duration-300 transform hover:scale-110 ${className}`}
    />
  );
}
