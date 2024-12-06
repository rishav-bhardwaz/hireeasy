import { CloudArrowUpIcon, LockClosedIcon, ArrowTrendingUpIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Performance Report.',
    description:
      'Benchmark against the best and get a 360-degree view of your sales and support trainees. Optimize and improve effortlessly.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'AI Analysis.',
    description: 'Leverage the power of artificial intelligence to rate every call, save hundreds of hours of senior leadership in manual QC.',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Database backups.',
    description: 'Track the learning and progress of your team, identify strengths, gaps and weaknesses on a team and individual agent level.',
    icon: LockClosedIcon,
  },
]

export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Hire and Train faster</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              Mimic real call scenarios with your TG. Train, measure, and improve customer interactions without burning your lead list.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://i.postimg.cc/K8tXKMhk/Figma-Design.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}