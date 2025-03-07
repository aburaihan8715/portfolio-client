'use client';
import React from 'react';
import Heading from '@/components/common/heading';
import CountUp from 'react-countup';
import {
  FaBuffer,
  FaClock,
  FaCoffee,
  FaHourglassHalf,
} from 'react-icons/fa';
import Container from '@/components/common/container';

const FunFactCard = ({
  icon: Icon,
  end,
  label,
}: {
  icon: React.ElementType;
  end: number;
  label: string;
}) => (
  <div className="flex flex-col items-center gap-3 rounded-md py-5 ring-1 ring-gray-600">
    <Icon className="text-5xl text-cyan-500" />
    <span className="text-4xl text-gray-400">
      <CountUp end={end} enableScrollSpy />
    </span>
    <p className="text-gray-400">{label}</p>
  </div>
);

const FunFacts = () => {
  const funFacts = [
    { id: 1, icon: FaBuffer, end: 100, label: 'Projects Completed' },
    { id: 2, icon: FaCoffee, end: 1300, label: 'Cup of coffee' },
    { id: 3, icon: FaClock, end: 5700, label: 'Hours Worked' },
    { id: 4, icon: FaHourglassHalf, end: 3, label: 'Ongoing projects' },
  ];

  return (
    <section id="fun-facts" className="scroll-m-20 py-2 md:py-10">
      <Container>
        <div className="mb-20 flex justify-center">
          <Heading text="Fun Facts" />
        </div>
        <div className="grid grid-cols-2 gap-5 px-2 md:grid-cols-4">
          {funFacts.map(({ id, icon, end, label }) => (
            <FunFactCard key={id} icon={icon} end={end} label={label} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FunFacts;
