import Image from "next/image";

export default function Tech({ icon, url }: { icon: string; url?: string }) {
  return (
    <div className="flex h-14 w-full items-center justify-center rounded border px-3 py-4 border-neutral-700 bg-neutral-800">
      <a href={url} target="_blank" className="cursor-pointer">
        <Image src={icon} alt={icon} height={10} width={100} />
      </a>
    </div>
  );
}
