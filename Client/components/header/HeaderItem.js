export default function HeaderItem({ Icon, title }) {
  return (
    <div className="flex flex-col items-center w-10 sm:w-14  group hover:text-pink-400 hover:cursor-pointer ">
      <Icon className="h-8 sm:h-12 3xl:h-36 group-hover:animate-bounce" />
      <p className="text-red-500 text-xl 3xl:text-3xl tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}
