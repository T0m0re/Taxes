// components/YoutubePreview.tsx
import Image from "next/image";
import { getYoutubeMeta } from "@/lib/getYoutubeMeta";
import Link from "next/link";

type Props = {
  videoId: string;
};

export default async function YoutubePreview({ videoId }: Props) {
  const meta = await getYoutubeMeta(videoId);

  return (
    <Link
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col w-full rounded overflow-hidden border hover:shadow-sm transition relative"
    >
        <div className="icon absolute right-[3%] top-[3%]">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 180"><path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg>
        </div>
      <Image
        src={meta.thumbnails.high.url}
        alt={meta.title}
        width={600}
        height={400}
        className="w-full"
      />

      <div className="p-4 flex flex-col justify-between h-full">
        <h3 className="text-lg font-semibold group-hover:text-red-600">
          {meta.title}
        </h3>
        
        <div className="flex items-center gap-2 mt-2">
            <p className="text-base text-gray-600 font-medium">
            {meta.channelTitle}
            </p>
            <span>|</span>
            <p className="text-base text-gray-400">
            {new Date(meta.publishedAt).toDateString()}
            </p>
        </div>
      </div>
    </Link>
  );
}
