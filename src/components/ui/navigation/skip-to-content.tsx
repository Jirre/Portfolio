export const SkipToContent = () => {
  return (
    <a
      href={"#main-content"}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white dark:focus:bg-zinc-900 focus:text-zinc-950 dark:focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none ring-2 ring-primary"
    >
      Skip to content
    </a>
  );
};