
import { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPrice } from "@/lib/utils";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterSection {
  id: string;
  title: string;
  options: FilterOption[];
}

interface ProductFiltersProps {
  onFilterChange?: (filters: any) => void;
}

export function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  
  // Mock filter sections
  const filterSections: FilterSection[] = [
    {
      id: "condition",
      title: "Condition",
      options: [
        { id: "new", label: "New" },
        { id: "like-new", label: "Like New" },
        { id: "good", label: "Good" },
        { id: "fair", label: "Fair" },
        { id: "poor", label: "Poor" },
      ],
    },
    {
      id: "brand",
      title: "Brand",
      options: [
        { id: "dell", label: "Dell" },
        { id: "hp", label: "HP" },
        { id: "lenovo", label: "Lenovo" },
        { id: "asus", label: "Asus" },
        { id: "acer", label: "Acer" },
        { id: "apple", label: "Apple" },
        { id: "msi", label: "MSI" },
        { id: "razer", label: "Razer" },
      ],
    },
  ];

  const handleConditionChange = (id: string) => {
    setSelectedConditions(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleBrandChange = (id: string) => {
    setSelectedBrands(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handlePriceRangeChange = (values: number[]) => {
    setPriceRange(values);
  };

  const handleFilterReset = () => {
    setPriceRange([0, 5000]);
    setSelectedConditions([]);
    setSelectedBrands([]);
  };

  const handleFilterApply = () => {
    if (onFilterChange) {
      onFilterChange({
        priceRange,
        conditions: selectedConditions,
        brands: selectedBrands,
      });
    }
  };

  return (
    <div className="w-full p-4 border rounded-lg bg-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={handleFilterReset}>
          Reset All
        </Button>
      </div>
      
      <div className="space-y-6">
        {/* Price Range Filter */}
        <div>
          <h3 className="font-medium mb-3">Price Range</h3>
          <Slider 
            defaultValue={[0, 5000]} 
            max={5000} 
            step={50} 
            value={priceRange}
            onValueChange={handlePriceRangeChange}
            className="mb-6"
          />
          <div className="flex items-center justify-between">
            <div className="w-full max-w-[45%]">
              <Label htmlFor="min-price">Min</Label>
              <Input
                id="min-price"
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="mt-1"
              />
            </div>
            <span className="px-2">-</span>
            <div className="w-full max-w-[45%]">
              <Label htmlFor="max-price">Max</Label>
              <Input
                id="max-price"
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="mt-1"
              />
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>
        
        {/* Accordion Filter Sections */}
        <Accordion type="multiple" className="space-y-2">
          {filterSections.map((section) => (
            <AccordionItem key={section.id} value={section.id}>
              <AccordionTrigger className="py-3 text-base font-medium">
                {section.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pt-1">
                  {section.options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`${section.id}-${option.id}`} 
                        checked={
                          section.id === "condition" 
                            ? selectedConditions.includes(option.id)
                            : selectedBrands.includes(option.id)
                        }
                        onCheckedChange={() => {
                          if (section.id === "condition") {
                            handleConditionChange(option.id);
                          } else if (section.id === "brand") {
                            handleBrandChange(option.id);
                          }
                        }}
                      />
                      <label
                        htmlFor={`${section.id}-${option.id}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {/* Apply Filters Button */}
        <Button className="w-full" onClick={handleFilterApply}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
}
