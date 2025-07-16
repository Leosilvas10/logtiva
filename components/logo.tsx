import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logtiva-logo.svg"
      alt="Logo da Logtiva"
      width={40}
      height={40}
      priority
      className="rounded-full"
    />
  );
}
