import { PortableText } from "@portabletext/react";

const components = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[#1B2532] font-bold text-[30px] underline">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="!text-[#DD3B4A] font-bold text-[18px]">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-base text-gray-700 mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 flex flex-col gap-[8px]">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-[18px] text-[#1B2532] font-normal flex gap-[8px] items-center">
        <span className="w-[8px] h-[8px] mt-2 bg-[#1B2532] rounded-full block"></span>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value.href}
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <img
        src={value.asset.url}
        alt={value.alt || "صورة"}
        className="rounded-md my-4"
      />
    ),
  },
};

export default function PortableTextComponent({ value }) {
  return <PortableText value={value} components={components} />;
}
