interface statsProps {
  quantity: string;
  description: string;
}

export const Statistics = () => {
  const stats: statsProps[] = [
    {
      quantity: "104",
      description: "Members",
    },
    {
      quantity: "4M+",
      description: "Km Covered",
    },
    {
      quantity: "20+",
      description: "Challenges",
    },
    {
      quantity: "20+",
      description: "Events",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl ">{quantity}</h2>
            <p className="text-fgsubtle text-xl">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
