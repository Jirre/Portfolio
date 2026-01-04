import { Box } from "@/components/ui/box";
import { Button } from "@/components/ui/buttons";
import { FaStar } from "react-icons/fa";

interface FilterBarProps<T extends string> {
  activeFilter: T;
  onFilterChange: (tag: T) => void;
  options: readonly T[] | T[];
}

export const FilterBar = <T extends string>({
                                              activeFilter,
                                              onFilterChange,
                                              options
                                            }: FilterBarProps<T>) => {
  return (
    <Box className="p-4 flex flex-wrap justify-center gap-2">
      {options.map((tag) => {
        const hasStar = tag.includes("*");
        const label = tag.replace("*", "");

        return (
          <Button
            key={tag}
            onClick={() => onFilterChange(tag)}
            variant={activeFilter === tag ? "highlight" : "default"}
            className="px-4 py-1 rounded-full border transition-all capitalize text-sm font-medium gap-1"
          >
            {hasStar && <FaStar size={12} className="shrink-0" />}
            {label}
          </Button>
        );
      })}
    </Box>
  );
};