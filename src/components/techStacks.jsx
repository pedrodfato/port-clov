import {
  Code,
  Database,
  Paintbrush,
  Layers,
  Cpu,
  Cloud,
  Boxes,
  Zap,
  Wind,
  Atom,
  Bolt,
  GitBranch,
  ShoppingCart,
  Globe,
} from "lucide-react";

const techStacks = {
  frontend: [
    { name: "HTML", icon: Code },
    { name: "CSS", icon: Paintbrush },
    { name: "JavaScript", icon: Zap },
    { name: "Tailwind", icon: Wind },
    { name: "React", icon: Atom },
    { name: "Vite", icon: Bolt },
    { name: "WordPress", icon: Globe },
    { name: "Elementor", icon: Layers },
    { name: "WooCommerce", icon: ShoppingCart },
  ],

  backend: [
    { name: "Bun", icon: Cpu },
    { name: "Elysia", icon: Cloud },
    { name: "n8n", icon: GitBranch },
    { name: "Supabase", icon: Database },
    { name: "SQL", icon: Database },
    { name: "PHP", icon: Code },
    {name: "Node.js", icon: Boxes}
  ]
};

function TechRow({ items, reverse = false }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-black to-transparent" />
     
         {/* Fade direita */}
         <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-black to-transparent" />

      <div className={`flex w-max ${reverse ? "marquee-reverse" : "marquee"}`}>
        
        {[...items, ...items, ...items].map((tech, i) => {
          const Icon = tech.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur text-white text-sm whitespace-nowrap"
            >
              <Icon className="w-4 h-4 text-[#A6ED69]" />
              <span>{tech.name}</span>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default function TechStacks() {
  return (
    <div className="w-full mt-10 space-y-6">
      <TechRow items={techStacks.frontend} />
      <TechRow items={techStacks.backend} reverse />
    </div>
  );
}
