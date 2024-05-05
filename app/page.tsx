import Link from 'next/link';

export default async function Page() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-2xl">Mental Gym</h1>
        </div>
        <div className="flex space-x-3">
          <Link
            href="https://devpost.com/software/mental-gym"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Our hackathon submission
          </Link>
          <p className="text-white">·</p>
          <a
            href="/app"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
