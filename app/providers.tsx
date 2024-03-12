import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <TooltipProvider>
      {children}
      <Toaster />
    </TooltipProvider>
  );
};

export default Providers;
