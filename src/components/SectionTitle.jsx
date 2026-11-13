const SectionTitle = ({ eyebrow, title, description }) => (
  <div className="mx-auto max-w-3xl text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
      {eyebrow}
    </p>
    <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    )}
  </div>
);

export default SectionTitle;
